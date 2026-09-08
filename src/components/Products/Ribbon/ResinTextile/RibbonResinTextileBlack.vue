<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="product-info-section">
    <div class="container">
      <h1 class="title">
        Повний Каталог Термотрансферних Ріббонів
        <span class="badge">RESIN-TEXTILE</span>
      </h1>
      <p class="description">
        Наш асортимент гарантує ідеальний друк для будь-якого матеріалу та
        умов експлуатації. Використовуйте наше керівництво для вибору відповідного
        типу.
      </p>

      <nav class="tabs">
        <TabsProduct v-model="store.currentTab" />
      </nav>

      <!-- Карточка продукту -->
      <div class="product-card">
        <div class="card-header">
          <h2 class="subtitle">
            RESIN-TEXTILE Black (Смола Текстиль Чорний) Ріббони
            <span class="badge wax">BLACK</span>
          </h2>
        </div>

        <div class="card-content">
          <!-- Зображення -->
          <div class="image-container">
            <img
              v-for="img in detailedRibbons"
              :key="img.title"
              :src="img.imageUrl"
              :alt="img.title"
              class="product-image"
            />
          </div>

          <!-- Структурована інформація -->
          <div class="product-details">
            <h3 class="subtitle">🏷️ Опис Категорії:</h3>
            <p class="product-description">{{ info.description }}</p>

            <h3 class="subtitle">✅ Переваги:</h3>
            <ul class="spec-list">
              <li v-for="(advantage, index) in info.advantages" :key="index">
                {{ advantage }}
              </li>
            </ul>

            <h3 class="subtitle">⚠️ Обмеження та Стійкість:</h3>
            <ul class="spec-list">
              <li>
                <p class="subtitle">Висока стійкість. Друк стійкий до:</p>
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

      <!-- Таблиця сумісності -->
      <h3 class="subtitle">Таблиця Сумісності</h3>
      <div class="compatibility-table">
        <table class="responsive-table">
          <thead>
            <tr>
              <th>Тип Ріббону</th>
              <th>Сумісність</th>
              <th>Стійкість</th>
              <th>Застосування</th>
              <th>Колір</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ribbon in detailedRibbons" :key="ribbon.id">
              <td class="ribbon-type">{{ ribbon.title }}</td>
              <td>{{ ribbon.compatibility }}</td>
              <td>{{ ribbon.resistance }}</td>
              <td>{{ ribbon.application }}</td>
              <div class="row">
                <td
                  v-for="color in ribbon.color"
                  :key="color.name"
                  :style="{
                    background: color.fill,
                    color: '#FFFFFF' === color.fill ? '#000000' : '#FFFFFF',
                  }"
                >
                  {{ color.name }}
                </td>
              </div>
            </tr>
          </tbody>
        </table>
        <p class="note-text">
          *Таблиця допоможе вам швидко підібрати Ріббон до типу текстильної стрічки. Для
          отримання консультації зв'яжіться з нашим спеціалістом.*
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
import TabsProduct from "@/components/Tabs/TabsProduct.vue";

const router = useRouter();
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

// 1. Стан для активного таба
store.currentTab = "black"; // Активний таб Black

// Групування тексту для Black Resin-Textile
const info = {
  description:
    "Чорний Resin-Textile — це спеціалізований термотрансферний ріббон преміум-класу на основі високоякісних синтетичних смол. Він розроблений для друку на текстильних носіях (нейлон, сатин, поліестер) і забезпечує ультрачітке маркування штрих-кодів, розмірів та символів догляду. Зображення залишається стійким навіть після багаторазового прання, хімчистки та виварювання.",
  advantages: [
    "Максимальна стійкість: друк не тьмяніє і не змивається при пранні до 90°C та прасуванні.",
    "Висока чіткість: контрастний чорний колір детально промальовує навіть найдрібніші елементи та QR-коди.",
    "Хімічна стійкість: стійкість до промислової хімчистки, відбілювачів та миючих засобів.",
    "Сертифікована безпека: гіпоалергенне покриття, безпечне для дитячого одягу та натільної білизни.",
  ],
  limitations: [
    "Вимагає підбору оптимальної температури нагріву термоголовки залежно від щільності текстильної стрічки.",
    "Призначений виключно для текстильних носіїв та синтетики (не використовується для звичайного паперу).",
  ],
  applications: [
    "Вшивчики, розмірники та складики для легкого промислового одягу.",
    "Маркування білизни, дитячого одягу та постільних комплектів.",
    "Спецодяг та уніформа з підвищеними вимогами до прання.",
    "Маркування автомобільного текстилю, ременів та технічних тканин.",
  ],
};

// Дані для таблиці Black Resin-Textile
const detailedRibbons = ref([
  {
    id: 10,
    type: "black",
    title: "Чорний Resin Textile",
    imageUrl: folder("img/ribbon/black.webp"),
    fullDescription:
      "Спеціалізована смоляна стрічка чорного кольору для текстильних ярликів і care labels з максимальною стійкістю до прання.",
    compatibility: "Нейлон, сатин, поліестер, силіконові текстильні стрічки.",
    resistance: "Ультрависока (стійкість до прання 90°C, прасування, хімчистки).",
    application:
      "Текстильні ярлики, вшивчики для одягу, розмірники, маркування білизни.",
    color: [
      { name: "Чорний", fill: "#000000" },
      // { name: "Білий", fill: "#FFFFFF" },
      { name: "Червоний Металік", fill: "#B22222" },
      { name: "Синій Металік", fill: "#1E90FF" },
      { name: "Зелений Металік", fill: "#32CD32" },
      { name: "Золото", fill: "#FFD700" },
      { name: "Срібло", fill: "#C0C0C0" },
    ],
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
$accent-color: #1a1a1a;

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

.action-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: $accent-color;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: lighten($accent-color, 10%);
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
  color: #555;
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

.tabs {
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