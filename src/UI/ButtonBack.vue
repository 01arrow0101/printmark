<template>
  <div class="btn-back">
    <AppButton className="back" @click="$emit('action')">
      <SvgApp className="arrow" name="arrowleft" folder="/src/assets/img" />
      назад</AppButton
    >
  </div>
</template>

<script setup>
import AppButton from "@/components/Button/appButton.vue";
import SvgApp from "@/components/Svg/SvgApp.vue";
defineEmits(["action"]);
</script>

<style lang="scss" scoped>
@import "@/assets/main";
.btn-back {
  position: sticky;
  top: 10px;
  margin-right: 32px;
  margin-top: 16px;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 999;
}
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 8px;
  background: $btn-gradient;
  text-shadow: $bg-color 2px 2px 2px;
}
.arrow {
  width: 40px;
  height: 32px;
  margin-right: 8px;
  margin-top: 2px;
}
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-4px);
  }
}
.back:hover .arrow{
  animation: moveLeft 0.3s infinite alternate;
}

</style>
