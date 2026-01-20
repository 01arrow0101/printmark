<script setup>
import HeroSection from "@/components/Layout/HeroSection.vue";
import SectionIcons from "@/components/Home/SectionIcons.vue";
import SectionOurProduct from "@/components/Home/SectionOurProduct.vue";
</script>

<template>
  <main>
    <HeroSection class-name="bg">
      <template #subtitle
        >Інноваційні технології у сфері термотрнасферного друку</template
      >
    </HeroSection>
    <SectionIcons />
    <SectionOurProduct />
  </main>
</template>
<style lang="scss" scoped>
</style>
