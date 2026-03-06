<script setup>
import SectionCard from "@/components/About/SectionCard.vue";
import OurTehnologies from "@/components/About/OurTehnologies.vue";
import HeroSection from "@/components/Layout/HeroSection.vue";
</script>

<template>
  <HeroSection class-name="bg">
    <template #subtitle
      >Інноваційні технології у сфері термотрнасферного друку</template
    >
  </HeroSection>
  <section class="about-section p-section m-section">
    <div class="container">
      <div class="header-content m-section">
        <!-- <h2 class="title">
          Професійний поріз термотрансферної стрічки та самоклеючих етикеток
        </h2> -->
        <p class="description">
          <span>Принтмарк</span> — це виробничо-торгова компанія заснована в
          2011 році. Наша мета — практичне застосування накопиченого нами
          досвіду для комплексного задоволення потреб ринку маркувальної
          продукції. Основним напрямком діяльності компанії стало забезпечення
          клієнтів якісними витратними матеріалами та обладнанням для термо- і
          термотрансферного друку. Наразі, <span>Принтмарк</span> - доволі зріла
          фірма, але ми не бажаємо стояти на місці. Ми досі прагнемо розвиватись
          і робимо це. Наш досвід, наші знання і вміння дозволяють нам
          якнайкраще задовольняти потреби наших клієнтів. Ми любимо свою справу
          і знаємось на тому, що робимо.
        </p>
      </div>

      <!-- <SectionCard /> -->

      <!-- <OurTehnologies /> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.about-section {
  background-color: #f9fafb;
}

.header-content {
  text-align: center;
}

.hero-title {
  color: $accent-color;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 4px $primary-color;
  text-wrap-mode: wrap;
  & span {
    font-size: 36px;
    color: $primary-color;
    font-size: $font-size-title;
    text-shadow: none;
    @media (max-width: 479.98px) {
      font-size: 32px;
    }
  }
}

.subtitle {
  line-height: 1.2;
  color: $primary-color;
  margin-bottom: 1.5rem;
}

.description {
  color: $primary-color;
  max-width: 800px;
  margin: 0 auto;
  & span {
    font-size: $font-size-subtitle;
    font-family: $font-size-title;
    font-weight: $font-weight-bold;
  }
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
