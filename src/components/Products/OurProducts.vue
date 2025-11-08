<template>
  <section class="our-product">
    <div class="our-product_title">
      <h2>Наша Продукція</h2>
    </div>

    <div class="product-section">
      <div class="section-header">
        <div class="our-product_text">
          <p><span>Ріббони</span> ( Термотрансферна стрічка)</p>
        </div>
        <div class="product-grid">
          <div
            v-for="ribbon in ribbons"
            :key="ribbon.title"
            class="product-card"
          >
            <div class="card_image">
              <img :src="ribbon.image" :alt="ribbon.title" />
            </div>
            <div class="card_title">
              <h3>{{ ribbon.title }}</h3>
            </div>
            <div class="card_description">
              <!-- <p>{{ ribbon.description }}</p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="our-product_text">
          <p><span>Самоклеюча Етикетка</span> (Рулони)</p>
        </div>
        <div class="product-grid">
          <div v-for="table in tables" :key="table.title" class="product-card">
            <div class="card_image">
              <img :src="table.image" :alt="table.title" />
            </div>
            <div class="card_title">
              <h3>{{ table.title }}</h3>
            </div>
            <div class="card_description">
              <!-- <p>{{ table.description }}</p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="our-product_text">
          <p><span>Услуги</span> і Спеціалізація</p>
        </div>
        <div class="product-grid">
          <div
            v-for="service in services"
            :key="service.title"
            class="product-card"
          >
            <div class="card_image">
              <img :src="service.image" :alt="service.title" />
            </div>
            <div class="card_title">
              <h3>{{ service.title }}</h3>
            </div>
            <div class="card_description">
              <!-- <p>{{ service.description }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const ribbons = [
  {
    title: "WAX (ВОСК)",
    image: "img/ribbon/wax.png",
    description:
      "Восковая лента с небольшой добавкой смолы. Идеально подходит для печати на бумажных этикетках. Обеспечивает хорошее качество печати при низкой стоимости. Подходит для краткосрочного использования в розничной торговле и логистике. Температурный диапазон: -20°C до +60°C.",
  },
  {
    title: "WAX/RESIN (ВОСК/СМОЛА)",
    image: "img/ribbon/wax-resin.png",
    description:
      "Универсальная смесь воска и синтетических смол (50/50). Обеспечивает повышенную стойкость к истиранию и химическим воздействиям. Подходит для печати на полимерных этикетках. Используется в условиях средней сложности, таких как промышленность и фармацевтика. Температурный диапазон: -10°C до +80°C.",
  },
  {
    title: "RESIN (СМОЛА)",
    image: "img/ribbon/resin.png",
    description:
      "Синтетическая смола с минимальным содержанием воска. Высококачественная лента для печати на синтетических этикетках (ПВХ, полиэстер, полипропилен). Обеспечивает превосходную стойкость к истиранию, химическим веществам и экстремальным температурам. Идеальна для долгосрочного использования в сложных условиях. Температурный диапазон: -30°C до +120°C.",
  },
];

const tables = [
  {
    title: "Паперові Етикетки (WAX)",
    image: "img/label/paper-labels.png",
    description:
      "Паперові самоклеючі етикетки з восковим клеєм. Низька вартість, добре адгезія, але менш стійкі до вологи. Використовуються в роздрібній торгівлі, упаковці продуктів та логістиці. Матеріал: папір, клей: WAX.",
  },
  {
    title: "Синтетичні Етикетки (RESIN)",
    image: "img/label/synthetic-labels.png",
    description:
      "Самоклеючі етикетки на синтетичній основі з клеєм на основі смоли. Висока стійкість до вологи, хімічних речовин і екстремальних температур. Використовуються в промисловості, фармацевтиці та логістиці. Матеріал: полиестер, клей: RESIN.",
  },
  {
    title: "Високотемпературні Етикетки",
    image: "img/label/heat-resistant-labels.png",
    description:
      "Самоклеючі етикетки, стійкі до високих температур (до 200°C). Використовуються для маркування продуктів, що піддаються термічній обробці. Матеріал: термостійкий полиестер, клей: спеціальний RESIN.",
  },
  {
    title: "Водонепроникні Етикетки",
    image: "img/label/waterproof-labels.png",
    description:
      "Самоклеючі етикетки з водонепроникним покриттям. Стійкі до вологи, миття і хімічних чисток. Використовуються в ванних кімнатах, на кухнях, у лабораторіях та на відкритому повітрі. Матеріал: водонепроникний полиестер.",
  },
  {
    title: "Етикетки для Складського Маркування",
    image: "img/label/warehouse-labels.png",
    description:
      "Самоклеючі етикетки для складського маркування. Виготовлені з міцних матеріалів із клеєм, що забезпечує тривалу адгезію. Використовуються для маркування палет, контейнерів, ящиків та інших об'єктів на складах. Матеріал: полиестер, клей: WAX/RESIN.",
  },
  {
    title: "Етикетки для Електроніки",
    image: "img/label/electronics-labels.png",
    description:
      "Самоклеючі етикетки, створені спеціально для маркування електронних компонентів. Мають низький профіль, не впливають на електричні властивості поверхні і витримують випробування на вібрацію та вологу. Матеріал: тонкий полиестер.",
  },
];

const services = [
  {
    title: "Порезка на Замовлення",
    image: "img/services/порізка.png",
    description:
      "Точна порезка термотрансферних лент и самоклеющихся этикеток по индивидуальным размерам и спецификациям. Оборудование с высокой точностью порезки до 0.01 мм.",
  },
  {
    title: "Технічна Підтримка",
    image: "img/services/підтримка.png",
    description:
      "Консультации по выбору оптимальных материалов и технологий для конкретных задач. Поддержка в решении технических вопросов и оптимизации процессов.",
  },
  {
    title: "Сервісне Обслуговування",
    image: "img/services/обслуговування.png",
    description:
      "Регулярное техническое обслуживание и ремонт оборудования. Гарантия бесперебойной работы и продления срока службы.",
  },
  {
    title: "Доставка",
    image: "img/services/доставка.png",
    description:
      "Доставка продукції по всій Україні та за межі. Гарантовані терміни відвантаження та доставки.",
  },
];
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.our-product {
  padding: 64px 200px;
  background-color: #f9fafb;
  text-align: center;
  overflow-x: hidden;
}

.our-product_title h2 {
  font-size: $font-size-subtitle;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  text-transform: uppercase;
  color: $primary-color;
  margin-bottom: 32px;
}

.product-section {
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.our-product_text p {
  font-size: $font-size-base;
  color: $primary-color;
  margin-bottom: 32px;
  & span {
    color: $primary-color;
    font-weight: $font-weight-bold;
  }
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
}

.product-card {
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
  width: 100%;
  margin-bottom: 24px;
  img {
    height: 200px;
    border-radius: 16px 16px 0 0;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
}

.card_title {
  margin-bottom: 16px;
  h3 {
    font-size: $font-size-subtitle;
    font-weight: $font-weight-bold;
    color: $primary-color;
    padding: 0 16px;
  }
}

.card_description {
  padding: 0 16px;
  p {
    font-size: $font-size-base;
    color: $primary-color;
    line-height: 1.6;
  }
}

// Media Queries
@media (max-width: 1200px) {
  .hero {
    padding: 64px 100px 120px;
  }
}

@media (max-width: 992px) {
  .hero {
    padding: 48px 64px 96px;
  }
  .card_description p {
    font-size: $font-size-base;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 32px 40px 80px;
  }
  .hero_title h1 {
    font-size: 2.5rem;
  }
  .hero_text p {
    font-size: 1.2rem;
  }
  .product-grid {
    margin-top: 24px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 24px 20px 64px;
  }
  .hero_title h1 {
    font-size: 2rem;
  }
  .hero_text p {
    font-size: 1rem;
  }
  .card_description p {
    font-size: 0.95rem;
  }
}
</style>
