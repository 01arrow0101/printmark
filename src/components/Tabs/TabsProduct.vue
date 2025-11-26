<template>
  <nav class="tabs">
    <button
      class="tab-item"
      :class="{ active: currentLabel === 'wax' }"
      @click="handleTabClick('wax')"
    >
      WAX
    </button>
    <button
      class="tab-item"
      :class="{ active: currentLabel === 'wax-resin' }"
      @click="handleTabClick('wax-resin')"
    >
      WAX-RESIN
    </button>
    <button
      class="tab-item"
      :class="{ active: currentLabel === 'resin' }"
      @click="handleTabClick('resin')"
    >
      RESIN
    </button>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 1. Стан для активного таба
const currentLabel = ref("wax"); // Встановлюємо цей таб як активний

// 2. Логіка переходу (Вам потрібно адаптувати шляхи!)
const handleTabClick = (type) => {
  currentLabel.value = type;
  // ПРИКЛАД: Використовуйте Vue Router для переходу
  const routes = {
    wax: "/products/ribbons/wax",
    "wax-resin": "/products/ribbons/wax-resin",
    resin: "/products/ribbons/resin",
  };
  if (routes[type]) {
    router.push(routes[type]);
  }
};
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.tab-item {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: #eee;
    color: $accent-color;
  }

  &.active {
    background-color: $accent-color;
    color: white;
    border-color: $accent-color;
    font-weight: 700;
  }
}
</style>
