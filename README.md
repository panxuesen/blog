# Blog 项目说明

这是一个基于 VuePress 构建的技术博客项目，主要用于发布技术文章和文档。

## 功能特性

- 支持 Markdown 写作
- 自动生成静态页面
- GitHub Actions 自动部署
- 文章分类与标签管理
- 支持文章置顶功能

## 快速开始

### 环境要求
- Node.js 16+
- Yarn 1.x

### 安装依赖
```bash
yarn install
```

### 本地开发
```bash
yarn docs:dev
```

### 构建生产环境
```bash
yarn docs:build
```

## 项目结构
```
blog/
├── docs/                # 文档根目录
│   ├── .vuepress/       # VuePress 配置
│   ├── posts/           # 文章目录 
│   │   ├── article*.md  # 技术文章
│   │   └── sticky*.md   # 置顶文章
├── package.json         # 项目依赖
└── README.md            # 项目说明
```

## 部署说明

项目通过 GitHub Actions 自动部署到 GitHub Pages，工作流文件位于：
`.github/workflows/deploy-docs.yml`

## 常见问题

Q: 如何新建文章？
A: 在 `docs/posts/` 目录下创建新的 Markdown 文件即可，支持 Frontmatter 配置

Q: 如何设置文章置顶？
A: 创建 `sticky*.md` 文件并配置 `sticky: 1` Frontmatter 属性
