# Ken Thoughts - VitePress

Ken Lee's personal blog, now powered by VitePress.

## 🚀 Quick start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
.
├── .vitepress/          # VitePress configuration
│   ├── config.mts       # Site configuration
│   └── theme/           # Custom theme
├── blog/                # Blog posts (converted from content/blog)
├── me/                  # About page
├── public/              # Static assets
└── index.md             # Home page
```

## 🔄 Migration from Gatsby

This site was migrated from Gatsby to VitePress. Key changes:

- **React → Vue**: Components converted from React/TSX to Vue
- **MDX → Markdown**: Blog posts converted from MDX to standard Markdown
- **GraphQL → File-based**: Content loading uses VitePress's built-in content loader
- **Simpler structure**: Eliminated complex Gatsby plugins and configuration

## ✍️ Content

- Blog posts are in the `blog/` directory
- Each post has frontmatter with `title`, `date`, `description`, and optional `draft` flag
- Posts marked as `draft: true` won't appear in the blog list

## 🌐 Hosting

- **Live site**: https://kenlsm.com
- **Platform**: Netlify (connected to this repo)

## 🛠 Tech Stack

- **VitePress**: Static site generator
- **Vue 3**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool

## 📄 License

MIT
