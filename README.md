# 「基石」THE FOUNDATION — 《明日方舟：终末地》特别映像档案与美学考究

在线专题站（Cloudflare Workers / GitHub Pages）集成了 4K 原片角色与美学分析、**SVG 矢量 + `@font-face` 双引擎基石文字实验室**、全套 **6 张 Codex 官方设定集风格三视图**，以及用于考据和绘图的全部 **58 张原始参考画像归档库**。

## 在线访问与源代码
- **Cloudflare Workers**：<https://endfield-the-foundation.sfwh0208.workers.dev>
- **GitHub 仓库**：<https://github.com/moyx782/endfield-the-foundation>
- **GitHub Pages**：<https://moyx782.github.io/endfield-the-foundation/>

## 核心目录结构
- `index.html` / `web/styles.css` / `web/app.js` — 9 章节交互式档案主站（01 序言 → 09 终章总结）
- `web/cipher-svg.js` — 1:1 PV 细线基石文字 SVG 矢量引擎与 `FOUNDATION` 负片印章重构
- `web/fonts/FoundationPVStroke.{woff2,ttf}` — 基于 4K 原片逐帧描摹编译的 PV 细线体 Webfont
- `web/fonts/EndfieldByButan.ttf` — 致谢社区开源萨卡兹/终末地体 [`lhclbt/Endfield_Font`](https://github.com/lhclbt/Endfield_Font)（CC BY-NC 4.0 by 罗醭坦）
- `web/assets/sheets/` — 全部 6 位「基石」成员 Codex (`gpt-6.2-astra`) 三视图设定集（`1672×941` PNG）
- `web/assets/refs/` — 完整 **58 张原始参考图像**（27 张角色 4K 参考切图 + 18 张 4K 分镜帧 + 13 张密码字体核对图）
- `web/media/pv_web.mp4` — 云端优化 2.39:1 H.264 视频流（`1280×536`, `+faststart`, 支持 `HTTP 206` 分段）
- `workers/worker.js` & `wrangler.jsonc` — Cloudflare Workers 边缘代理与 MIME/Range 分发入口
- `web/server.py` — 本地双栈（IPv4+IPv6）局域网启动脚本：`python3 web/server.py 8765`
