/* =========================================================
   THE FOUNDATION // 基石 — Vector SVG Cipher Engine
   Single-Source-of-Truth Reconstructed from 4K PV Frames
   ========================================================= */
(function (global) {
  "use strict";

  const GLYPHS = {"A": {"w": 62, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L30.00 12.00 L54.00 88.00"}, {"t": "path", "d": "M8.00 88.00 L24.00 52.00 L40.00 88.00 L54.00 88.00"}, {"t": "path", "d": "M8.00 88.00 L40.00 88.00"}]}, "C": {"w": 48, "attested": true, "els": [{"t": "path", "d": "M42.00 12.00 L10.00 12.00 L10.00 88.00"}]}, "D": {"w": 58, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L48.00 12.00 L29.00 42.00 L10.00 12.00 Z"}, {"t": "path", "d": "M14.00 50.00 L44.00 50.00"}, {"t": "path", "d": "M9.00 60.00 L19.00 88.00 L29.00 54.00 L39.00 88.00 L49.00 60.00"}]}, "E": {"w": 58, "attested": true, "els": [{"t": "path", "d": "M6.00 12.00 L34.00 12.00"}, {"t": "path", "d": "M34.00 12.00 L35.74 12.08 L37.47 12.30 L39.18 12.68 L40.84 13.21 L42.45 13.87 L44.00 14.68 L45.47 15.62 L46.86 16.68 L48.14 17.86 L49.32 19.14 L50.38 20.53 L51.32 22.00 L52.13 23.55 L52.79 25.16 L53.32 26.82 L53.70 28.53 L53.92 30.26 L54.00 32.00 L53.92 33.74 L53.70 35.47 L53.32 37.18 L52.79 38.84 L52.13 40.45 L51.32 42.00 L50.38 43.47 L49.32 44.86 L48.14 46.14 L46.86 47.32 L45.47 48.38 L44.00 49.32 L42.45 50.13 L40.84 50.79 L39.18 51.32 L37.47 51.70 L35.74 51.92 L34.00 52.00"}, {"t": "path", "d": "M34.00 52.00 L18.00 52.00"}, {"t": "path", "d": "M20.00 52.00 L20.00 88.00"}]}, "F": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M8.00 12.00 L38.00 54.00 L8.00 88.00 L48.00 88.00"}, {"t": "path", "d": "M48.00 12.00 L8.00 88.00"}]}, "G": {"w": 54, "attested": true, "els": [{"t": "path", "d": "M44.00 12.00 L10.00 60.00 L44.00 60.00 L44.00 88.00"}]}, "H": {"w": 60, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L50.00 12.00 L29.00 58.00"}, {"t": "path", "d": "M10.00 12.00 L38.00 88.00 L52.00 60.00"}]}, "I": {"w": 52, "attested": true, "els": [{"t": "path", "d": "M37.50 14.28 L36.15 13.58 L34.74 13.00 L33.28 12.55 L31.79 12.23 L30.28 12.05 L28.75 12.00 L27.23 12.09 L25.72 12.32 L24.24 12.68 L22.80 13.17 L21.41 13.79 L20.08 14.53 L18.82 15.39 L17.64 16.36 L16.55 17.42 L15.56 18.59 L14.68 19.83 L13.92 21.15 L13.28 22.53 L12.76 23.97 L12.38 25.44 L12.12 26.94 L12.01 28.46 L12.03 29.99 L12.19 31.50 L12.48 33.00 L12.90 34.46 L13.46 35.88 L14.14 37.25 L14.93 38.55 L15.85 39.77 L16.86 40.90 L17.98 41.94 L19.18 42.88 L20.46 43.70 L21.82 44.41"}, {"t": "path", "d": "M22.00 44.40 L36.00 47.00 L11.00 88.00"}]}, "J": {"w": 58, "attested": true, "els": [{"t": "circle", "cx": 29, "cy": 25, "r": 13}, {"t": "path", "d": "M8.00 22.00 L29.00 88.00 L50.00 22.00"}]}, "L": {"w": 54, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L44.00 12.00 L44.00 62.00 L10.00 62.00 L10.00 12.00 Z"}, {"t": "path", "d": "M10.00 74.00 L44.00 74.00 L44.00 88.00 L10.00 88.00 L10.00 74.00 Z"}]}, "M": {"w": 62, "attested": true, "els": [{"t": "circle", "cx": 31, "cy": 27, "r": 15}, {"t": "circle", "cx": 22, "cy": 71, "r": 14}, {"t": "circle", "cx": 40, "cy": 71, "r": 14}]}, "N": {"w": 58, "attested": true, "els": [{"t": "path", "d": "M10.00 24.00 L10.00 88.00 L44.00 88.00 L10.00 24.00 Z"}, {"t": "circle", "cx": 42, "cy": 22, "r": 10.5}]}, "O": {"w": 52, "attested": true, "els": [{"t": "path", "d": "M11.00 12.00 L11.00 70.00"}, {"t": "path", "d": "M41.00 70.00 L40.94 71.31 L40.77 72.60 L40.49 73.88 L40.10 75.13 L39.59 76.34 L38.99 77.50 L38.29 78.60 L37.49 79.64 L36.61 80.61 L35.64 81.49 L34.60 82.29 L33.50 82.99 L32.34 83.59 L31.13 84.10 L29.88 84.49 L28.60 84.77 L27.31 84.94 L26.00 85.00 L24.69 84.94 L23.40 84.77 L22.12 84.49 L20.87 84.10 L19.66 83.59 L18.50 82.99 L17.40 82.29 L16.36 81.49 L15.39 80.61 L14.51 79.64 L13.71 78.60 L13.01 77.50 L12.41 76.34 L11.90 75.13 L11.51 73.88 L11.23 72.60 L11.06 71.31 L11.00 70.00"}, {"t": "path", "d": "M41.00 70.00 L41.00 12.00"}]}, "R": {"w": 54, "attested": true, "els": [{"t": "path", "d": "M44.00 12.00 L10.00 88.00 L44.00 88.00 L44.00 12.00 Z"}]}, "S": {"w": 52, "attested": true, "els": [{"t": "path", "d": "M10.00 34.00 L10.00 12.00 L44.00 12.00 L14.00 88.00"}]}, "T": {"w": 62, "attested": true, "els": [{"t": "path", "d": "M50.00 12.00 L28.00 12.00 L28.00 52.00 L10.00 52.00 L10.00 88.00 L52.00 88.00"}, {"t": "path", "d": "M38.00 50.00 L52.00 50.00"}]}, "U": {"w": 54, "attested": true, "els": [{"t": "path", "d": "M11.00 12.00 L11.00 88.00"}, {"t": "path", "d": "M29.00 12.00 L29.00 52.00 L46.00 88.00"}]}, "V": {"w": 58, "attested": true, "els": [{"t": "path", "d": "M10.00 88.00 L29.00 12.00 L48.00 88.00"}]}, "Y": {"w": 58, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L10.00 58.00 L48.00 58.00"}, {"t": "path", "d": "M10.00 12.00 L48.00 58.00"}, {"t": "path", "d": "M48.00 12.00 L48.00 88.00"}]}, "B": {"w": 54, "attested": false, "els": [{"t": "path", "d": "M44.00 12.00 L11.00 12.00 L11.00 40.00 L44.00 12.00 Z"}, {"t": "path", "d": "M11.00 48.00 L11.00 88.00 L44.00 88.00 L11.00 48.00 Z"}]}, "K": {"w": 52, "attested": false, "els": [{"t": "path", "d": "M11.00 12.00 L41.00 12.00 L26.00 48.00 L11.00 12.00 Z"}, {"t": "path", "d": "M26.00 52.00 L41.00 88.00 L11.00 88.00 L26.00 52.00 Z"}]}, "P": {"w": 50, "attested": false, "els": [{"t": "path", "d": "M12.00 12.00 L12.00 88.00"}, {"t": "path", "d": "M24.00 12.00 L24.00 58.00"}, {"t": "path", "d": "M40.00 12.00 L24.00 58.00"}]}, "Q": {"w": 50, "attested": false, "els": [{"t": "path", "d": "M12.00 12.00 L38.00 12.00 L38.00 88.00 L20.00 88.00 L12.00 12.00 Z"}]}, "W": {"w": 58, "attested": false, "els": [{"t": "path", "d": "M10.00 12.00 L22.00 88.00"}, {"t": "path", "d": "M24.00 12.00 L36.00 88.00"}, {"t": "path", "d": "M38.00 12.00 L48.00 88.00"}]}, "X": {"w": 56, "attested": false, "els": [{"t": "path", "d": "M10.00 88.00 L24.00 12.00 L46.00 12.00"}, {"t": "path", "d": "M28.00 12.00 L18.00 52.00 L38.00 52.00 L46.00 88.00"}, {"t": "path", "d": "M18.00 52.00 L10.00 88.00"}]}, "Z": {"w": 58, "attested": false, "els": [{"t": "path", "d": "M10.00 12.00 L40.00 12.00 L25.00 50.00 L10.00 12.00 Z"}, {"t": "path", "d": "M34.00 48.00 L48.00 88.00 L18.00 88.00 L34.00 48.00 Z"}]}, "0": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L46.00 12.00 L46.00 88.00 L10.00 88.00 L10.00 12.00 Z"}, {"t": "circle", "cx": 28, "cy": 30, "r": 11}]}, "1": {"w": 54, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L27.00 46.00 L44.00 12.00"}, {"t": "path", "d": "M10.00 12.00 L10.00 88.00 L44.00 88.00 L44.00 12.00"}]}, "2": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L32.00 12.00 L10.00 52.00 L10.00 12.00 Z"}, {"t": "path", "d": "M46.00 12.00 L10.00 88.00 L46.00 88.00 L46.00 12.00 Z"}]}, "3": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 48.00 L44.00 12.00"}, {"t": "path", "d": "M46.00 22.00 L10.00 88.00 L46.00 88.00 L46.00 22.00 Z"}]}, "4": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M44.00 12.00 L10.00 12.00 L10.00 88.00 L46.00 88.00 L46.00 48.00 L26.00 48.00 L44.00 12.00"}]}, "5": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L28.00 12.00 L10.00 38.00"}, {"t": "path", "d": "M30.00 12.00 L46.00 12.00 L28.00 38.00"}, {"t": "path", "d": "M10.00 50.00 L46.00 50.00 L46.00 88.00 L10.00 88.00 L10.00 50.00 Z"}]}, "6": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L46.00 12.00 L10.00 88.00 L10.00 48.00 L46.00 48.00 L46.00 88.00 L24.00 88.00"}]}, "7": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 42.00 L10.00 12.00 L46.00 12.00 L46.00 88.00 L28.00 88.00 L28.00 12.00"}]}, "8": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 12.00 L46.00 12.00 L46.00 88.00 L10.00 88.00 L10.00 12.00 Z"}, {"t": "path", "d": "M46.00 12.00 L10.00 88.00"}]}, "9": {"w": 56, "attested": true, "els": [{"t": "path", "d": "M10.00 42.00 L10.00 12.00 L46.00 12.00 L46.00 88.00 L10.00 88.00 L46.00 42.00"}]}, "-": {"w": 40, "attested": true, "els": [{"t": "path", "d": "M10.00 50.00 L30.00 50.00"}]}, "/": {"w": 42, "attested": true, "els": [{"t": "path", "d": "M34.00 12.00 L10.00 88.00"}]}, ".": {"w": 26, "attested": true, "els": [{"t": "circle", "cx": 13, "cy": 82, "r": 4}]}, ":": {"w": 26, "attested": true, "els": [{"t": "circle", "cx": 13, "cy": 32, "r": 4}, {"t": "circle", "cx": 13, "cy": 76, "r": 4}]}};

  function escapeAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function renderGlyphElements(elems, sw) {
    return elems.map((el) => {
      if (el.t === "circle") {
        return `<circle cx="${el.cx}" cy="${el.cy}" r="${el.r}" fill="none" stroke="currentColor" stroke-width="${sw}" />`;
      }
      return `<path d="${el.d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="6" />`;
    }).join("");
  }

  function renderCipherSVG(text, opts = {}) {
    const upper = String(text || "").toUpperCase();
    const height = Number(opts.height || 48);
    const sw = Number(opts.strokeWidth || 8.4);
    const letterGap = Number(opts.letterGap ?? 5);
    const wordGap = Number(opts.wordGap ?? 32);
    const interactive = opts.interactive !== false;
    const className = opts.className ? ` ${escapeAttr(opts.className)}` : "";
    const color = opts.color ? ` style="color:${escapeAttr(opts.color)};"` : "";

    let x = 2;
    const groups = [];
    for (let i = 0; i < upper.length; i++) {
      const ch = upper[i];
      if (ch === " ") {
        x += wordGap;
        continue;
      }
      const g = GLYPHS[ch];
      if (!g) {
        x += 18;
        continue;
      }
      const titleTag = `<title>${escapeAttr(ch)} (${g.attested ? "PV 4K 实证" : "萨卡兹文补完"})</title>`;
      const cls = `fg-glyph ${g.attested ? "fg-attested" : "fg-sarkaz"}`;
      const attrs = interactive ? `tabindex="0" data-char="${escapeAttr(ch)}" data-attested="${g.attested}"` : `data-char="${escapeAttr(ch)}"`;
      groups.push(
        `<g class="${cls}" ${attrs} transform="translate(${x.toFixed(1)}, 0)">${titleTag}${renderGlyphElements(g.els, sw)}</g>`
      );
      x += g.w + letterGap;
    }
    const totalW = Math.max(40, x + 2);
    const pxW = Math.max(24, Math.round((totalW / 100) * height));
    return `<svg xmlns="http://www.w3.org/2000/svg" class="foundation-cipher-svg${className}" viewBox="0 0 ${totalW.toFixed(1)} 100" width="${pxW}" height="${height}" role="img" aria-label="${escapeAttr(upper)}"${color}>${groups.join("")}</svg>`;
  }

  function buildStandaloneSVGString(text, opts = {}) {
    const upper = String(text || "").toUpperCase();
    const sw = Number(opts.strokeWidth || 8.4);
    const letterGap = Number(opts.letterGap ?? 5);
    const wordGap = Number(opts.wordGap ?? 32);
    const fg = opts.color || "#F0F4FA";
    const bg = opts.background || "#05070D";

    let x = 20;
    const parts = [];
    for (let i = 0; i < upper.length; i++) {
      const ch = upper[i];
      if (ch === " ") {
        x += wordGap;
        continue;
      }
      const g = GLYPHS[ch];
      if (!g) continue;
      parts.push(`<g transform="translate(${x.toFixed(1)}, 18)">${renderGlyphElements(g.els, sw)}</g>`);
      x += g.w + letterGap;
    }
    const w = Math.max(120, Math.round(x + 18));
    const h = 136;
    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * 3}" height="${h * 3}">\n  <rect width="100%" height="100%" fill="${bg}" />\n  <g color="${fg}">${parts.join("")}</g>\n</svg>\n`;
  }

  function renderFoundationSealSVG(opts = {}) {
    // 2x5 square seal constructed upright in viewBox 0..270:
    // Top row: F O U N D  |  Bottom row: A T I O N
    // Exact bounding box [27..243] x [40..230] aligns 1:1 with .seal-grid-overlay (inset: 40px 27px)
    // Rotated +90deg CW initially to match the PV stamp; CSS .rotated (-90deg) brings it upright.
    const topRow = ["F", "O", "U", "N", "D"];
    const botRow = ["A", "T", "I", "O", "N"];
    const cellW = 40;
    const cellH = 91;
    const padX = 27;
    const padY = 40;
    const gapX = 4;
    const gapY = 8;

    const maskId = opts.maskId || "seal-neg-mask";
    function buildCarvedRow(letters, rowIdx) {
      return letters.map((ch, colIdx) => {
        const g = GLYPHS[ch];
        const cx = padX + colIdx * (cellW + gapX);
        const cy = padY + rowIdx * (cellH + gapY);
        const sx = (cellW - 2) / (g.w - 4);
        const sy = (cellH - 8) / 84;
        return `<g transform="translate(${cx + 1 - 2 * sx}, ${cy + 4 - 9 * sy}) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})" style="color:#f0f4fa;">${renderGlyphElements(g.els, 9.2 / ((sx + sy) * 0.5))}</g>`;
      }).join("");
    }

    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="seal-vector-svg" viewBox="0 0 270 270" width="270" height="270" role="img" aria-label="FOUNDATION 矢量方形负片印章">
        <defs>
          <clipPath id="${maskId}">
            <rect x="27" y="40" width="216" height="190" />
          </clipPath>
        </defs>
        <g transform="rotate(90 135 135)">
          <rect x="27" y="40" width="216" height="190" fill="#7c8799" />
          <g clip-path="url(#${maskId})">
            <rect x="27" y="131" width="216" height="8" fill="#070a12" />
            ${buildCarvedRow(topRow, 0)}
            ${buildCarvedRow(botRow, 1)}
          </g>
          <rect x="27" y="40" width="216" height="190" fill="none" stroke="rgba(240,244,250,0.22)" stroke-width="1" />
        </g>
      </svg>`;
  }

  global.FoundationCipherSVG = {
    GLYPHS,
    renderCipherSVG,
    renderFoundationSealSVG,
    buildStandaloneSVGString
  };
})(window);
