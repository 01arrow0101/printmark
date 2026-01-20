<script setup>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import HeroSection from "@/components/Layout/HeroSection.vue";
import OurProductsSection from "@/components/Products/OurProducts.vue";
const route = useRoute();
</script>

<template>
  <HeroSection class-name="bg"
    ><template #subtitle
      >Інноваційні технології у сфері термотрнасферного друку</template
    ></HeroSection
  >
  <OurProductsSection v-if="route.path === '/products'" />
  <RouterView />
</template>

<style lang="scss" scoped>
</style>
