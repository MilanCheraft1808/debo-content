<template>
  <section class="container mx-auto px-4 py-12">
    <slot name="heading">
      <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">Our Team</h2>
    </slot>

    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <slot>
        <div
            class="p-6 border border-dark/10 bg-white text-center"
        >
          <img
              :src="member.image"
              :alt="member.name"
              class="object-cover mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-dark">{{ member.name }}</h3>
          <p class="text-dark/70">{{ member.role }}</p>
        </div>
      </slot>
    </div>
  </section>
</template>

<script setup lang="ts">
// Default content — will be replaced if user provides their own <slot>
</script>
