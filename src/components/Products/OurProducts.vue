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
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import appButton from "../Button/appButton.vue";
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

const router = useRouter();

// 2. Оновлення масивів: використання folder()
const ribbons = [
  {
    title: "WAX (ВОСК)",
    image: folder("img/ribbon/green.webp"), // <-- Використовуємо функцію
    description:
      "Воскова стрічка з невеликим додаванням смоли. Ідеально підходить для друку на паперових етикетках. Забезпечує хорошу якість друку за низькою ціною. Підходить для короткострокового використання в роздрібній торгівлі та логістиці. Діапазон температур: від -20°C до +60°C.",
  },
  {
    title: "WAX/RESIN (ВОСК/СМОЛА)",
    image: folder("img/ribbon/black.webp"), // <-- Використовуємо функцію
    description:
      "Універсальна суміш воску та синтетичних смол (50/50). Забезпечує підвищену стійкість до стирання і хімічних впливів. Підходить для друку на полімерних етикетках. Використовується в помірно складних середовищах, таких як промисловість і фармацевтика. Діапазон температур: від -10°C до +80°C.",
  },
  {
    title: "RESIN (СМОЛА)",
    image: folder("img/ribbon/white.webp"),
    description:
      "Синтетична смола з мінімальним вмістом воску. Високоякісна стрічка для друку на синтетичних етикетках (ПВХ, поліестер, поліпропілен). Забезпечує відмінну стійкість до стирання, хімічних речовин і екстремальних температур. Ідеально підходить для тривалого використання в складних умовах. Діапазон температур: від -30°C до +120°C.",
  },
  {
    title: "RESIN-TEXTILE (СМОЛА-ТЕКСТИЛЬ)",
    image: folder("img/ribbon/Metallic.webp"),
    description:
      "Спеціалізована смола для текстилю без вмісту воску. Високотехнологічна стрічка для друку на вшивних ярликах (сатин, нейлон, поліестер). Забезпечує екстремальну стійкість до гарячого прання (90°C), промислової хімчистки та прасування. Ідеально підходить для маркування одягу та текстильних виробів з тривалим циклом експлуатації. Температурна стійкість: до +150°C.",
  },
  {
  title: "HOT STAMP (ФОЛЬГА)",
  image: folder("img/ribbon/hot-stamp.webp"), // Переконайтеся, що файл hot-stamp.webp є в папці ribbon
  description:
    "Спеціальна фольга для гарячого тиснення на термодатерах. Призначена для нанесення чіткого маркування (дата, серія) на гнучку упаковку, плівку та картон. Забезпечує миттєве висихання та високу стійкість до стирання і низьких температур (заморозки). Діапазон температур друку: від +90°C до +150°C.",
},
];

const tables = [
  {
    title: "Паперові Етикетки (WAX)",
    image: folder("img/label/paper-labels.webp"),
    description:
      "Паперові самоклеючі етикетки з восковим клеєм. Низька вартість, добре адгезія, але менш стійкі до вологи. Використовуються в роздрібній торгівлі, упаковці продуктів та логістиці. Матеріал: папір, клей: WAX.",
  },
  {
    title: "Синтетичні Етикетки (RESIN)",
    image: folder("img/label/synthetic-labels.webp"),
    description:
      "Самоклеючі етикетки на синтетичній основі з клеєм на основі смоли. Висока стійкість до вологи, хімічних речовин і екстремальних температур. Використовуються в промисловості, фармацевтиці та логістиці. Матеріал: полиестер, клей: RESIN.",
  },
  {
    title: "Високотемпературні Етикетки",
    image: folder("img/label/heat-resistant-labels.webp"),
    description:
      "Самоклеючі етикетки, стійкі до високих температур (до 200°C). Використовуються для маркування продуктів, що піддаються термічній обробці. Матеріал: термостійкий полиестер, клей: спеціальний RESIN.",
  },
  {
    title: "Водонепроникні Етикетки",
    image: folder("img/label/waterproof-labels.webp"),
    description:
      "Самоклеючі етикетки з водонепроникним покриттям. Стійкі до вологи, миття і хімічних чисток. Використовуються в ванних кімнатах, на кухнях, у лабораторіях та на відкритому повітрі. Матеріал: водонепроникний полиестер.",
  },
  {
    title: "Етикетки для Складського Маркування",
    image: folder("img/label/warehouse-labels.webp"),
    description:
      "Самоклеючі етикетки для складського маркування. Виготовлені з міцних матеріалів із клеєм, що забезпечує тривалу адгезію. Використовуються для маркування палет, контейнерів, ящиків та інших об'єктів на складах. Матеріал: полиестер, клей: WAX/RESIN.",
  },
  {
    title: "Етикетки для Електроніки",
    image: folder("img/label/electronics-labels.webp"),
    description:
      "Самоклеючі етикетки, створені спеціально для маркування електронних компонентів. Мають низький профіль, не впливають на електричні властивості поверхні і витримують випробування на вібрацію та вологу. Матеріал: тонкий полиестер.",
  },
];

const services = [
  {
    title: "Порезка на Замовлення",
    image: folder("img/services/порізка.webp"),
    description:
      "Прецизійне різання термотрансферних стрічок і самоклеючих етикеток за індивідуальними розмірами та характеристиками. Обладнання з високою точністю різання до 0,01 мм.",
  },
  {
    title: "Технічна Підтримка",
    image: folder("img/services/підтримка.webp"),
    description:
      "Консультації щодо підбору оптимальних матеріалів і технологій під конкретні завдання. Підтримка у вирішенні технічних питань та оптимізації процесів.",
  },
  {
    title: "Сервісне Обслуговування",
    image: folder("img/services/обслуговування.webp"),
    description:
      "Регулярне обслуговування та ремонт обладнання. Гарантована безперебійна робота і продовжений термін служби.",
  },
  {
    title: "Доставка",
    image: folder("img/services/доставка.webp"),
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
