<template>
  <div
    class="page homepage fade"
  >

    <div class="container-fluid">
      <div class="content-wrapper row">
        <div class="details col-12 col-lg-8">
          <div>
            <h1 style="color:#2A7E19">
              Kavinraj Vijayalakshmi
              <span>Software Engineer</span>
            </h1>
            <p style="font-size: 18px;">
              <i>
              A Passionate Software Engineer with hands-on experience in various software development projects.
              I Possess a strong foundation in data structures & algorithms , along with proficiency in programming languages such as Java , C , C++ & Python .
              I aim to leverage my technical & problem solving skills in an entry-level software development role while contributing positively to innovative projects.
              </i>
            </p>
            <button class="button" @click="redirect">
              <span class="btn-text">See More</span>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="btn-icon"
              />
            </button>
          </div>
        </div>
        <div class="portrait col-12 ms-auto cod"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import myPortrait from '~/assets/my-image.jpeg'

const router = useRouter();

const redirect = () => {
  router.push('/about')
}
</script>
