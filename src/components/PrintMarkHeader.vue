<template>
  <div class="header">
    <div class="logo"></div>
    <nav 
    v-for="item in navItems" 
    :key="item.name"
    class="nav">
      <ul class="nav-list">
        <li class="nav-list_item">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
];
</script>

<style lang="scss" scoped></style>
