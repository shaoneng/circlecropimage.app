const fs = require('fs');
const path = require('path');

console.log('🔧 优化 HTML 文件用于 Cloudflare Pages...');

// 确保 dist 目录存在
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
}

// 读取构建的 CSS 文件
const cssPath = './dist/styles.css';
const criticalCssPath = './dist/critical.css';

if (!fs.existsSync(cssPath)) {
  console.error('❌ CSS 文件不存在，请先运行构建');
  process.exit(1);
}

// 提取关键 CSS
const fullCSS = fs.readFileSync(cssPath, 'utf8');
const criticalCSS = extractCriticalCSS(fullCSS);

// 保存关键 CSS
fs.writeFileSync(criticalCssPath, criticalCSS);

// 需要优化的 HTML 文件
const htmlFiles = [
  'index.html',
  'videocropper.html', 
  'privacy.html',
  'terms.html'
];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    optimizeHtmlFile(file, criticalCSS);
    console.log(`✅ ${file} 优化完成`);
  }
});

console.log('🎉 HTML 优化完成！');

function extractCriticalCSS(css) {
  // 基础样式 - 直接定义关键样式
  const criticalCSS = `
/* Critical CSS - Above the fold */
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif}
.bg-gray-50{background-color:rgb(249 250 251)}
.text-gray-800{color:rgb(31 41 55)}
.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.bg-white\\/80{background-color:rgb(255 255 255 / 0.8)}
.backdrop-blur-lg{backdrop-filter:blur(16px)}
.sticky{position:sticky}
.top-0{top:0px}
.z-50{z-index:50}
.border-b{border-bottom-width:1px}
.border-gray-200{border-color:rgb(229 231 235)}
.container{width:100%}
.mx-auto{margin-left:auto;margin-right:auto}
.px-4{padding-left:1rem;padding-right:1rem}
.py-12{padding-top:3rem;padding-bottom:3rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.font-bold{font-weight:700}
.text-center{text-align:center}
.text-gray-900{color:rgb(17 24 39)}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-gray-600{color:rgb(75 85 99)}
.flex{display:flex}
.items-center{align-items:center}
.justify-between{justify-content:space-between}
.justify-center{justify-content:center}
.h-16{height:4rem}
.flex-shrink-0{flex-shrink:0}
.mb-12{margin-bottom:3rem}
.mt-4{margin-top:1rem}
.max-w-2xl{max-width:42rem}
.tracking-tight{letter-spacing:-0.025em}
@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}
@media (min-width: 768px){.md\\:text-5xl{font-size:3rem;line-height:1}}
@media (min-width: 1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}}
`;
  
  return criticalCSS.trim();
}

function optimizeHtmlFile(filePath, criticalCSS) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. 替换 Tailwind CDN
  content = content.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g,
    ''
  );
  
  // 2. 移除现有的内联样式（如果存在）
  content = content.replace(
    /<style>[^<]*html\{scroll-behavior:smooth\}[^<]*<\/style>/g,
    ''
  );
  
  // 3. 在 </head> 前插入优化的样式
  const styleBlock = `
    <!-- Critical CSS -->
    <style>
        ${criticalCSS}
    </style>
    
    <!-- Preload full CSS -->
    <link rel="preload" href="./dist/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="./dist/styles.css"></noscript>
    
    <!-- Preload JS -->
    <link rel="preload" href="./dist/videocropper.min.js" as="script">`;
  
  content = content.replace('</head>', `${styleBlock}\n</head>`);
  
  // 4. 更新 JS 引用
  if (filePath.includes('videocropper')) {
    content = content.replace(
      /<script src="videocropper\.js"[^>]*><\/script>/g,
      '<script src="./dist/videocropper.min.js" defer></script>'
    );
  }
  
  // 5. 更新其他可能的 JS 引用
  content = content.replace(
    /<script src="([^"]+\.js)"([^>]*)><\/script>/g,
    (match, src, attrs) => {
      if (src.startsWith('http') || src.startsWith('//')) {
        return match; // 保持外部脚本不变
      }
      const minifiedSrc = src.replace('.js', '.min.js');
      if (fs.existsSync(`./dist/${path.basename(minifiedSrc)}`)) {
        return `<script src="./dist/${path.basename(minifiedSrc)}"${attrs} defer></script>`;
      }
      return match;
    }
  );
  
  // 5. 添加性能优化脚本
  const performanceScript = `
    <script>
        // 异步加载完整 CSS（备用方案）
        if (!document.querySelector('link[href="./dist/styles.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = './dist/styles.css';
            document.head.appendChild(link);
        }
        
        // 预连接到重要域名
        const preconnects = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
        preconnects.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = url;
            if (url.includes('gstatic')) link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    </script>`;
  
  content = content.replace('</body>', `${performanceScript}\n</body>`);
  
  // 保存优化后的文件
  fs.writeFileSync(filePath, content);
}