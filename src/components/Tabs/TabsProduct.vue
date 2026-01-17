<template>
  <nav class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-item"
      :class="{ active: modelValue === tab.id }"
      @click="selectTab(tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);
const router = useRouter();

const tabs = [
  { id: 'wax', label: 'WAX', path: '/products/ribbons/wax' },
  { id: 'wax-resin', label: 'WAX-RESIN', path: '/products/ribbons/wax-resin' },
  { id: 'resin', label: 'RESIN', path: '/products/ribbons/resin' },
  { id: 'resin-textile', label: 'RESIN-TEXTILE', path: '/products/ribbons/resin-textile' },
  { id: 'hot-stamp', label: 'HOTSTAMP', path: '/products/ribbons/hotstamp' }
];

const selectTab = (id) => {
  emit('update:modelValue', id);
  const targetTab = tabs.find(t => t.id === id);
  if (targetTab) {
    router.push(targetTab.path);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.tab-item {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    background-color: #eee;
    color: $accent-color;
  }

  &.active {
    background-color: $accent-color;
    color: white;
    border-color: $accent-color;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}
</style>