<template>
  <div v-if="route.path === '/products/ribbons'" class="ribbon-info-page">
    <ButtonBack @action="router.go(-1)" />
    <section class="product-info-section">
      <div class="container">
        <h1 class="title">Повний Каталог Термотрансферних Риббонів</h1>
        <p class="description">
          Наш асортимент гарантує ідеальну друкування для будь-якого матеріалу
          та умов експлуатації. Використовуйте наше керівництво для вибору
          пасуючого типу.
        </p>

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
                <th>Тип Риббону</th>
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
            *Таблиця допоможе вам швидко підібрати риббон до типу етикетки. Для
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
import appButton from "../Button/appButton.vue";
const router = useRouter();
const route = useRoute();
const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;

const detailedRibbons = ref([
  {
    id: 1,
    type: "wax",
    title: "Воскові Риббони",
    imageUrl: folder("ribbon/waxGreen.webp"),
    fullDescription:
      "Економічний і найпопулярніший варіант для друкування на паперових носіях. Забезпечує високу швидкість друкування і відмінний контраст.",
    compatibility: "Папір (матовий, напівглянцевий, термотрансферний).",
    resistance: "Низька (вразливий до вологи, тертя і спирту).",
    application: "Маркування товарів у сухому середовищі, логістика, цінники.",
    path: "/products/ribbons/wax",
  },
  {
    id: 2,
    type: "wax-resin",
    title: "Воск-Смола Риббони",
    imageUrl: folder("ribbon/wax.webp"),
    fullDescription:
      "Універсальне рішення. Через додавання смоли, друк стає значно стійкішим до змащення і пошкоджень.",
    compatibility: "Папір (глянцевий, синтетичні етикетки).",
    resistance: "Середня (стійкий до помірного тертя і вологи).",
    application:
      "Транспортна логістика, фармацевтика, маркування продукції з тривалим строком зберігання.",
    path: "/products/ribbons/wax-resin",
  },
  {
    id: 3,
    type: "resin",
    title: "Смоляні Риббони",
    imageUrl: folder("ribbon/resin.webp"),
    fullDescription:
      "Максимально стійкі риббони, необхідні для маркування в екстремальних умовах. Друк не стирається навіть при впливі розчинників і високих температур.",
    compatibility: "Синтетичні матеріали (ПП, ПЕТ, ПВХ, нейлон).",
    resistance: "Висока (стійкий до агресивної хімії, температури, стирання).",
    application:
      "Автомобільна промисловість, хімічне виробництво, електроніка.",
    path: "/products/ribbons/resin",
  },
  {
    id: 4,
    type: "resin-textile",
    title: "Смоляні Риббони для Текстилю",
    imageUrl: folder("ribbon/resin-textile.webp"),
    fullDescription:
      "Спеціалізований склад для друку на текстильних стрічках. Зображення витримує багаторазове прання, хімчистку та прасування, зберігаючи чіткість і насиченість.",
    compatibility: "Текстильні стрічки (нейлон, сатин, поліестер).",
    resistance:
      "Екстремальна (стійкість до гарячої води, миючих засобів та пари).",
    application:
      "Маркування одягу, вшивні ярлики, складники для текстильних виробів.",
    path: "/products/ribbons/resin-textile",
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
