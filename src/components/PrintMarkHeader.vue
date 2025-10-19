<template>
  <div class="header">
    <div class="logo">
      <router-link class="logo-link" to="/">
        <div class="square">PM</div>
        <span>PrintMark</span>
      </router-link>
    </div>
    <div class="navigation">
      <nav>
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name" class="nav-list_item">
            <router-link :to="item.link" class="item-link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const navItems = [
  { name: "Головна", link: "/" , active : 0},
  { name: "О Нас", link: "/about", active : 1},
  { name: "Продукція", link: "/products", active : 2},
  { name: "Технології", link: "/Technology", active : 3},
  { name: "Контакти", link: "/Contact", active : 4},
];
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: $bg-color;
  color: $secondary-color;
}
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
.nav-list{
  display: flex;
  align-items: center;
  gap: 32px;
  &_item{
    &hover{
      color: $accent-color;
    }
  }
}

.item-link{
  color: $secondary-color;
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  transition: color 0.3s ease;
  &:hover{
    color: $accent-color;
  }
}
.active{
  color: $accent-color;
}
</style>
