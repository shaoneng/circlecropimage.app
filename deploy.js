const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 开始部署流程...');

// 1. 安装依赖
console.log('📦 安装依赖...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ 依赖安装完成');
} catch (error) {
  console.error('❌ 依赖安装失败:', error.message);
  process.exit(1);
}

// 2. 构建资源
console.log('🔨 构建资源...');
try {
  execSync('node build.js', { stdio: 'inherit' });
  console.log('✅ 资源构建完成');
} catch (error) {
  console.error('❌ 资源构建失败:', error.message);
  process.exit(1);
}

// 3. 替换 HTML 文件中的 CDN 引用
console.log('🔄 更新 HTML 文件...');

const htmlFiles = ['index.html', 'videocropper.html', 'privacy.html', 'terms.html'];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // 替换 Tailwind CDN
    content = content.replace(
      '<script src="https://cdn.tailwindcss.com"></script>',
      '<link rel="stylesheet" href="./dist/styles.css">'
    );
    
    // 移除内联样式（因为已经在 CSS 文件中）
    content = content.replace(
      /<style>[^<]*html\{scroll-behavior:smooth\}[^<]*<\/style>/g,
      ''
    );
    
    fs.writeFileSync(file, content);
    console.log(`✅ ${file} 更新完成`);
  }
});

// 4. 生成性能报告
console.log('📊 生成性能报告...');

const originalSize = getDirectorySize('./');
const distSize = getDirectorySize('./dist');

const report = {
  buildTime: new Date().toISOString(),
  sizes: {
    original: `${(originalSize / 1024).toFixed(2)} KB`,
    optimized: `${(distSize / 1024).toFixed(2)} KB`,
    savings: `${(((originalSize - distSize) / originalSize) * 100).toFixed(1)}%`
  },
  files: {
    css: fs.existsSync('./dist/styles.css') ? `${(fs.statSync('./dist/styles.css').size / 1024).toFixed(2)} KB` : 'N/A',
    criticalCSS: fs.existsSync('./dist/critical.css') ? `${(fs.statSync('./dist/critical.css').size / 1024).toFixed(2)} KB` : 'N/A',
    js: fs.existsSync('./dist/videocropper.min.js') ? `${(fs.statSync('./dist/videocropper.min.js').size / 1024).toFixed(2)} KB` : 'N/A'
  }
};

fs.writeFileSync('./dist/performance-report.json', JSON.stringify(report, null, 2));

console.log('🎉 部署完成！');
console.log('📈 性能报告:');
console.log(`  - 优化后 CSS: ${report.files.css}`);
console.log(`  - 关键 CSS: ${report.files.criticalCSS}`);
console.log(`  - 压缩 JS: ${report.files.js}`);
console.log('📁 查看完整报告: ./dist/performance-report.json');

function getDirectorySize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory() && file !== 'node_modules' && file !== '.git') {
      size += getDirectorySize(filePath);
    } else if (stats.isFile()) {
      size += stats.size;
    }
  });
  
  return size;
}