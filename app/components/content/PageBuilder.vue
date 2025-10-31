<template>
  <main class="space-y-16 py-10">
    <component
      v-for="block in resolvedBlocks"
      :is="componentMap[block.component]"
      :key="block.key"
      v-bind="block.props"
    />

    <slot v-if="hasSlot" />
    <p v-else-if="!resolvedBlocks.length" class="rounded-[var(--radius-3)] bg-dark/5 p-6 text-center text-dark/50">
      No content has been configured for this page yet.
    </p>
  </main>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import BlockFaq from '~/components/content/BlockFaq.vue'
import BlockFeatures from '~/components/content/BlockFeatures.vue'
import BlockHero from '~/components/content/BlockHero.vue'
import BlockServices from '~/components/content/BlockServices.vue'
import BlockTestimonials from '~/components/content/BlockTestimonials.vue'

type ComponentName = 'BlockHero' | 'BlockFeatures' | 'BlockServices' | 'BlockTestimonials' | 'BlockFaq'

type BlockInput = {
  component?: ComponentName
  _id?: string
  _key?: string
  id?: string | number
  [key: string]: unknown
}

const componentMap = {
  BlockHero,
  BlockFeatures,
  BlockServices,
  BlockTestimonials,
  BlockFaq
} as const satisfies Record<ComponentName, any>

const props = defineProps<{
  blocks?: BlockInput[] | null
}>()

const slots = useSlots()
const hasSlot = computed(() => Boolean(slots.default))

const resolvedBlocks = computed(() => {
  const blocks = Array.isArray(props.blocks) ? props.blocks : []

  return blocks
    .map((block, index) => {
      const component = block.component
      if (!component || !(component in componentMap)) {
        return null
      }

      const { component: _component, ...rest } = block
      const key = (block._key || block._id || block.id || index) as string | number

      return {
        component,
        props: rest,
        key
      }
    })
    .filter((block): block is { component: ComponentName; props: Record<string, unknown>; key: string | number } => !!block)
})
</script>
