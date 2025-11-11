<template>
  <div class="burger-menu">
    <Logo/>
    <div class="close">
      <div class="btn_close">
        <appButton className="btn-close" @click="store.showBurgerMenu = false"> X </appButton>
      </div>
    </div>
    <div class="logo"></div>
    <nav v-for="item in navItems" :key="item.name" class="nav">
      <ul class="nav-list">
        <li class="nav-list_item">
          <router-link class="link" :to="item.link" @click.native="store.showBurgerMenu = false">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import Logo from "../Logo/AppLogo.vue";
import appButton from "../Button/appButton.vue";

const store = usePrintMarkStore()
const navItems = [
  { name: "Головна", link: "/" },
  { name: "Про Нас", link: "/about" },
  { name: "Продукція", link: "/products" },
  { name: "Технології", link: "/technology" },
  { name: "Контакти", link: "/contacts" },
];
</script>

<style lang="scss" scoped>
@import "@/assets/main";
.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  letter-spacing: 0.2em;
  justify-content: center;

  border-radius: 0 16px 16px 0;
  background: $bg-color;
  z-index: 1000;
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
.btn-close{
  padding: 4px 8px;
}
.link {
  color: $secondary-color;
  text-decoration: none;
}
</style>
