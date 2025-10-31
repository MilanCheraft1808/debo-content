
<template>
  <section class="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <slot name="title"><h1 class="text-[var(--text-heading-h1)] leading-tight font-bold text-dark">Hero title</h1></slot>
      <slot name="subtitle"><p class="mt-4 text-lg text-dark/70">Subtitle text</p></slot>
      <div class="mt-6 flex gap-3">
        <slot name="actions">
          <router-link to="/contact" class="px-5 py-3 rounded-[var(--radius-3)] bg-primary text-white font-medium">Get a Quote</router-link>
          <router-link to="/gallery" class="px-5 py-3 rounded-[var(--radius-3)] border border-dark/20">See Our Work</router-link>
        </slot>
      </div>
    </div>
    <slot name="media">
      <img class="rounded-[var(--radius-4)] w-full h-auto" src="/modern-house-exterior-freshly-painted.jpg" alt="Media" />
    </slot>
  </section>
</template>
<script setup>
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
