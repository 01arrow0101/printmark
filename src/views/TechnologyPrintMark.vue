<template>
  <HeroSection>
    <template #title>
      <span class="hero-title-first">Точна Порізка від</span> PrintMark
    </template>
    <template #subtitle
      >Інноваційні рішення у порізці термотрансферних рібонів та
      етикеток</template
    >
  </HeroSection>

  <section class="our-technologies p-section m-section">
    <div class="container">
      <div class="our-product_title">
        <h2 class="title">Наші Технології Порізки</h2>
      </div>

      <div class="product-section">
        <div class="section-header">
          <div class="our-product_text">
            <p class="title">
              Сучасні
              <span class="subtitle"
                >рішення для точного формування матеріалів</span
              >
            </p>
          </div>
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

        <div class="section-header">
          <div class="our-product_text">
            <p class="title">
              Обладнання <span class="subtitle">для високоточної порізки</span>
            </p>
          </div>
          <div class="product-grid m-section">
            <div
              v-for="equipment in equipments"
              :key="equipment.title"
              class="product-card"
            >
              <div class="card_image">
                <img :src="equipment.image" :alt="equipment.title" />
              </div>
              <div class="card_title">
                <h3>{{ equipment.title }}</h3>
              </div>
              <div class="card_description">
                <p>{{ equipment.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="section-header">
          <div class="our-product_text">
            <p class="title">
              Контроль <span class="subtitle">якості порізаної продукції</span>
            </p>
          </div>
          <div class="quality-section">
            <div class="quality-content">
              <p class="quality-text">
                Ми виконуємо комплексний контроль якості на всіх етапах порізки:
              </p>
              <ul class="quality-list">
                <li>
                  Перевірка точності розмірів та відповідності специфікаціям
                </li>
                <li>Випробування на міцність країв та відсутність дефектів</li>
                <li>
                  Автоматизовані системи вимірювання ширини та довжини рулонів
                </li>
                <li>Тестування якості намотування рулонів та їх цілісності</li>
              </ul>
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
    title: "Високоточна Порізка",
    image: folder("tehnology/високоточнаПорізка.png"),
    description:
      "Використання передових систем різання з точністю до 0.01 мм для термотрансферних стрічок та самоклеючих етикеток. Наше обладнання забезпечує ідеально рівні краї та однакову товщину матеріалу по всій довжині.",
  },
  {
    title: "Рішення для Спеціалізованих Матеріалів",
    image: folder("tehnology/матеріал.png"), // Це зображення може потребувати оновлення, якщо воно було про термостійкість, а не порізку спец. матеріалів
    description:
      "Технології порізки, адаптовані для роботи з різними типами матеріалів, включаючи термостійкі, синтетичні та інші спеціалізовані рібони й етикетки, що вимагають особливого підходу.",
  },
  {
    title: "Ефективність та Екологічність",
    image: folder("tehnology/екологічність.png"),
    description:
      "Оптимізація процесів порізки для мінімізації відходів та використання енергоефективного обладнання. Ми дбаємо про екологічність нашого виробництва, забезпечуючи високоякісні результати.",
  },
];

const equipments = [
  {
    title: "Системи Лазерної та Ротаційної Порізки",
    image: folder("tehnology/lazer.png"),
    description:
      "Сучасні лазерні та ротаційні системи з автоматичним керуванням, призначені для порізки рібонів та етикеток з точністю до 0.01 мм. Забезпечують бездоганні краї та відповідність заданим розмірам.",
  },
  {
    title: "Автоматизовані Лінії Перемотування",
    image: folder("tehnology/peremotka.png"),
    description:
      "Повністю автоматизовані лінії для перемотування та порізки рулонів. Системи моніторингу контролюють якість намотування та щільність, гарантуючи високу продуктивність та стабільність параметрів готової продукції.",
  },
  {
    title: "Інтегровані Системи Контролю",
    image: folder("tehnology/control.png"),
    description:
      "Сучасні інтегровані системи автоматизованого контролю якості з використанням оптичних сенсорів для аналізу точності порізки, відсутності дефектів та відповідності розмірів на всіх етапах виробництва.",
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
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.5)),
    url("/src/assets/img/bg/tehnology/bgTehology.png") no-repeat center / cover;
}

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
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8));
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
  color: $primary-color;
  margin-bottom: 15px;
}

.card_description p {
  font-size: $font-size-base;
  color: $secondary-color;
  line-height: 1.6;
}
</style>
