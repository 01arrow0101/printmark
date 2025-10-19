<template>
  <section class="product-section">
    <div class="container">
      <h3 class="section-title">НАША ПРОДУКЦИЯ</h3>

      <div class="product-content-wrapper">
        
        <div class="ribbon-block">
          <div class="ribbon-header">
            <h4 class="product-group-title">РИББОНЫ (Термотрансферная Лента)</h4>
          </div>

          <div class="ribbon-cards-wrapper">
            <div 
              v-for="ribbon in ribbons" 
              :key="ribbon.id" 
              class="ribbon-card"
            >
              <div :class="['ribbon-visual', `ribbon-${ribbon.type}`]">
                <img :src="ribbon.imageUrl" alt="Риббон" class="ribbon-img">
              </div>

              <h5 class="ribbon-title">{{ ribbon.title }}</h5>
              <p class="ribbon-description">{{ ribbon.description }}</p>
            </div>
          </div>
        </div>

        <div class="label-block">
          <h4 class="product-group-title label-title-style">САМОКЛЕЯЩИЕСЯ ЭТИКЕТКИ</h4>
          
          <div class="label-info-item">
            <div class="icon-header">
              <span class="icon-placeholder">📄</span>
              <h5 class="label-info-title">ВИДЫ МАТЕРИАЛ</h5>
            </div>
            <ul class="label-list">
              <li v-for="(item, index) in labelMaterials" :key="index">{{ item }}</li>
            </ul>
          </div>

          <div class="label-info-item">
            <div class="icon-header">
              <span class="icon-placeholder">🖨️</span>
              <h5 class="label-info-title">УСЛУГИ</h5>
            </div>
            <ul class="label-list">
              <li v-for="(item, index) in labelServices" :key="index">{{ item }}</li>
            </ul>
          </div>
          
          <div class="label-info-item">
            <div class="icon-header">
              <span class="icon-placeholder">🏢</span>
              <h5 class="label-info-title">СПЕЦИАЛИЗАЦИЯ</h5>
            </div>
            <p class="label-specialization">{{ labelSpecialization }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// 1. Данные для секции Риббонов (имитация изображений)
const ribbons = ref([
  {
    id: 1,
    type: 'wax',
    imageUrl: 'path/to/wax-ribbon.jpg', // Заменить на реальные пути
    title: 'WAX (ВОСК)',
    description: 'Экономичен, для бумажных этикеток.'
  },
  {
    id: 2,
    type: 'wax-resin',
    imageUrl: 'path/to/wax-resin-ribbon.jpg',
    title: 'WAX/RESIN (ВОСК/СМОЛА)',
    description: 'Универсален, повышенная стойкость.'
  },
  {
    id: 3,
    type: 'resin',
    imageUrl: 'path/to/resin-ribbon.jpg',
    title: 'RESIN (СМОЛА)',
    description: 'Максимальная стойкость к химии.'
  }
]);

// 2. Данные для секции Этикеток
const labelMaterials = ref([
  'Бумажные (ТермоТОП, Полуглянец)',
  'Синтетические (ПП, ПЭТ)',
  'Текстильные, Пломбировочные',
]);

const labelServices = ref([
  'Флексопечать до 6 цветов',
  'Пре-принт и Чистые Этикетки',
]);

const labelSpecialization = ref(
  'Для пищевой, химпрома, логистики'
);
</script>

<style scoped>
/* ---------------------------------------------------- */
/* БАЗОВЫЕ СТИЛИ (ПОДГОНКА ПОД МАКЕТ) */
/* ---------------------------------------------------- */

.product-section {
    padding: 60px 0;
    /* Фон белый или прозрачный, чтобы контрастировать с Hero */
    background-color: #fff; 
    font-family: 'Inter', sans-serif; /* Основной шрифт */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #333;
    text-align: left; /* Как на макете */
    margin-bottom: 40px;
    text-transform: uppercase;
}

/* ---------------------------------------------------- */
/* ОБЩАЯ СТРУКТУРА (FLEX/GRID) */
/* ---------------------------------------------------- */
.product-content-wrapper {
    display: flex;
    gap: 40px;
}

/* Блок Риббонов занимает большую часть ширины */
.ribbon-block {
    flex: 3; /* Примерно 60-65% ширины */
}

/* Блок Этикеток занимает меньшую часть ширины */
.label-block {
    flex: 2; /* Примерно 35-40% ширины */
    padding-left: 20px;
    /* Визуальный разделитель с линией на макете */
    border-left: 1px solid #ddd; 
}

/* ---------------------------------------------------- */
/* СТИЛИ ДЛЯ РИББОНОВ */
/* ---------------------------------------------------- */
.product-group-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.ribbon-cards-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.ribbon-card {
    flex: 1;
    text-align: center;
}

.ribbon-visual {
    /* Имитация области изображения */
    width: 100%;
    height: 120px; 
    background-color: #f0f0f0;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ribbon-img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    /* На макете риббоны выглядят как рулоны */
}

.ribbon-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.ribbon-description {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #666;
    line-height: 1.4;
    min-height: 40px; /* Для выравнивания по высоте */
}

/* ---------------------------------------------------- */
/* СТИЛИ ДЛЯ ЭТИКЕТОК */
/* ---------------------------------------------------- */
.label-title-style {
    margin-bottom: 10px; /* Меньший отступ, как на макете */
}

.label-info-item {
    margin-bottom: 20px;
    padding-top: 15px;
}

.icon-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.icon-placeholder {
    font-size: 20px;
    margin-right: 10px;
    color: #004d40; /* Фирменный цвет для иконок */
}

.label-info-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    text-transform: uppercase;
    margin: 0;
}

.label-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.label-list li, .label-specialization {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #555;
    line-height: 1.6;
    padding-left: 10px;
}

.label-list li::before {
    content: '•';
    color: #004d40; 
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

/* Адаптивность */
@media (max-width: 900px) {
    .product-content-wrapper {
        flex-direction: column;
    }
    .label-block {
        border-left: none;
        border-top: 1px solid #ddd;
        padding-left: 0;
        padding-top: 20px;
    }
}
</style>