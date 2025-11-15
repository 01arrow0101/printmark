<script setup>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import HeroSection from "@/components/Layout/HeroSection.vue";
import OurProductsSection from "@/components/Products/OurProducts.vue";
const route = useRoute();
</script>

<template>
  <HeroSection class-name="bg"><template #subtitle>Іновації в термотрансферній Друці</template></HeroSection>
  <OurProductsSection v-if="route.path === '/products'" />
  <RouterView />
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.bg {
  color: $secondary-color;
  background:
    $bg-gradient,
    url("/src/assets/img/bg/productPage/product-bg.webp") no-repeat center /
      cover;
}
</style>
