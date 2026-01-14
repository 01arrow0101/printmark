<script setup>
import HeroSection from "@/components/Layout/HeroSection.vue";
import SectionIcons from "@/components/Home/SectionIcons.vue";
import SectionOurProduct from "@/components/Home/SectionOurProduct.vue";
</script>

<template>
  <main>
    <HeroSection class-name="bg">
      <template #subtitle
        >Інноваційні технології у сфері термотрнасферного друку та
        етикетки</template
      >
    </HeroSection>
    <SectionIcons />
    <SectionOurProduct />
  </main>
</template>
<style lang="scss" scoped>
@import "@/assets/main.scss";
.bg {
  background:
    $bg-gradient,
    url("/src/assets/img/BgHero.webp") no-repeat center / cover;
}
</style>
