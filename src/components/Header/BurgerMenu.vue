<template>
  <div class="burger-menu">
    <div class="close">
      <div class="btn_close">
        <appButton> X </appButton>
      </div>
    </div>
    <div class="logo"></div>
    <nav 
    v-for="item in navItems" 
    :key="item.name"
    class="nav">
      <ul class="nav-list">
        <li class="nav-list_item">
          <router-link class="link" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import appButton from '../Button/appButton.vue';
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
];
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: #333;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 16px 16px 0;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  color: $secondary-color;
  text-decoration: none;
}
</style>
