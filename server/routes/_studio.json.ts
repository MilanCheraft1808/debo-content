import { defineEventHandler } from 'h3'
import { useAppConfig, useRuntimeConfig } from '#imports'
// @ts-expect-error -- virtual module provided by @nuxt/component-meta
import components from '#nuxt-component-meta/nitro'

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

export default defineEventHandler(() => {
  const runtimeConfig = useRuntimeConfig()
  const appConfig = useAppConfig()
  const componentList = Array.isArray(components)
    ? components
    : (Object.values(components || {}) as ComponentMeta[])

  const componentsIgnoredPrefix = ['Content', 'DocumentDriven', 'Markdown']
  const filteredComponents = componentList
    .filter((component) => component?.global && !componentsIgnoredPrefix.some((prefix) => component.pascalName?.startsWith(prefix)))
    .map((component) => ({
      name: component.pascalName,
      path: component.filePath,
      meta: {
        props: component.meta?.props ?? {},
        slots: component.meta?.slots ?? {},
        events: component.meta?.events ?? {}
      }
    }))

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
    components: filteredComponents
  }
})
