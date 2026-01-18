<template>
  <div class="button" :class="className">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: String,
});
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
.button {
  display: inline-block;
  padding: 16px 32px;
  background-color: $accent-color;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
  transition: background-color 0.3s ease;
  @media ($breakpoint-mobile) {
    padding: 12px 24px;
    width: 100%;
  }

  &:hover {
    background-color: darken($accent-color, 10%);
  }
}
</style>
