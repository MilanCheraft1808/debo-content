import { defineEventHandler } from 'h3'
import { useAppConfig, useRuntimeConfig } from '#imports'

type ComponentMeta = {
  pascalName: string
  filePath: string
  meta?: {
    props?: unknown
    slots?: unknown
    events?: unknown
  }
  global?: boolean
}

const manualComponents: ComponentMeta[] = [
  {
    pascalName: 'BlockHero',
    filePath: '~/components/content/BlockHero.vue',
    global: true,
    meta: {
      props: {
        eyebrow: { type: 'String', required: false },
        title: { type: 'String', required: true },
        subtitle: { type: 'String', required: false },
        actions: { type: 'Array', required: false },
        image: { type: 'Object', required: false }
      }
    }
  },
  {
    pascalName: 'BlockFeatures',
    filePath: '~/components/content/BlockFeatures.vue',
    global: true,
    meta: {
      props: {
        eyebrow: { type: 'String', required: false },
        heading: { type: 'String', required: true },
        description: { type: 'String', required: false },
        features: { type: 'Array', required: false }
      }
    }
  },
  {
    pascalName: 'BlockServices',
    filePath: '~/components/content/BlockServices.vue',
    global: true,
    meta: {
      props: {
        eyebrow: { type: 'String', required: false },
        heading: { type: 'String', required: true },
        description: { type: 'String', required: false },
        services: { type: 'Array', required: false }
      }
    }
  },
  {
    pascalName: 'BlockTestimonials',
    filePath: '~/components/content/BlockTestimonials.vue',
    global: true,
    meta: {
      props: {
        eyebrow: { type: 'String', required: false },
        heading: { type: 'String', required: false },
        description: { type: 'String', required: false },
        testimonials: { type: 'Array', required: false }
      }
    }
  },
  {
    pascalName: 'BlockFaq',
    filePath: '~/components/content/BlockFaq.vue',
    global: true,
    meta: {
      props: {
        title: { type: 'String', required: true },
        items: { type: 'Array', required: false }
      }
    }
  }
]

export default defineEventHandler(() => {
  const runtimeConfig = useRuntimeConfig()
  const appConfig = useAppConfig()

  const contentConfig = runtimeConfig.content || {}
  const publicContent = runtimeConfig.public?.content || {}
  const mergedContent = {
    sources: contentConfig.sources || publicContent.sources || {},
    ignores: contentConfig.ignores || publicContent.ignores || [],
    locales: contentConfig.locales || publicContent.locales || [],
    defaultLocale: contentConfig.defaultLocale || publicContent.defaultLocale || '',
    highlight: contentConfig.highlight || publicContent.highlight || {},
    navigation: contentConfig.navigation || publicContent.navigation || [],
    documentDriven: contentConfig.documentDriven || publicContent.documentDriven || false,
    experimental: contentConfig.experimental || publicContent.experimental || {}
  }

  return {
    version: runtimeConfig.studio?.version,
    tokens: runtimeConfig.studio?.publicToken,
    gitInfo: runtimeConfig.studio?.gitInfo || {},
    contentSchema: runtimeConfig.contentSchema || {},
    appConfigSchema: runtimeConfig.appConfigSchema || {},
    appConfig,
    content: mergedContent,
    components: manualComponents.map((component) => ({
      name: component.pascalName,
      path: component.filePath,
      meta: component.meta || { props: {}, slots: {}, events: {} }
    }))
  }
})
