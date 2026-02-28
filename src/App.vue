<template>
  <div class="container">
    <div class="content">
      <AppMenu />
      <router-view />
    </div>
    <Transition name="modal">
      <PortfolioDetails
        v-if="store.modalData"
        :details="store.modalData"
        @close-modal="store.setPortfolioDetails(null)"
      />
    </Transition>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">

import { useMainStore } from '../stores/store'
import AppMenu from '../components/AppMenu.vue'
import AppFooter from '../components/AppFooter.vue'
import PortfolioDetails from '../components/modals/PortfolioDetails.vue'

const store = useMainStore()


</script>
