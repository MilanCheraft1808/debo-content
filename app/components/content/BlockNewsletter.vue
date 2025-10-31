
<template>
  <section class="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
    <slot name="media-left">
      <img class="rounded-[var(--radius-4)] w-full h-auto" src="/beautifully-painted-living-room-interior.jpg" alt="Media" />
    </slot>
    <div>
      <slot name="title"><h2 class="text-[var(--text-heading-h2)] font-bold text-dark">Title</h2></slot>
      <slot name="content"><p class="mt-4 text-dark/80">Content paragraph</p></slot>
      <div class="mt-6">
        <slot name="actions"></slot>
      </div>
    </div>
  </section>
</template>
<script setup>
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
