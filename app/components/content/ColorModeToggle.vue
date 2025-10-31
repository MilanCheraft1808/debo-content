
<template>
  <button
    class="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-3)] border border-dark/10 bg-white"
    @click="$emit('toggle')"
  >
    <slot>
      Toggle
    </slot>
  </button>
</template>
<script setup>
defineEmits(['toggle'])
// <!-- All content is provided via slots so you can fully customize in Vue with Vite. -->
</script>
