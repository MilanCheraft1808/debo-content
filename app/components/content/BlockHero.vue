<template>
  <section class="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
    <div>
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
        {{ eyebrow }}
      </p>
      <h1 class="mt-2 text-4xl font-bold leading-tight text-dark md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-4 text-lg text-dark/70">
        {{ subtitle }}
      </p>
      <div v-if="actions.length" class="mt-8 flex flex-wrap gap-3">
        <NuxtLink
          v-for="(action, index) in actions"
          :key="index"
          :to="action.to"
          :class="[
            'px-5 py-3 rounded-[var(--radius-3)] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            action.variant === 'primary'
              ? 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary'
              : 'border border-dark/20 text-dark hover:bg-dark/5 focus-visible:ring-dark/40'
          ]"
        >
          {{ action.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="relative">
      <img
        v-if="image?.src"
        :src="image.src"
        :alt="image.alt || ''"
        class="h-auto w-full rounded-[var(--radius-4)] object-cover"
      />
      <div
        v-else
        class="flex h-full min-h-[280px] w-full items-center justify-center rounded-[var(--radius-4)] bg-dark/5 text-center text-dark/50"
      >
        <span>No hero image provided</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue'

interface ActionButton {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

interface HeroImage {
  src: string
  alt?: string
}

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    actions?: ActionButton[]
    image?: HeroImage | null
  }>(),
  {
    subtitle: undefined,
    eyebrow: undefined,
    actions: () => [
      { label: 'Get a Quote', to: '/contact', variant: 'primary' },
      { label: 'See Our Work', to: '/gallery', variant: 'secondary' }
    ],
    image: null
  }
)

const actions = computed(() =>
  (props.actions || []).map((action) => ({
    variant: 'secondary',
    ...action,
    to: action.to || '#'
  }))
)

const image = computed(() => props.image || null)
const title = toRef(props, 'title')
const subtitle = toRef(props, 'subtitle')
const eyebrow = toRef(props, 'eyebrow')
</script>
