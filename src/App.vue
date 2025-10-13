<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/icons/PrintMarkHeader.vue'
</script>

<template>
  <header>
    <Header />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>
