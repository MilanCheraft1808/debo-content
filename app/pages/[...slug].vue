<script setup lang="ts">
// Map "/" -> "/index" so the homepage renders app/content/index.md
const route = useRoute();
const path = computed(() => (route.fullPath === '/' ? '/index' : route.fullPath))
</script>

<template>
  <main class="max-w-[1100px] mx-auto px-4 py-10 prose prose-slate">
    <!-- ContentDoc is auto-registered by @nuxt/content -->
    <ContentDoc :path="path">
      <template #not-found>
        <h1>404 — Page not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>
