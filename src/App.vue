<script setup>
import { RouterView } from 'vue-router'
import Header from './components/PrintMarkHeader.vue'
import FooterPrintMark from './components/Footer/FooterPrintMark.vue'
// import BurgerMenu from './components/BurgerMenu.vue';
</script>

<template>
  <header>
    <!-- <BurgerMenu/> -->
    <Header />
  </header>

  <RouterView />
  <footer>
    <FooterPrintMark />
  </footer>
</template>

<style lang="scss" scoped></style>
