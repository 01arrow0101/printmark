<template>
  <div class="header">
    <div class="logo">
      <logo />
      <div class="open_menu">X</div>
    </div>
    <div class="navigation">
      <nav>
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name" class="nav-list_item">
            <router-link :to="item.link" class="item-link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Logo from "../Logo/AppLogo.vue";


const navItems = [
  { name: "Головна", link: "/", active: 0 },
  { name: "Про Нас", link: "/about", active: 1 },
  { name: "Продукція", link: "/products", active: 2 },
  { name: "Технології", link: "/technology", active: 3 },
  { name: "Контакти", link: "/contacts", active: 4 },
];


</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";

a.router-link-exact-active {
  color: $accent-color;
}
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: $bg-color;
  color: $secondary-color;
}
.open_menu {
  position: absolute;
  top: 16px;
  right: 32px;
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
}
.navigation {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  &_item {
    &hover {
      color: $accent-color;
    }
  }
}

.item-link {
  color: $secondary-color;
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  transition: color 0.3s ease;
  &:hover {
    color: $accent-color;
  }
}
.active {
  color: $accent-color;
}
</style>
