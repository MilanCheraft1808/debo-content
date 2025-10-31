<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">
      {{ title }}
    </h2>
    <div class="mt-6 space-y-4">
      <div
          v-for="(item, i) in items"
          :key="i"
          class="p-4 rounded-[var(--radius-3)] border border-dark/10 bg-white"
      >
        <h3 class="text-[var(--text-heading-h5)] font-semibold text-dark m-0 mb-1">
          {{ item.q }}
        </h3>
        <p class="m-0 text-body-md text-dark/80">
          {{ item.a }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    items?: { q: string; a: string }[]
  }>(),
  {
    items: () => []
  }
)

const title = toRef(props, 'title')
const items = toRef(props, 'items')
</script>
