<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const path = computed(() => (route.fullPath === '/' ? '/index' : route.fullPath))
</script>

<template>
  <main class="bg-white">
    <div class="mx-auto w-full max-w-[1100px] px-4">
      <ContentDoc :path="path">
        <template #default="slotProps">
          <PageBuilder :blocks="slotProps?.doc?.blocks">
            <ContentRenderer v-if="slotProps?.doc?.body" :value="slotProps.doc.body" />
          </PageBuilder>
        </template>
        <template #not-found>
          <div class="py-20 text-center">
            <h1 class="text-3xl font-semibold text-dark">404 — Page not found</h1>
            <p class="mt-2 text-dark/70">The content you are looking for does not exist.</p>
          </div>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>
