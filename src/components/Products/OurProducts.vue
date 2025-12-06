<template>
  <section class="our-product p-section m-section">
    <div class="container">
      <div class="our-product_title">
        <h2 class="title">Наша Продукція</h2>
      </div>

      <div class="product-section">
        <div class="section-header">
          <div class="our-product_text">
            <p class="subtitle">
              Ріббони <span>(Термотрансферна стрічка)</span>
            </p>
          </div>
          <div class="product-grid mb-32">
            <div
              v-for="ribbon in ribbons"
              :key="ribbon.title"
              class="product-card"
            >
              <div class="card_image">
                <img :src="ribbon.image" :alt="ribbon.title" />
                <div class="card-overlay">
                  <p class="text-overlay">{{ ribbon.description }}</p>
                </div>
              </div>
              <div class="card-title">
                <h3 class="subtitle">{{ ribbon.title }}</h3>
              </div>
            </div>
          </div>
          <div class="button">
            <appButton @click="goTo('ribbons')">Дізнатися більше</appButton>
          </div>
        </div>

        <div class="section-header">
          <div class="our-product_text">
            <p class="subtitle">Самоклеюча Етикетка <span>(Рулони)</span></p>
          </div>
          <div class="product-grid mb-32">
            <div
              v-for="table in tables"
              :key="table.title"
              class="product-card"
            >
              <div class="card_image">
                <img :src="table.image" :alt="table.title" />
                <div class="card-overlay">
                  <p class="text-overlay">{{ table.description }}</p>
                </div>
              </div>
              <div class="card-title">
                <h3 class="subtitle">{{ table.title }}</h3>
              </div>
            </div>
          </div>
          <div class="button">
            <appButton @click="goTo('labels')">Дізнатися більше</appButton>
          </div>
        </div>

        <div class="section-header">
          <div class="our-product_text">
            <p class="title">Послуги та Спеціалізація</p>
          </div>
          <div class="product-grid">
            <div
              v-for="service in services"
              :key="service.title"
              class="product-card"
            >
              <div class="card_image">
                <img :src="service.image" :alt="service.title" />
                <div class="card-overlay">
                  <p class="text-overlay">{{ service.description }}</p>
                </div>
              </div>
              <div class="card-title">
                <h3 class="subtitle">{{ service.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import appButton from "../Button/appButton.vue";

// 1. Динамічний імпорт усіх зображень
// Створюємо мапу, яка містить публічні URL всіх файлів у /src/assets/img/
const allAssetsMap = import.meta.glob(
  // Увага: переконайтеся, що шлях відповідає вашим асетам!
  "/src/assets/img/**/*.{png,jpg,jpeg}",
  {
    eager: true,
    as: "url",
  }
);

/**
 * Функція для отримання оптимізованого публічного URL ассету.
 * @param {string} relativePath - Шлях до файлу відносно /src/assets/img/, наприклад, 'ribbon/wax.png'
 * @returns {string} Оптимізований публічний URL або порожня строка, якщо ассет не знайдено.
 */
const getOptimizedAssetUrl = (relativePath) => {
  // Ключ для пошуку у мапі завжди починається з кореня '/src/'
  const key = `/src/assets/img/${relativePath}`;

  const url = allAssetsMap[key];
  if (!url) {
    console.warn(`Ассет не знайдено в мапі glob: ${key}`);
    return "";
  }
  return url;
};

const router = useRouter();

// 2. Оновлення масивів: використання getOptimizedAssetUrl()
const ribbons = [
  {
    title: "WAX (ВОСК)",
    image: getOptimizedAssetUrl("ribbon/wax.png"), // <-- Використовуємо функцію
    description:
      "Восковая лента с небольшой добавкой смолы. Идеально подходит для печати на бумажных этикетках. Обеспечивает хорошее качество печати при низкой стоимости. Подходит для краткосрочного использования в розничной торговле и логистике. Температурный диапазон: -20°C до +60°C.",
  },
  {
    title: "WAX/RESIN (ВОСК/СМОЛА)",
    image: getOptimizedAssetUrl("ribbon/wax-resin.png"), // <-- Використовуємо функцію
    description:
      "Универсальная смесь воска и синтетических смол (50/50). Обеспечивает повышенную стойкость к истиранию и химическим воздействиям. Подходит для печати на полимерных этикетках. Используется в условиях средней сложности, таких как промышленность и фармацевтика. Температурный диапазон: -10°C до +80°C.",
  },
  {
    title: "RESIN (СМОЛА)",
    image: getOptimizedAssetUrl("ribbon/resin.png"),
    description:
      "Синтетическая смола с минимальным содержанием воска. Высококачественная лента для печати на синтетических этикетках (ПВХ, полиэстер, полипропилен). Обеспечивает превосходную стойкость к истиранию, химическим веществам и экстремальным температурам. Идеальна для долгосрочного использования в сложных условиях. Температурный діапазон: -30°C до +120°C.",
  },
];

const tables = [
  {
    title: "Паперові Етикетки (WAX)",
    image: getOptimizedAssetUrl("label/paper-labels.png"),
    description:
      "Паперові самоклеючі етикетки з восковим клеєм. Низька вартість, добре адгезія, але менш стійкі до вологи. Використовуються в роздрібній торгівлі, упаковці продуктів та логістиці. Матеріал: папір, клей: WAX.",
  },
  {
    title: "Синтетичні Етикетки (RESIN)",
    image: getOptimizedAssetUrl("label/synthetic-labels.png"),
    description:
      "Самоклеючі етикетки на синтетичній основі з клеєм на основі смоли. Висока стійкість до вологи, хімічних речовин і екстремальних температур. Використовуються в промисловості, фармацевтиці та логістиці. Матеріал: полиестер, клей: RESIN.",
  },
  {
    title: "Високотемпературні Етикетки",
    image: getOptimizedAssetUrl("label/heat-resistant-labels.png"),
    description:
      "Самоклеючі етикетки, стійкі до високих температур (до 200°C). Використовуються для маркування продуктів, що піддаються термічній обробці. Матеріал: термостійкий полиестер, клей: спеціальний RESIN.",
  },
  {
    title: "Водонепроникні Етикетки",
    image: getOptimizedAssetUrl("label/waterproof-labels.png"),
    description:
      "Самоклеючі етикетки з водонепроникним покриттям. Стійкі до вологи, миття і хімічних чисток. Використовуються в ванних кімнатах, на кухнях, у лабораторіях та на відкритому повітрі. Матеріал: водонепроникний полиестер.",
  },
  {
    title: "Етикетки для Складського Маркування",
    image: getOptimizedAssetUrl("label/warehouse-labels.png"),
    description:
      "Самоклеючі етикетки для складського маркування. Виготовлені з міцних матеріалів із клеєм, що забезпечує тривалу адгезію. Використовуються для маркування палет, контейнерів, ящиків та інших об'єктів на складах. Матеріал: полиестер, клей: WAX/RESIN.",
  },
  {
    title: "Етикетки для Електроніки",
    image: getOptimizedAssetUrl("label/electronics-labels.png"),
    description:
      "Самоклеючі етикетки, створені спеціально для маркування електронних компонентів. Мають низький профіль, не впливають на електричні властивості поверхні і витримують випробування на вібрацію та вологу. Матеріал: тонкий полиестер.",
  },
];

const services = [
  {
    title: "Порезка на Замовлення",
    image: getOptimizedAssetUrl("services/порізка.png"),
    description:
      "Точна порезка термотрансферних лент и самоклеющихся этикеток по индивидуальным размерам и спецификациям. Оборудование с высокой точностью порезки до 0.01 мм.",
  },
  {
    title: "Технічна Підтримка",
    image: getOptimizedAssetUrl("services/підтримка.png"),
    description:
      "Консультации по выбору оптимальных материалов и технологий для конкретных задач. Поддержка в решении технических вопросов и оптимизации процессов.",
  },
  {
    title: "Сервісне Обслуговування",
    image: getOptimizedAssetUrl("services/обслуговування.png"),
    description:
      "Регулярное техническое обслуживание и ремонт оборудования. Гарантия бесперебойной работы и продления срока службы.",
  },
  {
    title: "Доставка",
    image: getOptimizedAssetUrl("services/доставка.png"),
    description:
      "Доставка продукції по всій Україні та за межі. Гарантовані терміни відвантаження та доставки.",
  },
];

const goTo = (path) => {
  router.push(`/products/${path}`);
};
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.mb-32 {
  margin-bottom: 32px;
}
.our-product {
  background-color: #f9fafb;
  text-align: center;
  overflow-x: hidden;
}

.our-product_title {
  .title {
    text-transform: uppercase;
    margin-bottom: 32px;
  }
}

.product-section {
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.section-header {
  text-align: center;
}

.our-product_text p {
  color: $primary-color;
  margin-bottom: 32px;
  & span {
    color: $primary-color;
    font-weight: $font-weight-normal;
  }
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.product-card {
  width: 100%;
  max-width: 200px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
  }
}

.card_image {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 16px;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(2);
  }
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  .card_image:hover & {
    opacity: 1;
  }
}

.text-overlay {
  text-align: center;
  max-width: 100%;
  padding: 16px;
  font-size: 12px;
  line-height: 1.4;
  word-wrap: break-word;
  overflow: auto;
  height: 100%;
}

.card-title {
  margin-bottom: 16px;
  .subtitle {
    color: $primary-color;
    padding: 0 16px;
    margin: 0;
  }
}
</style>
