<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto max-w-2xl text-center">
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
        {{ eyebrow }}
      </p>
      <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">
        {{ heading }}
      </h2>
      <p v-if="description" class="mt-4 text-body-lg text-dark/70">
        {{ description }}
      </p>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <article
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col gap-3 rounded-[var(--radius-4)] border border-dark/10 bg-white p-6 shadow-sm shadow-black/5"
      >
        <div v-if="feature.icon" class="text-3xl text-primary">
          <Icon :name="feature.icon" />
        </div>
        <h3 class="text-[var(--text-heading-h4)] font-semibold text-dark">
          {{ feature.title }}
        </h3>
        <p v-if="feature.description" class="text-body-md text-dark/70">
          {{ feature.description }}
        </p>
      </article>
      <p v-if="!features.length" class="rounded-[var(--radius-3)] bg-dark/5 p-6 text-center text-dark/50">
        No features have been configured yet.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IconName } from '@nuxt/icon'
import { toRef } from 'vue'

interface FeatureCard {
  title: string
  description?: string
  icon?: IconName | string
}

const props = withDefaults(
  defineProps<{
    heading: string
    description?: string
    eyebrow?: string
    features?: FeatureCard[]
  }>(),
  {
    description: undefined,
    eyebrow: undefined,
    features: () => []
  }
)

const heading = toRef(props, 'heading')
const description = toRef(props, 'description')
const eyebrow = toRef(props, 'eyebrow')
const features = toRef(props, 'features')
</script>
