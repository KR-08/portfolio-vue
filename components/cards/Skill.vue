<template>
  <div
    class="skill-card"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <img :src="logo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps(["text", "logo"])
const isHover = ref(false)
</script>
