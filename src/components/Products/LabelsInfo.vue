<template>
  <section class="full-info-section labels-page">
    <div class="container">
      <h1 class="page-title">Самоклеящиеся Этикетки для Термотрансферной Печати</h1>
      <p class="page-intro">Мы — ваш эксперт в производстве чистых и пре-принт рулонных этикеток, идеально адаптированных для работы с вашими термотрансферными принтерами и нашими риббонами.</p>

      <div class="materials-block">
        <h2 class="block-title">Материалы: Выбор для Любых Условий</h2>
        <div class="material-grid">
          
          <div v-for="material in labelMaterials" :key="material.type" class="material-card">
            <div class="material-icon">{{ material.icon }}</div>
            <h3>{{ material.type }}</h3>
            <p>{{ material.description }}</p>
            <ul class="application-list">
              <li>**Применение:** {{ material.application }}</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="services-block">
        <h2 class="block-title">Наши Услуги и Комплексное Снабжение</h2>
        <ul class="services-list">
          <li v-for="service in services" :key="service.title">
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </li>
        </ul>
      </div>

      <div class="cta-form-block">
        <div class="form-placeholder">
          <h3>Рассчитать Стоимость Тиража</h3>
          <p>Заполните форму, и мы оперативно подготовим точный расчет вашего заказа на рулонные этикетки. Гарантируем совместимость с вашим принтером.</p>
          </div>
        <div class="image-placeholder">
           <!-- <img src="path/to/clean-label-production.jpg" alt="Производство этикеток"> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const labelMaterials = ref([
  {
    type: 'Бумажные (ТермоТОП/Полуглянец)',
    icon: '🗞️',
    description: 'Экономичная основа, требующая защиты от влаги и трения. Идеально для риббонов WAX.',
    application: 'Логистика, складской учет, сухие продукты питания.'
  },
  {
    type: 'Синтетические (ПП/ПЭТ)',
    icon: '💧',
    description: 'Не рвутся, устойчивы к воде, жиру и химикатам. Требуют риббонов RESIN или WAX/RESIN.',
    application: 'Косметика, бытовая химия, маркировка электроники.'
  },
  {
    type: 'Специальные (Пломбы/Текстиль)',
    icon: '🔒',
    description: 'Для специфических задач, таких как контроль вскрытия (VOID) или маркировка одежды.',
    application: 'Гарантийный контроль, инвентаризация, легкая промышленность.'
  }
]);

// Скорректировано: убрана флексопечать
const services = ref([
  {
    title: 'Чистые Этикетки на Заказ',
    description: 'Производство рулонов всех стандартных и нестандартных размеров, с точной намоткой и диаметром втулки под любую модель вашего принтера.'
  },
  {
    title: 'Пре-принт (Монохромный/Простой)',
    description: 'Предварительное нанесение постоянной информации (логотип, рамки) для экономии вашего времени. Вы самостоятельно допечатываете переменную информацию.'
  },
  {
    title: 'Контроль Качества Подложки',
    description: 'Мы гарантируем идеальную нарезку и отсутствие дефектов, исключающих застревание и повреждение термоголовок вашего оборудования.'
  }
]);
</script>

<style scoped>
/* Стили из предыдущего ответа для LabelsFullInfo.vue */
.materials-block, .services-block { margin-bottom: 50px; }
.block-title { font-size: 26px; font-weight: 600; color: #004d40; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
.material-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.material-card { background-color: #f8f8f8; padding: 25px; border-radius: 8px; }
.material-icon { font-size: 30px; margin-bottom: 10px; }
.material-card h3 { font-size: 18px; font-weight: 600; color: #333; margin-bottom: 8px; }
.material-card p { font-size: 15px; color: #666; margin-bottom: 10px; }
.application-list { font-size: 14px; color: #004d40; }
.services-list { list-style: none; padding: 0; }
.services-list li { margin-bottom: 25px; border-left: 3px solid #004d40; padding-left: 15px; }
.services-list h4 { font-size: 18px; font-weight: 600; color: #333; margin-bottom: 5px; }
.services-list p { font-size: 15px; color: #555; }
.cta-form-block { display: flex; background-color: #e0f2f1; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
.form-placeholder { flex: 1; padding: 40px; }
.form-placeholder h3 { font-size: 28px; color: #004d40; margin-bottom: 10px; }
.form-placeholder p { color: #555; margin-bottom: 20px; }
.cta-form-block .image-placeholder { flex: 1; min-height: 250px; background-color: #004d40; }
.cta-form-block .image-placeholder img { width: 100%; height: 100%; object-fit: cover; }
@media (max-width: 900px) {
  .cta-form-block { flex-direction: column; }
}
</style>