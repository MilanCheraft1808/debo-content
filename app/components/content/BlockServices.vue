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
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <article
        v-for="(service, index) in services"
        :key="index"
        class="flex h-full flex-col justify-between gap-4 rounded-[var(--radius-4)] border border-dark/10 bg-secondary/30 p-6 text-left"
      >
        <div>
          <h3 class="text-[var(--text-heading-h4)] font-semibold text-dark">
            {{ service.title }}
          </h3>
          <p v-if="service.description" class="mt-3 text-body-md text-dark/70">
            {{ service.description }}
          </p>
        </div>
        <NuxtLink
          v-if="service.link"
          :to="service.link"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
        >
          Learn more
          <Icon name="i-heroicons-arrow-right-20-solid" />
        </NuxtLink>
      </article>
      <p v-if="!services.length" class="rounded-[var(--radius-3)] bg-dark/5 p-6 text-center text-dark/50">
        No services have been configured yet.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

interface ServiceCard {
  title: string
  description?: string
  link?: string
}

const props = withDefaults(
  defineProps<{
    heading: string
    description?: string
    eyebrow?: string
    services?: ServiceCard[]
  }>(),
  {
    description: undefined,
    eyebrow: undefined,
    services: () => []
  }
)

const heading = toRef(props, 'heading')
const description = toRef(props, 'description')
const eyebrow = toRef(props, 'eyebrow')
const services = toRef(props, 'services')
</script>
