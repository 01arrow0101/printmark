<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="product-info-section">
    <div class="container">
      <h1 class="title">
        Повний Каталог Самоклеючих Етикеток
        <span class="badge label">ПАПІР</span>
      </h1>
      <p class="description">
        Наш асортимент включає всі типи матеріалів та клею для будь-яких умов
        експлуатації. Використовуйте наше керівництво для вибору пасуючого типу.
      </p>

      <nav class="label-tabs">
        <button
          class="tab-item"
          :class="{ active: store.currentTab === 'thermo-eco' }"
          @click="store.setTab('thermo-eco')"
        >
          Термо ЕКО
        </button>
        <button
          class="tab-item"
          :class="{ active: store.currentTab === 'thermo-top' }"
          @click="store.setTab('thermo-top')"
        >
          Термо ТОП
        </button>
        <button
          class="tab-item"
          :class="{ active: store.currentTab === 'semi-gloss' }"
          @click="store.setTab('semi-gloss')"
        >
          Напівглянець
        </button>
        <button
          class="tab-item"
          :class="{ active: store.currentTab === 'polypropylene' }"
          @click="store.setTab('polypropylene')"
        >
          Поліпропілен
        </button>
      </nav>

      <div class="product-card">
        <div class="card-header">
          <h2 class="subtitle">
            Напівглянцевий Папір (Semi-Gloss)
            <span class="badge label-paper">ПАПІР / GLOSS</span>
          </h2>
        </div>

        <div class="card-content">
          <div class="image-container">
            <img
              v-for="img in detailedLabels"
              :key="img.name"
              :src="img.imageUrl"
              :alt="img.title"
              class="product-image"
            />
          </div>

          <div class="product-details">
            <h3 class="subtitle">🏷️ Опис Категорії:</h3>
            <p class="product-description">{{ info.description }}</p>

            <h3 class="subtitle">✅ Переваги:</h3>
            <ul class="spec-list">
              <li v-for="(advantage, index) in info.advantages" :key="index">
                {{ advantage }}
              </li>
            </ul>

            <h3 class="subtitle">⚠️ Рекомендований Риббон та Стійкість:</h3>
            <ul class="spec-list">
              <li>
                <p class="subtitle">"Рекомендований риббон:",</p>
              </li>
              <li v-for="(limitation, index) in info.limitations" :key="index">
                {{ limitation }}
              </li>
            </ul>

            <h3 class="subtitle">🎯 Застосування:</h3>
            <ul class="spec-list">
              <li
                v-for="(application, index) in info.applications"
                :key="index"
              >
                {{ application }}
              </li>
            </ul>

            <appButton @click="router.push('/contacts')">
              Замовити зразки та консультацію
            </appButton>
          </div>
        </div>
      </div>

      <h3 class="subtitle">Зведена Таблиця Характеристик</h3>
      <div class="compatibility-table">
        <table class="responsive-table">
          <thead>
            <tr>
              <th>Тип Етикетки</th>
              <th>Матеріал</th>
              <th>Клей</th>
              <th>Стійкість</th>
              <th>Рекомендований Риббон</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="label in detailedLabels" :key="label.id">
              <td class="ribbon-type">{{ label.title }}</td>
              <td>{{ label.material }}</td>
              <td>{{ label.adhesive }}</td>
              <td>{{ label.resistance }}</td>
              <td>{{ label.recommendedRibbon }}</td>
            </tr>
          </tbody>
        </table>
        <p class="note-text">
          *Таблиця допоможе вам швидко підібрати тип етикетки до умов
          експлуатації. Для отримання консультації зв'яжіться з нашим
          спеціалістом.*
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import { ref } from "vue";
import ButtonBack from "@/UI/ButtonBack.vue";
import appButton from "@/components/Button/appButton.vue";
const router = useRouter();
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

// 1. Стан для активного таба
store.currentTab = "semi-gloss"; // Встановлюємо цей таб як активни

// Груповання тексту для Напівглянцевого Паперу
const info = {
  description:
    "Напівглянцевий папір є одним з найбільш поширених матеріалів для етикеток. Він забезпечує чудову якість друку (як термотрансферного, так і флексографічного) і естетичний вигляд завдяки гладкій, злегка глянцевій поверхні. Це ідеальний вибір для маркування у сухому, чистому середовищі.",
  advantages: [
    "Висока якість друку: Відмінно підходить для графіки та логотипів.",
    "Естетичний вигляд: Гладка поверхня додає продукту професійного вигляду.",
    "Універсальність клею: Доступний зі стандартним акриловим або посиленим клеєм.",
    "Економічність: Значно дешевше, ніж синтетичні матеріали.",
  ],
  limitations: [
    "Для найкращого результату використовуйте WAX (Восковий) риббон.",
    "Для підвищення стійкості до змащування можна використовувати WAX/RESIN риббон.",
    "НЕ підходить для прямого контакту з водою, оліями чи хімічними речовинами.",
  ],
  applications: [
    "Маркування споживчих товарів та упаковки.",
    "Цінники та етикетки для роздрібної торгівлі.",
    "Етикетки для логістики та відстеження запасів у сухому складі.",
    "Інформаційні етикетки на коробках та палетах.",
  ],
};

// Данные для таблиці
const detailedLabels = ref([
  {
    type: "semi-gloss-paper",
    title: "Напівглянцевий Папір",
    imageUrl: folder("label/SemiGloss.png"), // Припускаємо, що у вас є зображення
    material: "Папір (Semi-Gloss)",
    adhesive: "Стандартний Акриловий (Permanent)",
    resistance: "Низька (лише для сухих умов, чутливий до вологи).",
    recommendedRibbon: "WAX, WAX/RESIN",
  },
  // Тут можуть бути інші типи етикеток: ТермоТОП, Поліпропілен, Поліестер
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

$accent-color: #3498db;
// Додамо специфічні стилі для значків етикеток, якщо $accent-color синій
.badge.label {
  background-color: $accent-color; /* Зелений для етикеток */
}

.badge.label-paper {
  background-color: accent-color; /* Синій для паперу */
}

.product-info-section {
  padding: 40px 0;
}

.title {
  color: #2c3e50;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.product-card {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;
}

.card-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.subtitle {
  color: #333;
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;
}

.badge {
  margin-left: 15px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  background-color: $accent-color; /* Використовуйте $accent-color для загального вигляду */
  color: white;
}

.card-content {
  display: flex;
  gap: 30px;
}

.image-container {
  flex: 1;
  min-width: 250px;
  height: auto;
  border-radius: 6px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  flex: 2;
}

.product-description {
  margin-bottom: 15px;
  line-height: 1.6;
}

.spec-list {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 20px;
  color: $accent-color;
}

.compatibility-table {
  border: 1px dashed #ccc;
  padding: 20px;
  border-radius: 6px;
  background-color: #f9f9f9;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.responsive-table thead {
  background-color: #f5f5f5;
}

.responsive-table th,
.responsive-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.responsive-table th {
  font-weight: 600;
  color: #2c3e50;
}

.responsive-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.responsive-table tbody tr:hover {
  background-color: #f1f1f1;
}

.ribbon-type {
  font-weight: 500;
  color: $accent-color;
}

.note-text {
  color: $accent-color;
  font-size: 16px;
}

@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
  }

  .image-container {
    height: 150px;
  }

  .responsive-table {
    display: block;
    overflow-x: auto;
  }
}

.label-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.tab-item {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: #eee;
    color: $accent-color;
  }

  &.active {
    background-color: $accent-color;
    color: white;
    border-color: $accent-color;
    font-weight: 700;
  }
}
</style>
