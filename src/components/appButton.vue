<template>
  <div class="button">
    <span class="text"><slot></slot></span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.button {
  display: inline-block;
  padding: 8px 16px;
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
