import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const heroBlock = z.object({
  component: z.literal('BlockHero'),
  title: z.string(),
  subtitle: z.string().optional(),
  eyebrow: z.string().optional(),
  actions: z
    .array(
      z.object({
        label: z.string(),
        to: z.string().default('#'),
        variant: z.enum(['primary', 'secondary']).default('primary')
      })
    )
    .default([]),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional()
})

const featuresBlock = z.object({
  component: z.literal('BlockFeatures'),
  heading: z.string(),
  description: z.string().optional(),
  eyebrow: z.string().optional(),
  features: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        icon: z.string().optional()
      })
    )
    .default([])
})

const servicesBlock = z.object({
  component: z.literal('BlockServices'),
  heading: z.string(),
  description: z.string().optional(),
  eyebrow: z.string().optional(),
  services: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        link: z.string().optional()
      })
    )
    .default([])
})

const testimonialsBlock = z.object({
  component: z.literal('BlockTestimonials'),
  heading: z.string(),
  description: z.string().optional(),
  eyebrow: z.string().optional(),
  testimonials: z
    .array(
      z.object({
        quote: z.string(),
        name: z.string(),
        role: z.string().optional()
      })
    )
    .default([])
})

const faqBlock = z.object({
  component: z.literal('BlockFaq'),
  title: z.string(),
  items: z
    .array(
      z.object({
        q: z.string(),
        a: z.string()
      })
    )
    .default([])
})

const blocks = z.array(
  z.discriminatedUnion('component', [heroBlock, featuresBlock, servicesBlock, testimonialsBlock, faqBlock])
)

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        blocks: blocks.default([])
      })
    })
  }
})
