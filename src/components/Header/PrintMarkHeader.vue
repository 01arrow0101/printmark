<template>
  <header class="header">
    <div class="logo">
      <Logo />
    </div>
    <div class="open-menu">
      <button class="burger-btn" @click="showMenu" aria-label="Open menu">
        <span class="line"></span>
      </button>
    </div>
    <nav class="navigation">
      <ul class="nav-list">
        <li v-for="item in navItems" :key="item.name" class="nav-list_item">
          <router-link :to="item.link" class="item-link">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
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

.header {
  max-width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: $bg-color;
  color: $secondary-color;
  @media ($breakpoint-tablet) {
    max-width: 100vw;
    padding: 16px;
  }
}
.open-menu {
  display: none;
  position: relative;
  @media ($breakpoint-tablet) {
    display: inline-block;
  }
}

.burger-btn {
  width: 32px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;

  & .line {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: $secondary-color;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background: $secondary-color;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &::before {
    top: -4px;
  }

  &::after {
    bottom: -4px;
  }

  &:hover {
    & .line,
    &::before,
    &::after {
      background: $accent-color;
    }
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

a.router-link-exact-active {
  color: $accent-color;
}
</style>
