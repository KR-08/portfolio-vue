<template>
  <div class="page-title">
    <h1 class="page-title-main" style="font-family: 'Dancing Script', cursive">
      {{ title.split(" ").slice(0, -1).join(" ") }}
      <span>{{ title.split(" ").pop() }}</span>
    </h1>
    <div class="page-title-secondary">{{ secondaryTitle }}</div>
  </div>
</template>

<script setup>
defineProps({
    title: String,
    secondaryTitle: String
})
</script>
