<template>
  <div class="btn-back">
    <AppButton className="back" @click="$emit('action')"> <--- назад</AppButton>
  </div>
</template>

<script setup>
import AppButton from "@/components/Button/appButton.vue";
defineEmits(["action"]);
</script>

<style lang="scss" scoped>
@import '@/assets/main';
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 8px;
  background: $btn-gradient;
  text-shadow: $bg-color 2px 2px 2px;
}
</style>
