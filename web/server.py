#!/usr/bin/env python3
"""Dual-stack (IPv4 + IPv6) static HTTP server with HTTP 206 byte-range support and resilient logging."""

import http.server
import os
import re
import socket
import socketserver
import sys
import threading
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
LOG_FILE = Path(__file__).resolve().parent / "server.log"
_LOG_LOCK = threading.Lock()


class RangeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Serve static files with Accept-Ranges, HTTP 206 Partial Content, and safe file logging."""

    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        self._range_bounds = None
        super().__init__(*args, directory=str(ROOT_DIR), **kwargs)

    def log_message(self, format, *args):
        """Log safely to file without ever failing on closed stdio pipes."""
        try:
            msg = f"{self.address_string()} - [{self.log_date_time_string()}] {format % args}\n"
            with _LOG_LOCK:
                with open(LOG_FILE, "a", encoding="utf-8") as lf:
                    lf.write(msg)
        except Exception:
            pass

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        self._range_bounds = None
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        lower_path = path.lower()
        if lower_path.endswith(".mp4"):
            ctype = "video/mp4"
        elif lower_path.endswith(".woff2"):
            ctype = "font/woff2"
        elif lower_path.endswith(".ttf"):
            ctype = "font/ttf"
        elif lower_path.endswith(".svg"):
            ctype = "image/svg+xml"

        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            size = fs.st_size
            range_header = self.headers.get("Range")

            if range_header:
                m = re.match(r"bytes=(\d*)-(\d*)", range_header.strip())
                if m:
                    start_str, end_str = m.groups()
                    if start_str == "" and end_str != "":
                        suffix_len = int(end_str)
                        start = max(0, size - suffix_len)
                        end = size - 1
                    else:
                        start = int(start_str) if start_str else 0
                        end = int(end_str) if end_str else size - 1

                    end = min(end, size - 1)
                    if size == 0 or start > end or start >= size:
                        self.send_response(416)
                        self.send_header("Content-Range", f"bytes */{size}")
                        self.send_header("Content-Length", "0")
                        self.end_headers()
                        f.close()
                        return None

                    length = end - start + 1
                    self.send_response(206)
                    self.send_header("Content-Type", ctype)
                    self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                    self.send_header("Content-Length", str(length))
                    self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
                    self.end_headers()
                    self._range_bounds = (start, length)
                    return f

            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(size))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            return f
        except Exception:
            f.close()
            raise

    def copyfile(self, source, outputfile):
        bounds = getattr(self, "_range_bounds", None)
        bufsize = 64 * 1024
        try:
            if bounds is not None:
                start, remaining = bounds
                source.seek(start)
                while remaining > 0:
                    chunk = source.read(min(bufsize, remaining))
                    if not chunk:
                        break
                    outputfile.write(chunk)
                    remaining -= len(chunk)
            else:
                while True:
                    chunk = source.read(bufsize)
                    if not chunk:
                        break
                    outputfile.write(chunk)
        except (BrokenPipeError, ConnectionResetError, OSError):
            pass


class DualStackThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True
    address_family = socket.AF_INET6

    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        super().server_bind()


class IPv4ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    try:
        server = DualStackThreadingHTTPServer(("::", port), RangeHTTPRequestHandler)
        mode = "IPv4 + IPv6 Dual-Stack"
    except OSError:
        server = IPv4ThreadingHTTPServer(("0.0.0.0", port), RangeHTTPRequestHandler)
        mode = "IPv4 0.0.0.0"

    banner = f"Serving {ROOT_DIR} on port {port} ({mode}, HTTP 206 Range enabled)\n"
    try:
        with _LOG_LOCK:
            with open(LOG_FILE, "a", encoding="utf-8") as lf:
                lf.write(banner)
    except Exception:
        pass
    try:
        sys.stdout.write(banner)
        sys.stdout.flush()
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
