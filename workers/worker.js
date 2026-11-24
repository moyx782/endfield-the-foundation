const RAW_ORIGIN = "https://raw.githubusercontent.com/moyx782/endfield-the-foundation/main";

const MIME_MAP = {
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "application/javascript; charset=utf-8",
  json: "application/json; charset=utf-8",
  svg: "image/svg+xml; charset=utf-8",
  md: "text/markdown; charset=utf-8",
  txt: "text/plain; charset=utf-8",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  ico: "image/x-icon",
  woff2: "font/woff2",
  ttf: "font/ttf",
  mp4: "video/mp4"
};

const BLOCKED_PREFIXES = [".git", "workers/", "wrangler.jsonc", "web/server.py", "web/server.log"];

function getContentType(relPath) {
  const idx = relPath.lastIndexOf(".");
  if (idx === -1) return "application/octet-stream";
  const ext = relPath.slice(idx + 1).toLowerCase();
  return MIME_MAP[ext] || "application/octet-stream";
}

function cacheHeaderFor(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.endsWith(".html") || lower === "web/app.js" || lower === "web/styles.css" || lower === "web/cipher-svg.js") {
    return "public, max-age=300, stale-while-revalidate=600";
  }
  return "public, max-age=86400";
}

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" }
      });
    }

    const url = new URL(request.url);
    let rawPathname;
    try {
      rawPathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response("Bad Request", { status: 400 });
    }

    let relPath = rawPathname.replace(/^\/+/, "");
    if (!relPath || relPath.endsWith("/")) {
      relPath += "index.html";
    }

    if (
      relPath.includes("..") ||
      relPath.includes("\\") ||
      relPath.includes("\0") ||
      BLOCKED_PREFIXES.some((p) => relPath === p || relPath.startsWith(p))
    ) {
      return new Response("Forbidden", { status: 403 });
    }

    const encodedPath = relPath.split("/").map((seg) => encodeURIComponent(seg)).join("/");
    const upstreamUrl = `${RAW_ORIGIN}/${encodedPath}`;

    const rangeHeader = request.headers.get("Range");
    const fetchHeaders = new Headers({
      "User-Agent": "Cloudflare-Worker-Foundation-Archive"
    });
    if (rangeHeader) {
      fetchHeaders.set("Range", rangeHeader);
    }

    const fetchOptions = {
      method: request.method,
      headers: fetchHeaders
    };
    if (!rangeHeader) {
      fetchOptions.cf = {
        cacheEverything: true,
        cacheTtl: relPath.endsWith(".html") ? 300 : 86400
      };
    }

    const upstreamResp = await fetch(upstreamUrl, fetchOptions);
    if (upstreamResp.status === 404) {
      return new Response("Not Found", { status: 404 });
    }

    const outHeaders = new Headers();
    const contentType = getContentType(relPath);
    outHeaders.set("Content-Type", contentType);
    outHeaders.set("Accept-Ranges", "bytes");
    outHeaders.set("Cache-Control", cacheHeaderFor(relPath));
    outHeaders.set("X-Content-Type-Options", "nosniff");
    outHeaders.set("Access-Control-Allow-Origin", "*");

    for (const h of ["Content-Length", "Content-Range", "ETag", "Last-Modified"]) {
      const val = upstreamResp.headers.get(h);
      if (val) outHeaders.set(h, val);
    }

    return new Response(request.method === "HEAD" ? null : upstreamResp.body, {
      status: upstreamResp.status,
      statusText: upstreamResp.statusText,
      headers: outHeaders
    });
  }
};
