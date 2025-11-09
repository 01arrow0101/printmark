<template>
  <section class="hero">
    <div class="hero_content">
      <div class="hero_title">
        <h1>PrintMark</h1>
      </div>
      <div class="hero_text">
        <p>Іновації в термотрансферній Друці</p>
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

const router  = useRouter()
const goTo = () =>{
  router.push('/contacts')
}
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.hero {
  padding: 140px;
  color: $secondary-color;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3)),
    url("/src/assets/img/bg/productPage/product-bg.webp") center / cover
      no-repeat;
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

.hero_title h1 {
  font-size: $font-size-title;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  text-transform: uppercase;
  text-shadow: 4px 4px 4px $accent-color;
  margin-bottom: 32px;
}

.hero_text p {
  font-size: $font-size-subtitle;
  font-weight: $font-weight-medium;
  margin-bottom: 32px;
}
</style>
