<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto max-w-2xl text-center">
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
        {{ eyebrow }}
      </p>
      <h2 class="text-[var(--text-heading-h2)] font-bold text-dark">
        {{ heading }}
      </h2>
      <p v-if="description" class="mt-4 text-body-lg text-dark/70">
        {{ description }}
      </p>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <article
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="flex h-full flex-col gap-4 rounded-[var(--radius-4)] border border-dark/10 bg-white p-6 shadow-sm shadow-black/5"
      >
        <blockquote class="text-lg text-dark/80">“{{ testimonial.quote }}”</blockquote>
        <div class="mt-auto text-left">
          <p class="text-base font-semibold text-dark">
            {{ testimonial.name }}
          </p>
          <p v-if="testimonial.role" class="text-sm text-dark/60">
            {{ testimonial.role }}
          </p>
        </div>
      </article>
      <p v-if="!testimonials.length" class="rounded-[var(--radius-3)] bg-dark/5 p-6 text-center text-dark/50 md:col-span-2">
        No testimonials have been added yet.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

interface TestimonialCard {
  quote: string
  name: string
  role?: string
}

const props = withDefaults(
  defineProps<{
    heading: string
    description?: string
    eyebrow?: string
    testimonials?: TestimonialCard[]
  }>(),
  {
    description: undefined,
    eyebrow: undefined,
    testimonials: () => []
  }
)

const heading = toRef(props, 'heading')
const description = toRef(props, 'description')
const eyebrow = toRef(props, 'eyebrow')
const testimonials = toRef(props, 'testimonials')
</script>
