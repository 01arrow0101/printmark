<template>
  <div class="hero">
    <div class="title">
      <h1 class="title-h1">PrintMark</h1>
      <h2 class="subtitle">Інноваційні технології у сфері термотрнасферного друку та етикетки </h2>
    </div>
    <div class="button">
      <appButton>Отримати консультацію</appButton>
    </div>
  </div>
</template>

<script setup>
import appButton from '../Button/appButton.vue';

</script>

<style lang="scss" scoped>
@import '/src/assets/main.scss';
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.3)), url('/src/assets/img/Gemini_Generated_Image_2la1wy2la1wy2la1.png') no-repeat center / cover;
  text-align: center;
}
.title-h1 {
  font-size: $font-size-title;
  color: $secondary-color;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  text-transform: uppercase;
  text-shadow: $accent-color 2px 2px 4px;
  margin-bottom: 32px;
}
.subtitle {
  font-size: $font-size-subtitle;
  color: $secondary-color;
  font-family: $font-family-alt;
  margin-bottom: 50px;
}
</style>