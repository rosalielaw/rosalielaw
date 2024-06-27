import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Rosalie Law",
    description: "Experience & Blog",
    head: [
        //Fav icon
        ['link', {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png'}],
        ['link', {rel: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6432a8'}],
        ['meta', {name: 'apple-mobile-web-app-title', content: 'Rosalie Law'}],
        ['meta', {name: 'application-name', content: 'Rosalie Law'}],
        ['meta', {name: 'msapplication-TileColor', content: '#6432a8'}],
        ['meta', {name: 'theme-color', content: '#6432a8'}],
        //Google Fonts
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap'
        }],
        //Google Analytics
        ['script', {async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-MWNCZMYBMY'}],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-MWNCZMYBMY');"],
        ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-MWNCZMYBMY'}],
    ],
    base: "/",
    cleanUrls: true,
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            light: '/images/logo.svg',
            dark: '/images/logo.svg',
            alt: 'RosalieLaw Logo',
            width: 50,
            height: 50
        },
        editLink: {
            pattern: 'https://github.com/rosalielaw/rosalielaw/edit/main/:path'
        },
        search: {
            provider: 'local'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/rosalielaw/rosalielaw'},
            {icon: 'linkedin', link: 'https://www.linkedin.com/in/rosalie-van-der-hoeven-30925b1a4'}
        ],
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Experience', link: '/experience'},
            {text: 'Blog', link: '/blog'},
        ],
        sidebar: [
            {
                text: '',
                items: [
                    {text: 'Experience', link: '/experience'},
                    {text: 'Blog', link: '/blog'},]
            }
        ],
        footer: {
            message: 'Released under the <a href="https://raw.githubusercontent.com/rosalielaw/rosalielaw/main/LICENSE">MIT</a> License.',
            copyright: '© 2024 Rosalie van der Hoeven.</br>'
        },
    },
    sitemap: {
        hostname: 'https://www.rosalielaw.com'
    }
})
