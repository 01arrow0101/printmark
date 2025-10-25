<template>
  <div class="footer-print-mark">
    <div class="logo">
      <Logo />
    </div>
    <div class="container">
      <address>
        <ul class="address-list">
          <li
            v-for="item in address"
            :key="item.name"
            class="address-list_item"
          >
            <p class="text">{{ item.name }}</p>
            <a target="_blank" :href="item.path">{{ item.text }}</a>
          </li>
        </ul>
        <p class="text_work">
          Графік роботи : <span> Пн-Пт : 9: 00 до 18: 00</span>
        </p>
      </address>
      <div class="products">
        <h2 class="title_h2">Продукція</h2>
        <div class="content">
          <div class="ribbon">
            <h3 class="title_h3">Ріббони</h3>
            <div
              v-for="ribbon in ribbonInfo"
              :key="ribbon.name"
              class="ribbon_link"
            >
              <router-link :to="ribbon.path">{{ ribbon.name }}</router-link>
            </div>
          </div>
          <div class="label">
            <h3 class="title_h3">Етикетка</h3>
            <div
              v-for="label in labelInfo"
              :key="label.name"
              class="label_link"
            >
              <router-link :to="label.path">{{ label.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social">
      <div class="social-icon">
        <SvgApp/>
      </div>
    </div>
    <div class="license">
      © 2024 PrintMark. Всі права захищені.
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Logo from "../AppLogo.vue";

const address = [
  {
    name: "Адреса виробництва / Офіс : ",
    text: "вулиця Вінстона Черчилля, 84, корпус 26, Київ, 02000",
    path: "https://goo.gl/maps/XYZ1234567890",
  },
  {
    name: "Телефон ( відділ продажу ) : ",
    text: "+380 44 123 4567",
    path: "tel:+380441234567",
  },
  {
    name: "Email: ",
    text: "ptintmark@gamil.com",
    path: "mailto: ptintmark@gamil.com",
  },
];

const ribbonInfo = [
  { name: "Wax", path: "/products/wax" },
  { name: "Wax/Resin", path: "/products/wax-resin" },
  { name: "Resin", path: "/products/resin" },
];

const labelInfo = [
  { name: "Термо ЕКО", path: "/products/thermo-eco" },
  { name: "Термо Преміум", path: "/products/thermo-premium" },
  { name: "Термо Супер Преміум", path: "/products/thermo-super-premium" },
  { name: "Термо ТОП", path: "/products/thermo-top" },
  { name: "Напівглянець", path: "/products/semi-gloss" },
  { name: "Глянець", path: "/products/gloss" },
  { name: "Мат", path: "/products/mat" },
];
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.footer-print-mark {
  width: 100%;
  background-color: $bg-color;
  display: flex;
  flex-direction: column;
  padding: 72px 16px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
.logo {
  margin-bottom: 32px;
  margin-left: 16px;
}
.address-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
  &_item {
    display: flex;
    gap: 16px;
    .text {
      color: $secondary-color;
      font-family: $font-family-base;
      font-weight: $font-weight-medium;
      margin: 0;
    }
    a {
      color: $accent-color;
      text-decoration: none;
      font-family: $font-family-base;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.text_work {
  color: $secondary-color;
  font-family: $font-family-base;
  font-weight: $font-weight-bold;
  span {
    font-weight: $font-weight-bold;
    margin-left: 16px;
  }
}
.content {
  display: flex;
  gap: 64px;
}
.title_h2 {
  font-size: $font-size-subtitle;
  color: $secondary-color;
  font-family: $font-family-alt;
  text-align: center;
  margin-bottom: 32px;
}
.title_h3 {
  font-size: $font-size-subtitle;
  color: $secondary-color;
  font-family: $font-family-alt;
  margin-bottom: 16px;
}
.ribbon_link {
  margin-bottom: 8px;
  a {
    color: $accent-color;
    text-decoration: none;
    font-family: $font-family-base;
    &:hover {
      text-decoration: underline;
    }
  }
}
.label_link {
  margin-bottom: 8px;
  a {
    color: $accent-color;
    text-decoration: none;
    font-family: $font-family-base;
    &:hover {
      text-decoration: underline;
    }
  }
}
.license {
  text-align: center;
  margin-top: 32px;
  color: $secondary-color;
  font-family: $font-family-base;
}
</style>
