<template>
  <div class="button" :class="className">
    <span class="text"><slot></slot></span>
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($accent-color, 10%);
  }

  .text {
    font-weight: $font-weight-bold;
  }
}
</style>
