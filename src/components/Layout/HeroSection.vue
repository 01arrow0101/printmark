<template>
  <div class="hero" :class="className">
    <div class="title">
      <h1 class="hero-title" :class="title">
        <slot name="title" >PrintMark</slot>
      </h1>
      <h2 class="subtitle">
        <slot name="subtitle"></slot>
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
defineProps({
  className: String,
  title: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 80vh;
  background:
    $bg-gradient,
    url("/src/assets/img/BgProducts.png") no-repeat
      center / cover;
  text-align: center;
  @media ($breakpoint-tablet) {
    height: auto;
    padding: 24px 16px;
  }
}

</style>
