<template>
  <nav>
    <ul>
      <!--Home-->
      <li>
        <router-link to="/" class="d-flex align-items-center">
          <div class="icon col-3">
            <font-awesome-icon :icon="['fas', 'house-chimney']" size="2x"/>
          </div>
          <h4 class="ms-2 col-9">Home</h4>
        </router-link>
      </li>

      <!--About-->
      <li>
        <router-link to="/about" class="d-flex align-items-center">
          <div class="icon col-3">
            <font-awesome-icon :icon="['fas', 'address-card']" size="2x"/>
          </div>
          <h4 class="ms-2 col-9">About</h4>
        </router-link>
      </li>

      <!--Portfolio-->
      <li>
        <router-link to="/portfolio" class="d-flex align-items-center">
          <div class="icon col-3">
            <font-awesome-icon :icon="['fas', 'briefcase']" size="2x"/>
          </div>
          <h4 class="ms-2 col-9">Portfolio</h4>
        </router-link>
      </li>

      <!--Contact-->
      <li>
        <router-link to="/contact" class="d-flex align-items-center">
          <div class="icon col-3">
            <font-awesome-icon :icon="['fas', 'envelope-open']" size="2x"/>
          </div>
          <h4 class="ms-2 col-9">Contact</h4>
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
