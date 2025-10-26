<template>
  <div class="icons">
    <ul class="svg-list">
      <li v-for="icon in icons" :key="icon.name" >
        <router-link class="svg-list_item" :to="icon.path">
        <div class="icon">
          <SvgIcon :name="icon.name" folder="/src/assets/img/icons" />
        </div>
        <p class="text">{{ icon.text }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import SvgIcon from "@/components/Svg/SvgApp.vue";

const icons = [
  { name: "производство ", text: "Особисте виробництво", path: "/poizvodstvo" },
  { name: "этикетка ", text: "Рулонні Етикетки на замовлення", path:'/eteketka' },
  { name: "рибоны", text: "Широкий асортимент Ріббонов", path: '/ribbons' },
  { name: "размер", text: "Індивідуальні розміри та намотування", path: '/sizes' },
  { name: "сертификат", text: "Контроль сировини" , path: '/certificates'},
  { name: "доставка", text: "Оперативна Логістика", path: '/delivery' },
];
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
.icons {
 width: 100%;
 margin: 0 auto;
 padding: 72px 0;
}
.svg-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  &_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 150px;
    cursor: pointer;
    &:hover{
      .icon{
        background: $accent-color;
        svg{
          color: $bg-color;
        }
      }
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      margin-bottom: 16px;
      background: $bg-color;
      border-radius: 8px;
      svg {
        // width: 100%;
        // height: 100%;
        color: $secondary-color
      }
    }
  }
}
</style>
