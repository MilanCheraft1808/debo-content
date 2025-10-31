
<template>
  <section class="container mx-auto px-4 py-12">
    <slot name="heading">
      <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">Section title</h2>
    </slot>
    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <slot>
        <div class="p-6 border border-dark/10 rounded-[var(--radius-4)] bg-white">Item 1</div>
        <div class="p-6 border border-dark/10 rounded-[var(--radius-4)] bg-white">Item 2</div>
        <div class="p-6 border border-dark/10 rounded-[var(--radius-4)] bg-white">Item 3</div>
      </slot>
    </div>
  </section>
</template>
<script setup>
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
