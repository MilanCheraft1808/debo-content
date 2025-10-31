
<template>
  <section class="container mx-auto px-4 py-12">
    <slot name="heading">
      <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">Section title</h2>
    </slot>
    <div class="mt-6 space-y-4">
      <slot>
        <div class="p-4 rounded-[var(--radius-3)] border border-dark/10 bg-white">Row item</div>
      </slot>
    </div>
  </section>
</template>
<script setup>
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
