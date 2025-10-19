<script setup>
import { RouterView } from 'vue-router'
import Header from './components/PrintMarkHeader.vue'
import BurgerMenu from './components/BurgerMenu.vue';
</script>

<template>
  <header>
    <BurgerMenu/>
    <Header />
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>
