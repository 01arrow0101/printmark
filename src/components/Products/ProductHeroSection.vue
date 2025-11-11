<template>
  <section class="hero">
    <div class="hero_content">
      <div class="title">
        <h1 class="hero-title">PrintMark</h1>
        <h2 class="subtitle">Іновації в термотрансферній Друці</h2>
      </div>
      <div class="button">
        <app-button @click="goTo">Отримати консультацію</app-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import appButton from "../Button/appButton.vue";

const router = useRouter();
const goTo = () => {
  router.push("/contacts");
};
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.hero {
  padding: 140px;
  color: $secondary-color;
  background:
    $bg-gradient,
    url("/src/assets/img/bg/productPage/product-bg.webp") no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.hero_content {
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}
</style>