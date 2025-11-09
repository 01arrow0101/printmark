<script setup>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import HeroSection from "@/components/Products/ProductHeroSection.vue";
import OurProductsSection from "@/components/Products/OurProducts.vue";
const route = useRoute()
</script>

<template>
  <HeroSection />
    <OurProductsSection v-if="route.path === '/products'" />
    <RouterView/>
</template>

<style lang="scss" scoped></style>
