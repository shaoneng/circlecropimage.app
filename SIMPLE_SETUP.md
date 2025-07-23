# 🎯 简单设置指南

## 目标
将 Tailwind CDN 改为本地构建，在 Cloudflare Pages 部署。

## 📋 步骤

### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "Add Tailwind local build"
git push
```

### 2. 配置 Cloudflare Pages
在 Cloudflare Dashboard 中：
- **构建命令**: `npm run cf:build`
- **构建输出目录**: `.`
- **Node.js 版本**: `18`

### 3. 完成！
每次推送代码，Cloudflare Pages 会自动：
1. 运行 `npm install`
2. 运行 `npm run cf:build`
3. 部署到全球 CDN

## 🔧 本地开发
```bash
# 安装依赖
npm install

# 开发模式（监听文件变化）
npm run dev

# 测试构建
npm run cf:build
```

## 📊 效果
- Tailwind CDN (3.5MB) → 本地构建 (~100KB)
- 外部依赖 → 本地资源 + CDN 缓存
- 手动构建 → 自动化部署

就这么简单！