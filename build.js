const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 创建 dist 目录
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

console.log('🚀 开始构建优化版本...');

// 1. 构建 Tailwind CSS
console.log('📦 构建 Tailwind CSS...');
try {
  execSync('npx tailwindcss -i ./src/input.css -o ./dist/styles.css --minify', { stdio: 'inherit' });
  console.log('✅ Tailwind CSS 构建完成');
} catch (error) {
  console.error('❌ Tailwind CSS 构建失败:', error.message);
  process.exit(1);
}

// 2. 提取关键 CSS
console.log('🎯 提取关键 CSS...');
const fullCSS = fs.readFileSync('./dist/styles.css', 'utf8');

// 关键 CSS - 首屏必需的样式
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
@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}
@media (min-width: 768px){.md\\:text-5xl{font-size:3rem;line-height:1}}
@media (min-width: 1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}}
`;

fs.writeFileSync('./dist/critical.css', criticalCSS);
console.log('✅ 关键 CSS 提取完成');

// 3. 压缩 JavaScript 文件
console.log('🗜️ 压缩 JavaScript 文件...');
const jsFiles = ['videocropper.js'];

jsFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      execSync(`npx terser ${file} -o ./dist/${file.replace('.js', '.min.js')} --compress --mangle`, { stdio: 'inherit' });
      console.log(`✅ ${file} 压缩完成`);
    } catch (error) {
      console.error(`❌ ${file} 压缩失败:`, error.message);
    }
  }
});

// 4. 生成资源清单
const manifest = {
  css: {
    critical: './dist/critical.css',
    full: './dist/styles.css'
  },
  js: {
    videocropper: './dist/videocropper.min.js'
  },
  buildTime: new Date().toISOString()
};

fs.writeFileSync('./dist/manifest.json', JSON.stringify(manifest, null, 2));

console.log('🎉 构建完成！');
console.log('📁 输出文件:');
console.log('  - dist/critical.css (关键 CSS)');
console.log('  - dist/styles.css (完整 CSS)');
console.log('  - dist/videocropper.min.js (压缩 JS)');
console.log('  - dist/manifest.json (资源清单)');