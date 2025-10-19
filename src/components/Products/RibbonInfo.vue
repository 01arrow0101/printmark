<template>
  <section class="full-info-section ribbons-page">
    <div class="container">
      <h1 class="page-title">Полный Каталог Термотрансферных Риббонов</h1>
      <p class="page-intro">Наш ассортимент гарантирует идеальную печать для любого материала и условий эксплуатации. Используйте наше руководство для выбора подходящего типа.</p>

      <div v-for="ribbon in detailedRibbons" :key="ribbon.id" class="ribbon-detail-block">
        <div class="ribbon-detail-header">
          <h2 class="ribbon-type-title">{{ ribbon.title }} <span :class="['type-badge', ribbon.type]">{{ ribbon.type.toUpperCase() }}</span></h2>
        </div>
        
        <div class="content-wrapper">
          <div class="image-placeholder">
            <img :src="ribbon.imageUrl" :alt="ribbon.title">
          </div>
          <div class="description-text">
            <p>{{ ribbon.fullDescription }}</p>
            <ul>
              <li>**Совместимость:** {{ ribbon.compatibility }}</li>
              <li>**Стойкость:** {{ ribbon.resistance }}</li>
              <li>**Применение:** {{ ribbon.application }}</li>
            </ul>
            <a href="#" class="btn-cta">Заказать образцы и консультацию</a>
          </div>
        </div>
      </div>

      <h3 class="table-title">Таблица Совместимости</h3>
      <div class="compatibility-table">
          <p>
            *Таблица поможет вам быстро подобрать риббон к типу этикетки. Для получения консультации свяжитесь с нашим специалистом.*
          </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const detailedRibbons = ref([
  {
    id: 1,
    type: 'wax',
    title: 'Восковые Риббоны',
    imageUrl: 'path/to/wax-ribbon-detailed.jpg',
    fullDescription: 'Экономичный и самый популярный вариант для печати на бумажных носителях. Обеспечивает высокую скорость печати и отличный контраст.',
    compatibility: 'Бумага (матовая, полуглянец, термотрансферная).',
    resistance: 'Низкая (чувствителен к влаге, трению и спирту).',
    application: 'Маркировка товаров в сухой среде, логистика, ценники.'
  },
  {
    id: 2,
    type: 'wax-resin',
    title: 'Воск-Смола Риббоны',
    imageUrl: 'path/to/wax-resin-ribbon-detailed.jpg',
    fullDescription: 'Универсальное решение. Благодаря добавлению смолы, отпечаток становится значительно более стойким к смазыванию и царапинам.',
    compatibility: 'Бумага (глянцевая, синтетические этикетки).',
    resistance: 'Средняя (устойчив к умеренному трению и влаге).',
    application: 'Транспортная логистика, фармацевтика, маркировка продукции с длительным сроком хранения.'
  },
  {
    id: 3,
    type: 'resin',
    title: 'Смоляные Риббоны',
    imageUrl: 'path/to/resin-ribbon-detailed.jpg',
    fullDescription: 'Максимально стойкие риббоны, необходимые для маркировки в экстремальных условиях. Отпечаток не стирается даже при воздействии растворителей и высоких температур.',
    compatibility: 'Синтетические материалы (ПП, ПЭТ, ПВХ, нейлон).',
    resistance: 'Высокая (устойчив к агрессивной химии, температуре, стирке).',
    application: 'Автомобильная промышленность, химическое производство, электроника.'
  }
]);
</script>

<style scoped>
/* Стили из предыдущего ответа для RibbonsFullInfo.vue */
.full-info-section { padding: 50px 0; }
.page-title { font-size: 32px; font-weight: 700; color: #004d40; margin-bottom: 10px; }
.page-intro { font-size: 16px; color: #555; margin-bottom: 40px; }
.ribbon-detail-block { margin-bottom: 50px; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
.ribbon-detail-header { border-bottom: 2px solid #004d40; padding-bottom: 10px; margin-bottom: 20px; }
.ribbon-type-title { font-size: 24px; font-weight: 600; color: #333; display: flex; align-items: center; }
.type-badge { background-color: #004d40; color: white; padding: 4px 10px; border-radius: 4px; font-size: 14px; margin-left: 15px; }
.content-wrapper { display: flex; gap: 30px; }
.image-placeholder { flex: 1; min-width: 250px; height: 200px; background-color: #e0f2f1; border-radius: 6px; overflow: hidden; }
.image-placeholder img { width: 100%; height: 100%; object-fit: cover; }
.description-text { flex: 2; }
.description-text p { margin-bottom: 15px; line-height: 1.6; }
.description-text ul { list-style: disc; margin-left: 20px; }
.btn-cta { display: inline-block; padding: 10px 20px; background-color: #004d40; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; transition: background-color 0.3s; }
.btn-cta:hover { background-color: #00796b; }
.table-title { font-size: 22px; font-weight: 600; margin-top: 40px; margin-bottom: 15px; }
.compatibility-table { border: 1px dashed #ccc; padding: 20px; border-radius: 6px; }
@media (max-width: 768px) {
  .content-wrapper { flex-direction: column; }
  .image-placeholder { height: 150px; }
}
</style>