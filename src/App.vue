<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-holder">
    <header>
      <div class="wrapper blue">
        <nav>
          <RouterLink to="/">Voice123</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
  
</template>

<style scoped>
/* .wrapper {
  display: flex;
  justify-content: center;
} */

.app-holder {
  flex-direction: column;
}

nav a {
  padding: 0 1rem;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
