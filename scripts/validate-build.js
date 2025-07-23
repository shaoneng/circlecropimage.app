const fs = require('fs');
const path = require('path');

console.log('🔍 验证构建结果...');

const requiredFiles = [
  './dist/styles.css',
  './dist/critical.css'
];

const optionalFiles = [
  './dist/videocropper.min.js',
  './dist/manifest.json'
];

let allValid = true;

// 检查必需文件
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.error(`❌ 缺少必需文件: ${file}`);
    allValid = false;
  }
});

// 检查可选文件
optionalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.warn(`⚠️  可选文件不存在: ${file}`);
  }
});

// 验证 CSS 内容
if (fs.existsSync('./dist/styles.css')) {
  const css = fs.readFileSync('./dist/styles.css', 'utf8');
  if (css.includes('.bg-gray-50') && css.includes('.text-gray-800')) {
    console.log('✅ CSS 内容验证通过');
  } else {
    console.error('❌ CSS 内容验证失败');
    allValid = false;
  }
}

// 验证 HTML 文件
const htmlFiles = ['index.html', 'videocropper.html', 'privacy.html', 'terms.html'];
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('./dist/styles.css')) {
      console.log(`✅ ${file} - CSS 引用正确`);
    } else if (content.includes('cdn.tailwindcss.com')) {
      console.warn(`⚠️  ${file} - 仍在使用 CDN`);
    } else {
      console.log(`ℹ️  ${file} - 无 CSS 引用`);
    }
  }
});

if (allValid) {
  console.log('🎉 构建验证通过！');
  process.exit(0);
} else {
  console.error('❌ 构建验证失败！');
  process.exit(1);
}