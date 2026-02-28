<template>
  <figure class="portfolio-card">
    <img :src="imgSrc" />
    <div class="content-title">
      <div>
        <h6>{{ title }}</h6>
      </div>
    </div>
  </figure>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps(["avatar", "title", "description"])

const imgSrc = computed(() => props.avatar)
</script>
