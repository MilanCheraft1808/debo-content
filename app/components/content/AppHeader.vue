
<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-dark/10">
    <div class="container mx-auto px-4">
      <div class="h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <slot name="brand">
            <router-link to="/debopainting/public" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-[var(--radius-4)] bg-primary grid place-items-center">
                <span class="text-white font-bold text-lg">DP</span>
              </div>
              <span class="text-xl font-bold text-dark">Debo Painting</span>
            </router-link>
          </slot>
        </div>
        <nav class="hidden md:flex items-center gap-6">
          <slot name="nav">
            <router-link class="hover:text-primary" to="/debopainting/public">Home</router-link>
            <router-link class="hover:text-primary" to="/services">Services</router-link>
            <router-link class="hover:text-primary" to="/gallery">Gallery</router-link>
            <router-link class="hover:text-primary" to="/about">About</router-link>
            <router-link class="hover:text-primary" to="/contact">Contact</router-link>
          </slot>
        </nav>
        <div class="hidden md:block">
          <slot name="cta">
            <router-link to="/contact" class="px-4 py-2 rounded-[var(--radius-3)] bg-primary text-white font-medium">Get a Quote</router-link>
          </slot>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
