import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rosalie Law",
  description: "Experience & Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Experience', link: '/experience' },
      { text: 'Blog', link: '/blog' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Experience', link: '/experience' },
          { text: 'Blog', link: '/blog' },]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rosalielaw/rosalielaw' }
    ]
  }
})
