<template>
  <div class="features-grid">
    <div class="feature-card m-section" v-for="card in cards" :key="card.title">
      <div class="icon">
        <SvgApp :folder="card.icon" :name="card.name" />
      </div>
      <div class="content">
        <h3 class="subtitle">{{ card.title }}</h3>
        <p class="feature-text">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgApp from "../Svg/SvgApp.vue";
const cards = [
  {
    name: "1",
    icon: "/src/assets/img/cards",
    title: "Термотрансферна стрічка",
    description:
      "Ми забезпечуємо точний наріз термотрансферних стрічок для друку етикеток, з використанням сучасного обладнання та перевірених технологій.",
  },

  {
    name: "2",
    icon: "/src/assets/img/cards",
    title: "Самоклеючі етикетки",
    description:
      "Виготовляємо якісні самоклеючі етикетки різних форм і розмірів для пакування, ідентифікації та маркування.",
  },

  {
    name: "3",
    icon: "/src/assets/img/cards",
    title: "Індивідуальні рішення",
    description:
      "Ми розробляємо та виробляємо рішення для конкретних вимог клієнтів, в тому числі нестандартних розмірів і матеріалів.",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
$card-gradient: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5));

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media ($breakpoint-tablet) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.feature-card {
  background: $bg-color;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.icon {
  width: 2.25rem;
  height: 2.25rem;
  color: $accent-color;
  margin-bottom: 1rem;
}

.subtitle {
  color: $accent-color;
  margin-bottom: 0.5rem;
}

.feature-text {
  color: $secondary-color;
  font-family: $font-family-italic;
}
</style>
