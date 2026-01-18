<template>
  <div
    v-if="route.path === '/products/ribbons/resin-textile'"
    class="ribbon-info-page"
  >
    <ButtonBack @action="router.go(-1)" />

    <section class="product-info-section">
      <div class="container">
        <h1 class="title">Повний Каталог Термотрансферних Ріббонів</h1>
        <p class="description">
          Наш асортимент гарантує ідеальну друкування для будь-якого матеріалу
          та умов експлуатації. Використовуйте наше керівництво для вибору
          пасуючого типу.
        </p>

        <nav class="tabs">
          <TabsProduct v-model="store.currentTab" />
        </nav>

        <div
          v-for="ribbon in detailedRibbons"
          :key="ribbon.id"
          class="product-card"
        >
          <div class="card-header">
            <h2 class="subtitle">
              {{ ribbon.title }}
              <span :class="['badge', ribbon.type]">{{
                ribbon.type.toUpperCase()
              }}</span>
            </h2>
          </div>

          <div class="card-content">
            <div class="image-container">
              <img
                :src="ribbon.imageUrl"
                :alt="ribbon.title"
                class="product-image"
              />
            </div>
            <div class="product-details">
              <p class="product-description">{{ ribbon.fullDescription }}</p>
              <ul class="spec-list">
                <li>**Сумісність:** {{ ribbon.compatibility }}</li>
                <li>**Стійкість:** {{ ribbon.resistance }}</li>
                <li>**Застосування:** {{ ribbon.application }}</li>
              </ul>
              <div class="btns">
                <appButton @click="router.push('/contacts')"
                  >Замовити зразки та консультацію</appButton
                >
                <appButton @click="router.push(ribbon.path)"
                  >Дізнатися більше</appButton
                >
              </div>
            </div>
          </div>
        </div>

        <h3 class="subtitle">Таблиця Сумісності</h3>
        <div class="compatibility-table">
          <table class="responsive-table">
            <thead>
              <tr>
                <th>Тип Ріббону</th>
                <th>Сумісність</th>
                <th>Стійкість</th>
                <th>Застосування</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ribbon in detailedRibbons" :key="ribbon.id">
                <td class="ribbon-type">{{ ribbon.title }}</td>
                <td>{{ ribbon.compatibility }}</td>
                <td>{{ ribbon.resistance }}</td>
                <td>{{ ribbon.application }}</td>
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
  </div>
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import { ref } from "vue";
import ButtonBack from "@/UI/ButtonBack.vue";
import appButton from "/src/components/Button/appButton.vue";
import TabsProduct from "@/components/Tabs/TabsProduct.vue";
const router = useRouter();
const route = useRoute();
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

// 1. Стан для активного таба
store.currentTab = "resin-textile"; // Встановлюємо цей таб як активний

const detailedRibbons = ref([
  {
    id: 5,
    type: "silver",
    title: "Срібні Ріббони (Silver)",
    imageUrl: folder("img/ribbon/silver.webp"),
    fullDescription:
      "Декоративні Ріббони, що створюють ефектний металевий відблиск. Ідеально підходять для преміального маркування та створення унікального дизайну пакування.",
    compatibility: "Глянцевий папір, поліпропілен, поліестер.",
    resistance: "Середня/Висока (стійкий до вицвітання та легкого тертя).",
    application:
      "Парфумерія, преміальна косметика, подарункове пакування, сертифікація.",
    path: "/products/ribbons/resin-textile/silver",
  },
  {
    id: 6,
    type: "gold",
    title: "Золоті Ріббони (Gold)",
    imageUrl: folder("img/ribbon/gold.webp"),
    fullDescription:
      "Надають етикетці розкішного вигляду з яскравим золотим блиском. Часто використовуються для підкреслення високого статусу продукту.",
    compatibility: "Глянцевий папір, синтетичні матеріали (ПП, ПЕ).",
    resistance: "Середня/Висока (стійкий до УФ-випромінювання та вологи).",
    application: "Виноробство, ювелірні вироби, брендування елітної продукції.",
    path: "/products/ribbons/resin-textile/gold",
  },
  {
    id: 7,
    type: "metallic-blue",
    title: "Металік Синій",
    imageUrl: folder("img/ribbon/blue-metallic.webp"),
    fullDescription:
      "Кольоровий Ріббон з металізованим ефектом. Поєднує в собі насичений синій колір та характерний блиск металу.",
    compatibility: "Паперові етикетки (напівглянець), плівкові матеріали.",
    resistance: "Середня (стійкий до змазування).",
    application:
      "Дизайнерська етикетка, рекламна продукція, кольорове маркування.",
    path: "/products/ribbons/resin-textile/blue-metallic",
  },
  {
    id: 8,
    type: "metallic-green",
    title: "Металік Зелений",
    imageUrl: folder("img/ribbon/green-metallic.webp"),
    fullDescription:
      "Металізований Ріббон яскраво-зеленого кольору. Дозволяє виділити товар на полиці та захистити його від підробок за рахунок специфічного кольору.",
    compatibility: "Папір, полімери, деякі види картону.",
    resistance: "Висока чіткість друку та стійкість до зовнішнього впливу.",
    application: "Екологічні товари, святкове оформлення, захисні наклейки.",
    path: "/products/ribbons/resin-textile/green-metallic",
  },
  {
    id: 9,
    type: "metallic-red",
    title: "Металік Червоний",
    imageUrl: folder("img/ribbon/red-metallic.webp"),
    fullDescription:
      "Привертає увагу насиченим червоним блиском. Відмінно підходить для акційних пропозицій та маркування особливих партій товарів.",
    compatibility: "Широкий спектр матеріалів: від паперу до синтетики.",
    resistance: "Стійкий до механічних пошкоджень та перепадів температур.",
    application: "Акційні наклейки 'Sale', харчова промисловість, логістика.",
    path: "/products/ribbons/resin-textile/red-metallic",
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.btns {
  display: flex;
  gap: 15px;
  margin-top: 20px;
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
  height: 200px;
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
</style>
