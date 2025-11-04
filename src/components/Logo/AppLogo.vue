<template>
<div class="logo">
      <router-link class="logo-link" to="/">
        <div class="square">PM</div>
        <span>PrintMark</span>
      </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
.logo {
  font-size: 24px;
  color: $secondary-color;
  font-size: $font-family-base;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  text-transform: uppercase;
  &-link {
    display: flex;
    align-items: center;
  }
  .square {
    width: 40px;
    height: 40px;
    background-color: $accent-color;
    color: $secondary-color;
    font-size: $font-size-base;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    text-shadow: $primary-color 2px 2px 0px;
  }
  span {
    text-shadow: $primary-color 4px 4px 0px;
  }
}
</style>