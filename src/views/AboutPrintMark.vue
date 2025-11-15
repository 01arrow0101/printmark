<script setup>
import SectionCard from "@/components/About/SectionCard.vue";
import OurTehnologies from "@/components/About/OurTehnologies.vue";
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="header-content">
        <h1 class="hero-title"><span>Про компанію</span>PrintMark</h1>
        <h2 class="subtitle">
          Професійний поріз термотрансферної стрічки та самоклеючих етикеток
        </h2>
        <p class="description">
          Ми спеціалізуємося на точному різанні термотрансферних стрічок і
          самоклеючих етикеток, забезпечення високої якості та точності для
          різних галузей промисловості.
        </p>
      </div>

      <SectionCard />

      <OurTehnologies />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.about-section {
  padding: 5rem 1rem;
  background-color: #f9fafb;
}

.header-content {
  text-align: center;
  margin-bottom: 4rem;
}

.hero-title {
  color: $accent-color;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 4px $primary-color;
  & span {
    font-size: 44px;
    color: $primary-color;
    font-size: $font-size-title;
    text-shadow: none;
  }
}

.subtitle {
  line-height: 1.2;
  color: $primary-color;
  margin-bottom: 1.5rem;
}

.description {
  color: $primary-color;
  max-width: 600px;
  margin: 0 auto;
}

.tech-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  font-family: $font-family-alt;
  color: $primary-color;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: $primary-color;
  max-width: 600px;
  margin: 0 auto;
}
</style>
