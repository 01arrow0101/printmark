<template>
  <div class="hero">
    <div class="title">
      <h1 class="hero-title">PrintMark</h1>
      <h2 class="subtitle">
        Інноваційні технології у сфері термотрнасферного друку та етикетки
      </h2>
    </div>
    <div class="button">
      <appButton @click="goTo">Отримати консультацію</appButton>
    </div>
  </div>
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
@import "@/assets/main.scss";
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background:
    $bg-gradient,
    url("/src/assets/img/Gemini_Generated_Image_2la1wy2la1wy2la1.png") no-repeat
      center / cover;
  text-align: center;
}
</style>
