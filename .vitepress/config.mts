import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rosalie Law",
  description: "Career & Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Career', link: '/career' },
      { text: 'Blog', link: '/blog' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Career', link: '/career' },
          { text: 'Blog', link: '/blog' },]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rosalielaw/rosalielaw' }
    ]
  }
})
