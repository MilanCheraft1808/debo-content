
<template>
  <footer class="bg-dark text-white mt-16">
    <div class="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      <section>
        <slot name="col-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-[var(--radius-4)] bg-primary grid place-items-center">
              <span class="text-white font-bold text-lg">DP</span>
            </div>
            <span class="text-xl font-bold">Debo Painting</span>
          </div>
          <p class="text-white/80">Quality interior & exterior painting.</p>
        </slot>
      </section>
      <section>
        <slot name="col-2">
          <h3 class="font-semibold mb-3">Company</h3>
          <ul class="space-y-2 text-white/80">
            <li><router-link to="/about" class="hover:text-white">About</router-link></li>
            <li><router-link to="/services" class="hover:text-white">Services</router-link></li>
            <li><router-link to="/gallery" class="hover:text-white">Gallery</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
          </ul>
        </slot>
      </section>
      <section>
        <slot name="col-3">
          <h3 class="font-semibold mb-3">Contact</h3>
          <p class="text-white/80">Brussels, Belgium</p>
          <p class="text-white/80">+32 470 12 34 56</p>
          <p class="text-white/80">info@debopainting.example</p>
        </slot>
      </section>
    </div>
    <div class="border-t border-white/10">
      <div class="container mx-auto px-4 py-4 text-sm text-white/60 flex items-center justify-between">
        <slot name="bottom-left">© {{currentYear}} Debo Painting</slot>
        <slot name="bottom-right">Built with Vue + Vite + Tailwind</slot>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
const currentYear = new Date().getFullYear();
</script>
