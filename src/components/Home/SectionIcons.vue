<template>
  <div class="container">
    <div class="icons p-section m-section">
      <ul class="svg-list">
        <li
          v-for="icon in icons"
          :key="icon.name"
        >
          <router-link class="svg-list_item" :to="icon.path">
            <div class="icon">
              <SvgIcon :name="icon.name" folder="/src/assets/img/icons" />
            </div>
            <p class="icon-text">{{ icon.text }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import SvgIcon from "@/components/Svg/SvgApp.vue";
import { usePrintMarkStore } from "@/stores/PrintMarkStore";

const store = usePrintMarkStore();

const icons = [
  { name: "производство ", text: "Особисте виробництво", path: "/technology" },
  {
    name: "этикетка ",
    text: "Рулонні Етикетки на замовлення",
    path: "/produts/labels",
  },
  {
    name: "рибоны",
    text: "Широкий асортимент Ріббонов",
    path: "/products/ribbons",
  },
  {
    name: "размер",
    text: "Індивідуальні розміри та намотування",
    path: "/sizes",
  },
  { name: "сертификат", text: "Контроль сировини", path: "/technology" },
  { name: "доставка", text: "Оперативна Логістика", path: "/delivery" },
];
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.svg-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  @media ($breakpoint-tablet) {
    gap: 24px;
  }
  &_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 150px;
    @media ($breakpoint-tablet) {
      max-width: 100px;
    }
    cursor: pointer;
    &:hover {
      .icon {
        transition: background-color 0.3s ease;
        background-color: $accent-color;
        svg {
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
      &-text {
        font-family: $font-family-italic;
        font-weight: $font-weight-medium;
      }
      @media ($breakpoint-tablet) {
        width: 50px;
        height: 50px;
      }
      svg {
        color: $secondary-color;
      }
    }
  }
}
</style>
