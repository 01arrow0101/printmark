<template>
  <div class="header">
    <div class="logo">
      <logo />
      <div @click="showMenu" class="open_menu">X</div>
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
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import Logo from "../Logo/AppLogo.vue";

const store = usePrintMarkStore();
const navItems = [
  { name: "Головна", link: "/" },
  { name: "Про Нас", link: "/about" },
  { name: "Продукція", link: "/products" },
  { name: "Технології", link: "/technology" },
  { name: "Контакти", link: "/contacts" },
];

const showMenu = () => (store.showBurgerMenu = true);
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

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
  @media ($breakpoint-tablet) {
    width: 100vw;
    padding: 16px;
  }
}
.open_menu {
  position: absolute;
  top: 16px;
  right: 32px;
  display: none;
  @media ($breakpoint-tablet) {
    display: inline-block;
  }
}
.navigation {
  display: block;
  @media ($breakpoint-tablet) {
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
</style>
