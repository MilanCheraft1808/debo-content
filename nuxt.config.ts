export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    srcDir: 'app',
    modules: ['@nuxt/icon','@nuxt/scripts','@nuxt/content','@nuxt/image','@nuxthq/studio'],
    devtools: { enabled: true },
    components: [
        { path: '~/components', pathPrefix: false },
        { path: '~/components/content', pathPrefix: false }
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
            autoprefixer: {}
        }
    },
    content: {
        documentDriven: false,
        navigation: { fields: [] }
    },
    runtimeConfig: {
        content: {
            sources: {},
            ignores: [],
            locales: [],
            defaultLocale: '',
            highlight: {},
            navigation: [],
            documentDriven: false,
            experimental: {}
        },
        public: {
            content: {
                sources: {},
                ignores: [],
                locales: [],
                defaultLocale: '',
                highlight: {},
                navigation: [],
                documentDriven: false,
                experimental: {}
            }
        }
    },
    hooks: {
        'nitro:config'(config) {
            config.runtimeConfig = config.runtimeConfig || {}
            config.runtimeConfig.content = config.runtimeConfig.content || {}
            config.runtimeConfig.public = config.runtimeConfig.public || {}
            config.runtimeConfig.public.content = config.runtimeConfig.public.content || {}

            const normalise = (target: Record<string, any>) => {
                target.sources = target.sources || {}
                target.ignores = target.ignores || []
                target.locales = target.locales || []
                target.defaultLocale = target.defaultLocale || ''
                target.highlight = target.highlight || {}
                target.navigation = target.navigation || []
                target.documentDriven = target.documentDriven || false
                target.experimental = target.experimental || {}
            }

            normalise(config.runtimeConfig.content)
            normalise(config.runtimeConfig.public.content)
        }
    },
    nitro: { prerender: { crawlLinks: false, routes: ['/'], failOnError: false } }
})
