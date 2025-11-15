<template>
  <div class="tech-section">
    <div class="section-header">
      <h2 class="title center">Наші технології</h2>
      <p class="description">
        Ми використовуємо сучасне обладнання з високою точністю різу до 0,01 мм
        та автоматизовані системи контролю якості.
      </p>
    </div>

    <div class="tech-grid">
      <div class="tech-card">
        <h3 class="subtitle">Процес розрізання термотрансферної стрічки</h3>
        <p class="card-text">
          Ми використовуємо високоточні машини для різання, щоб забезпечити
          рівномірну товщину і чисті краї. Всі стрічки перевірені на адгезію і
          термостійкість.
        </p>
      </div>
      <div class="tech-card">
        <h3 class="subtitle">Виготовлення самоклеючих етикеток</h3>
        <p class="card-text">
          Виготовляємо етикетки з різних матеріалів (ПВХ, папір, полімери) з
          різними видами клею для різних поверхонь і умов експлуатації.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.title{
  line-height: 1.2;
  color: $primary-color;
  margin-bottom: 1.5rem;;
}
.description{
  color: $primary-color;
  max-width: 600px;
  margin: 0 auto;
}
.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media ($breakpoint-tablet) {
    grid-template-columns: 1fr;
  }
}

.tech-card {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.subtitle {
  color:$primary-color;
  margin-bottom: 1rem;
}

.card-text {
  color: $primary-color;
}
</style>
