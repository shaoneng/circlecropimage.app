const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 关键步骤：为所有响应强制添加必需的安全标头
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// 将当前文件夹设置为静态文件目录
app.use(express.static(__dirname));

// 启动服务器
app.listen(port, () => {
  console.log(`
    ===============================================================
    服务器已启动！

    请在浏览器中打开以下地址来访问您的页面：
    http://localhost:${port}/videocropper.html
    ===============================================================
  `);
});