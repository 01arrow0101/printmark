<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="product-info-section">
    <div class="container">
      <h1 class="title">
        Повний Каталог Самоклеючих Етикеток
        <span class="badge label thermo-eco">ТЕРМО ЕКО</span>
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
            Термоетикетки ЕКО (Thermo ECO)
            <span class="badge label-thermo-eco">НАЙБІЛЬШ ЕКОНОМІЧНІ</span>
          </h2>
        </div>

        <div class="card-content">
          <div class="image-container">
            <img
              v-for="img in detailedLabels_thermo_eco"
              :key="img.name"
              :src="img.imageUrl"
              :alt="img.title"
              class="product-image"
            />
          </div>

          <div class="product-details">
            <h3 class="subtitle">🏷️ Опис Категорії:</h3>
            <p class="product-description">{{ info_thermo_eco.description }}</p>

            <h3 class="subtitle">✅ Переваги:</h3>
            <ul class="spec-list">
              <li
                v-for="(advantage, index) in info_thermo_eco.advantages"
                :key="index"
              >
                {{ advantage }}
              </li>
            </ul>

            <h3 class="subtitle">⚠️ Обмеження та Умови Експлуатації:</h3>
            <ul class="spec-list">
              <li
                v-for="(limitation, index) in info_thermo_eco.limitations"
                :key="index"
              >
                {{ limitation }}
              </li>
            </ul>

            <h3 class="subtitle">🎯 Застосування:</h3>
            <ul class="spec-list">
              <li
                v-for="(application, index) in info_thermo_eco.applications"
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
              <th>Рекомендований Ріббон</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="label in detailedLabels_thermo_eco" :key="label.type">
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
store.currentTab = "thermo-eco"; // Встановлюємо цей таб як активний


// Групування тексту для Термоетикеток ЕКО
const info_thermo_eco = {
  description:
    "Термо-ЕКО – це найекономніший варіант, що представляє собою одношаровий термопапір без захисного покриття. Друк відбувається прямим термодруком (без Ріббона). Ці етикетки ідеальні для маркування товарів з дуже коротким терміном реалізації в сухих та чистих умовах.",
  advantages: [
    "Мінімальна Вартість: Найнижча ціна на ринку.",
    "Простота Друку: Не вимагають використання Ріббона (прямий термодрук).",
    "Висока Швидкість: Дозволяють швидко маркувати великі обсяги товару.",
  ],
  limitations: [
    "Дуже чутливі до вологи та конденсату (пляма чорніє).",
    "Чутливі до жирів та олій (зображення зникає).",
    "Низька стійкість до механічного тертя та сонячного світла.",
  ],
  applications: [
    "Продукти з коротким терміном реалізації (хліб, свіжі овочі).",
    "Вагові етикетки у сухих відділах супермаркетів.",
    "Квитки, чеки та тимчасові ярлики (де довговічність не критична).",
  ],
};

// Дані для таблиці
const detailedLabels_thermo_eco = ref([
  {
    type: "thermo-eco",
    title: "Термоетикетки ЕКО",
    imageUrl: folder("label/ThermoEco.png"),
    material: "Термопапір (ЕКО)",
    adhesive: "Стандартний Акриловий (Permanent)",
    resistance: "Низька (лише для сухих, чистих умов).",
    recommendedRibbon: "НЕ ПОТРІБЕН (прямий термодрук)",
  },
]);
</script>

<style lang="scss" scoped>
/* УВАГА: Припускаємо, що у вашому main.scss визначені змінні $accent-color */
$accent-color: #007bff; // Синій
$eco-color: #f39c12; // Помаранчевий (як колір економії/уваги)

.row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
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
  background-color: $accent-color;
  color: white;

  &.thermo-eco,
  &.label-thermo-eco {
    background-color: $eco-color;
  }
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
  color: $eco-color;
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
  color: $eco-color;
}

.note-text {
  color: $eco-color;
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
    background-color: $eco-color;
    color: white;
    border-color: $eco-color;
    font-weight: 700;
  }
}
</style>
