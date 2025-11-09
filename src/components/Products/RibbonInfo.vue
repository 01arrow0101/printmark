<template>
  <section class="product-info-section">
    <div class="container">
      <h1 class="section-title">Повний Каталог Термотрансферних Риббонів</h1>
      <p class="section-description">
        Наш асортимент гарантує ідеальну друкування для будь-якого матеріалу та
        умов експлуатації. Використовуйте наше керівництво для вибору пасуючого
        типу.
      </p>

      <div
        v-for="ribbon in detailedRibbons"
        :key="ribbon.id"
        class="product-card"
      >
        <div class="card-header">
          <h2 class="product-title">
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
            <a href="#" class="action-button"
              >Замовити зразки та консультацію</a
            >
          </div>
        </div>
      </div>

      <h3 class="table-title">Таблиця Сумісності</h3>
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
</template>

<script setup>
import { ref } from "vue";

const path = `${import.meta.env.BASE_URL}`;

const detailedRibbons = ref([
  {
    id: 1,
    type: "wax",
    title: "Воскові Риббони",
    imageUrl: `${path}/img/ribbon/wax.png`,
    fullDescription:
      "Економічний і найпопулярніший варіант для друкування на паперових носіях. Забезпечує високу швидкість друкування і відмінний контраст.",
    compatibility: "Папір (матовий, напівглянцевий, термотрансферний).",
    resistance: "Низька (вразливий до вологи, тертя і спирту).",
    application: "Маркування товарів у сухому середовищі, логістика, цінники.",
  },
  {
    id: 2,
    type: "wax-resin",
    title: "Воск-Смола Риббони",
    imageUrl: `${path}` + "/img/ribbon/wax-resin.png",
    fullDescription:
      "Універсальне рішення. Через додавання смоли, друк стає значно стійкішим до змащення і пошкоджень.",
    compatibility: "Папір (глянцевий, синтетичні етикетки).",
    resistance: "Середня (стійкий до помірного тертя і вологи).",
    application:
      "Транспортна логістика, фармацевтика, маркування продукції з тривалим строком зберігання.",
  },
  {
    id: 3,
    type: "resin",
    title: "Смоляні Риббони",
    imageUrl: `${path}` + "/img/ribbon/resin.png",
    fullDescription:
      "Максимально стійкі риббони, необхідні для маркування в екстремальних умовах. Друк не стирається навіть при впливі розчинників і високих температур.",
    compatibility: "Синтетичні матеріали (ПП, ПЕТ, ПВХ, нейлон).",
    resistance: "Висока (стійкий до агресивної хімії, температури, стирання).",
    application:
      "Автомобільна промисловість, хімічне виробництво, електроніка.",
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.product-info-section {
  padding: 40px 0;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.section-description {
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

.product-title {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
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

.table-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #2c3e50;
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
  color: #666;
  font-size: 14px;
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
