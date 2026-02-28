<template>
  <div
    class="page portfoliopage"
  >
    <div class="page-wrapper">
      <PageHeader :title="'my portfolio'" :secondaryTitle="'works'" />
      <section>
        <div>
          <div>
            <ul class="projects-list">
              <li
                v-for="repo in store.repos"
                :key="repo.name"
                @click="store.setPortfolioDetails(repo)"
              >
                <PortfolioCard
                  :avatar="repo.image"
                  :title="repo.name"
                  :description="repo.description"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '~/stores/store'
import PortfolioCard from "../cards/Portfolio.vue"; // Explicit import if not auto-imported
import PageHeader from "../PageHeader.vue";


const store = useMainStore()

onMounted(() => {
    return store.repos
})
</script>
