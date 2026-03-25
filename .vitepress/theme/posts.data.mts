import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/**/*.md', {
  includeSrc: false,
  render: false,
  excerpt: true,
  transform(rawData) {
    return rawData
      .filter(page => !page.frontmatter?.draft)
      .sort((a, b) => {
        return +new Date(b.frontmatter.date || 0) - +new Date(a.frontmatter.date || 0)
      })
      .map(page => ({
        title: page.frontmatter.title,
        url: page.url,
        date: page.frontmatter.date
          ? new Date(page.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '',
        description: page.frontmatter.description,
        excerpt: page.excerpt,
        tags: page.frontmatter.tags
      }))
  }
})
