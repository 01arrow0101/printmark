<script setup>
import { RouterView } from "vue-router";
import { usePrintMarkStore } from "./stores/PrintMarkStore";
import Header from "./components/Header/PrintMarkHeader.vue";
import FooterPrintMark from "./components/Footer/FooterPrintMark.vue";
import BurgerMenu from "@/components/Header/BurgerMenu.vue";

const store = usePrintMarkStore();
</script>

<template>
  <header>
    <transition name="slide" mode="out-in">
      <div v-if="store.showBurgerMenu" class="burger-menu">
        <BurgerMenu />
      </div>
    </transition>

    <Header />
  </header>

  <RouterView />
  <footer>
    <FooterPrintMark />
  </footer>
</template>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
