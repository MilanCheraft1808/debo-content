export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    srcDir: 'app',
    modules: ['@nuxt/content','@nuxt/icon','@nuxt/scripts','@nuxt/image'],
    devtools: { enabled: true },
    components: [
        { path: '~/components', pathPrefix: false },
        { path: '~/components/content', pathPrefix: false, global: true }
    ],
    content: {
        documentDriven: false,
        experimental: {
            clientDB: true
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
            autoprefixer: {}
        }
    },
    nitro: { prerender: { crawlLinks: true, routes: ['/'] } }
})
