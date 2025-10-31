export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    srcDir: 'app',
    modules: ['@nuxt/icon','@nuxt/scripts','@nuxt/content','@nuxt/image','@nuxthq/studio'],
    devtools: { enabled: true },
    components: [
        { path: '~/components', pathPrefix: false },
        { path: '~/components/base', pathPrefix: false },
        { path: '~/components/content', pathPrefix: false }
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
            autoprefixer: {}
        }
    },
    nitro: { prerender: { crawlLinks: true, routes: ['/'] } }
})
