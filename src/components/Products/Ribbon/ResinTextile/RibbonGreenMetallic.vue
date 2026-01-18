<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="product-info-section">
    <div class="container">
      <h1 class="title">
        Повний Каталог Термотрансферних Ріббонів
        <span class="badge">RESIN-TEXTILE</span>
      </h1>
      <p class="description">
        Наш асортимент гарантує ідеальну друкування для будь-якого матеріалу та
        умов експлуатації. Використовуйте наше керівництво для вибору пасуючого
        типу.
      </p>

      <nav class="tabs">
        <TabsProduct v-model="store.currentTab" />
      </nav>

      <!-- Карточка продукту -->
      <div class="product-card">
        <div class="card-header">
          <h2 class="subtitle">
            RESIN-TEXTILE Green Metallic (Смола-Текстиль Зелений Металік) Ріббони
            <span class="badge wax">GREEN METALLIC</span>
          </h2>
        </div>

        <div class="card-content">
          <!-- Изображение -->
          <div class="image-container">
            <img
              v-for="img in detailedRibbons"
              :key="img.name"
              :src="img.imageUrl"
              :alt="img.title"
              class="product-image"
            />
          </div>

          <!-- Структурированная информация -->
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
          *Таблиця допоможе вам швидко підібрати Ріббон до типу етикетки. Для
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
store.currentTab = 'metallic-green' // Активний таб Metallic Green

// Груповання тексту для Metallic Green
const info = {
  description:
    'Ріббони Metallic Green (Зелений Металік) — це спеціалізовані смоляні Ріббони, що забезпечують благородний смарагдовий блиск. Вони ідеально підходять для товарів, де потрібно підкреслити натуральність, екологічність або ексклюзивність. Завдяки Resin-основі, відбиток залишається чітким і яскравим навіть при контакті з оліями, водою чи миючими засобами.',
  advantages: [
    "Благородний Смарагдовий Блиск: Створює ефект дорогого металізованого напилення.",
    "Стійкість до Агресивних Середовищ: Друк не боїться вологи, мастил та спиртових розчинів.",
    "Акцент на Екологічності: Колір асоціюється з натуральними продуктами та 'BIO' сегментом.",
    "Довговічність: Друк зберігає свій первинний металевий відблиск протягом усього терміну зберігання товару.",
  ],
  limitations: [
    "Вимагає точного налаштування швидкості друку для рівномірного перенесення пігменту.",
    "Найкраща адгезія досягається на синтетичних плівках (PP, PE, PET).",
    "Не рекомендується для використання на пористих матеріалах (матовий папір).",
  ],
  applications: [
    "Натуральна та органічна косметика (еко-бренди).",
    "Виробництво елітних сортів чаю та кави.",
    "Маркування органічних добрив та садового інвентарю преміум-класу.",
    "Святкове декорування кондитерських виробів.",
    "Дизайнерські етикетки для напоїв та сиропів.",
  ],
};

// Дані для таблиці Metallic Green
const detailedRibbons = ref([
  {
    id: 8,
    type: "metallic-green",
    title: "Зелений Металік Ріббони",
    imageUrl: folder("img/ribbon/green-metallic.webp"),
    fullDescription:
      "Преміальний кольоровий Ріббон на основі смоли з металізованим смарагдовим ефектом для ексклюзивного маркування.",
    compatibility: "Поліпропілен (ПП), Поліестер, глянцеві ламіновані поверхні.",
    resistance: "Висока (стійкість до стирання, вологи та хімічних впливів).",
    application:
      "Еко-брендування, преміальна упаковка, декоративне маркування.",
    color: [
      { name: "Зелений Металік", fill: "#008000" },
      { name: "Червоний Металік", fill: "#B22222" },
      { name: "Синій Металік", fill: "#0000FF" },
      { name: "Срібло", fill: "#C0C0C0" },
      { name: "Золото", fill: "#D4AF37" },
    ],
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

$accent-color: #008000;
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
