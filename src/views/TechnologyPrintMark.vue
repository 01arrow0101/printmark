<template>
  <HeroSection class-name="bg"
    ><template #subtitle
      >Інноваційні технології у сфері термотрнасферного друку</template
    ></HeroSection
  >

  <section class="our-technologies p-section m-section">
    <div class="container">
      <div class="our-product_title">
        <h2 class="title">
          СУЧАСНІ РІШЕННЯ ДЛЯ СУЧАСНОГО БІЗНЕСУ.
        </h2>
      </div>

      <div class="product-section">
        <div class="section-header">
          <div class="product-grid m-section">
            <div
              v-for="tech in technologies"
              :key="tech.title"
              class="product-card"
            >
              <div class="card_image">
                <img :src="tech.image" :alt="tech.title" />
              </div>
              <div class="card_title">
                <h3>{{ tech.title }}</h3>
              </div>
              <div class="card_description">
                <p>{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import HeroSection from "@/components/Layout/HeroSection.vue";
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

const technologies = [
  {
    title: "Обладнання та Персонал",
    image: folder("img/tehnology/lazer.webp"),
    description:
      "Ми використовуємо високотехнологічне обладнання, щоб забезпечити максимальний результат. Сучасні ротаційні системи висікання з автоматичним керуванням, слітингові лінії високого ступеня автоматизації, високоточна електроніка контролю процесів, у поєднанні з нашим досвідом та високою кваліфікацією команди, гарантує безкомпромісну якість продукції. Ми прагнемо постійно самовдосконалюватись та розвивати наші виробничі можливості.",
  },
  {
    title: "Контроль якості як Філософія бізнесу",
    image: folder("img/tehnology/control.webp"), // Це зображення може потребувати оновлення, якщо воно було про термостійкість, а не порізку спец. матеріалів
    description:
      "Ми прискіпливо контролюємо кожен етап створення нашого продукту. Скурпульозний підбір та постійний контроль якості всіх компонентів, ретельна багаторічна селекція матеріалів від провідних виробників, постійний пошук та безкомпромісне прагнення до ідеалу - це наша формула якості, а задоволені клієнти - це наша мета. Ми хочемо щоб Ви залишались з нами.",
  },
  {
    title: "Ефективність та Екологічність",
    image: folder("img/tehnology/екологічність.webp"),
    description:
      "Ми оптимізуємо виробничі процеси для мінімізації відходів. Використовуємо енергоефективне обладнання та екофрендлі матеріали. Ми дбаємо про екологічність нашого виробництва, забезпечуючи високоякісні результати.",
  },
];


</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.hero-title-first {
  text-transform: uppercase;
  letter-spacing: 0.03em;
  text-shadow: none;
  font-size: 36px;
}
/* Збережено існуючі сти.y{лі, вони є загальними і не конфліктують з новою логікою */
.quality-section {
  background-color: #f3f4f6;
  border-radius: 16px;
}

.quality-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.quality-text {
  font-size: $font-size-base;
  color: $primary-color;
  margin-bottom: 32px;
}

.quality-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  li {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-size: $font-size-base;
    color: $primary-color;
  }
}

/* Hero section specific styles (можливо, потребують доопрацювання для кращого візуального ефекту) */

.hero_text p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.button {
  margin-top: 30px;
}

/* Загальні стилі для секцій та карток, які у вас вже були */

.our-product_title {
  margin-bottom: 50px;
  @media ($breakpoint-mobile) {
    margin-bottom: 32px;
  }
  .title {
    text-align: center;
    color: $primary-color;
  }
}

.our-product_text {
  text-align: center;
  margin-bottom: 32px;
  .title {
    color: $accent-color;
    .subtitle {
      color: $primary-color;
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  // background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8));
  background: $bg-color;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
}

.card_image img {
  width: 100%;
  height: 200px; /* Фіксована висота для зображень */
  object-fit: cover; /* Зберігаємо пропорції */
  margin-bottom: 20px;
  border-radius: 8px;
}

.card_title h3 {
  font-size: 1.5rem;
  color: $accent-color;
  margin-bottom: 15px;
}

.card_description p {
  font-size: $font-size-base;
  color: $secondary-color;
  line-height: 1.6;
}
</style>
