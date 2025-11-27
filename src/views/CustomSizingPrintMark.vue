<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="custom-config-section">
    <div class="container">
      <h1 class="title">
        Індивідуальне Виробництво: Етикетки та Риббони
        <span class="badge custom-badge">ПІД ВАШІ ТЕХНІЧНІ ВИМОГИ</span>
      </h1>
      <p class="description">
        Ми пропонуємо повну кастомізацію як самої етикетки (розмір, форма, матеріал), так і фарбувальних стрічок, щоб забезпечити безперебійну роботу вашого термотрансферного принтера.
      </p>

      <div class="info-block custom-label-params">
        <div class="card-header">
          <h2 class="subtitle">🏷️ Налаштування Розміру та Форми Етикетки</h2>
        </div>
        <div class="card-content capability-grid">
          
          <div v-for="param in labelCustomParams" :key="param.title" class="param-card">
            <h3 class="param-title">{{ param.title }}</h3>
            <p>{{ param.description }}</p>
          </div>
          
        </div>
      </div>

      <div class="info-block custom-winding-params">
        <div class="card-header">
          <h2 class="subtitle">🔄 Параметри Втулки та Намотування Рулону</h2>
        </div>
        <div class="card-content capability-grid">
          
          <div v-for="winding in windingParams" :key="winding.title" class="param-card winding-card">
            <h3 class="param-title">{{ winding.title }}</h3>
            <p>{{ winding.description }}</p>
          </div>
          
        </div>
      </div>

      <div class="info-block custom-ribbon-params">
        <div class="card-header">
          <h2 class="subtitle">⚫️ Індивідуальні Параметри Риббонів (Нарізка)</h2>
        </div>
        <div class="card-content capability-grid ribbon-grid">
          
          <div v-for="ribbonParam in ribbonParams" :key="ribbonParam.title" class="param-card ribbon-card">
            <h3 class="param-title">{{ ribbonParam.title }}</h3>
            <p>{{ ribbonParam.description }}</p>
          </div>
          
        </div>
      </div>


      <div class="info-block ordering-steps">
        <div class="card-header">
          <h2 class="subtitle">📞 Процес Замовлення Індивідуальної Конфігурації</h2>
        </div>
        <div class="card-content">
          <ol class="process-steps">
            <li v-for="(step, index) in orderingSteps" :key="index">
              **{{ step.title }}**: {{ step.description }}
            </li>
          </ol>
        </div>
      </div>

      <appButton @click="router.push('/contacts')">
        Надіслати запит на індивідуальні розміри
      </appButton>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import ButtonBack from "@/UI/ButtonBack.vue";
import appButton from "@/components/Button/appButton.vue";
const router = useRouter();

// 1. Параметри, що налаштовуються для ЕТИКЕТКИ (Збережено оригінальний блок 1)
const labelCustomParams = ref([
  {
    title: "Ширина та Довжина (Розмір)",
    description: "Виробництво етикеток будь-яких розмірів (від 10x10 мм до 100x300 мм) з точністю до 0.1 мм, включаючи міліметрові та дюймові стандарти.",
  },
  {
    title: "Нестандартна Форма",
    description: "Крім прямокутних, ми виготовляємо овальні, круглі етикетки, а також ярлики зі складними контурами під замовлення (вимагає виготовлення нового ножа).",
  },
  {
    title: "Зазор (Gap) та Перфорація",
    description: "Регулюємо відстань між етикетками (зазор) для сканерів, а також додаємо перфорацію між ярликами для легкого відриву.",
  },
]);

// 2. Параметри НАМОТУВАННЯ (Збережено оригінальний блок 2)
const windingParams = ref([
  {
    title: "Діаметр Втулки (Core)",
    description: "Стандартні розміри: 40 мм, 76 мм (1.5'' та 3''). Ми можемо намотати на будь-яку іншу втулку, необхідну для вашого промислового чи настільного принтера.",
  },
  {
    title: "Кількість у Рулоні",
    description: "Визначається вами. Намотування від 100 шт. до 5000 шт. в одному рулоні. Це залежить від зовнішнього діаметра рулону та можливостей вашого принтера.",
  },
  {
    title: "Напрямок Намотування",
    description: "Вибір зовнішнього або внутрішнього намотування етикеток. Це важливо для автоматичних аплікаторів та деяких моделей принтерів.",
  },
]);


// 3. Параметри, що налаштовуються для РИББОНІВ (Новий блок, інтегрований у стиль карток)
const ribbonParams = ref([
  {
    title: "Ширина Риббона (Cutting Width)",
    description: "Точна нарізка ширини риббона (наприклад, 40, 55, 60, 80, 110 мм) під розмір вашої етикетки та принтера, щоб уникнути перевитрати матеріалу.",
  },
  {
    title: "Довжина Намотування",
    description: "Нарізка рулонів довжиною 74, 300, 450 або 600 метрів. Вибір залежить від класу (настільний/промисловий) та моделі вашого принтера.",
  },
  {
    title: "Тип Намотування та Втулки",
    description: "Намотування IN (фарба всередині) або OUT (фарба ззовні), а також нарізка на втулки 0.5'', 1'' під будь-який принтер (Zebra, TSC, Godex).",
  },
]);

// 4. Етапи замовлення (Кроки - залишаються з оригіналу)
const orderingSteps = ref([
  {
    title: "Опис Завдання",
    description: "Ви надаєте розмір (ШхД), матеріал (Папір/ПП), тип риббона та модель вашого принтера.",
  },
  {
    title: "Технічне Узгодження",
    description: "Наш фахівець підтверджує можливість виготовлення етикеток та нарізки риббонів, узгоджуючи всі параметри.",
  },
  {
    title: "Розрахунок та Виробництво",
    description: "Ми надаємо фінальну вартість та оперативно розпочинаємо виконання комплексного індивідуального замовлення.",
  },
]);
</script>

<style lang="scss" scoped>
/* Зберігаємо оригінальні стилі Custom Sizes */
$accent-color: #007bff;
$custom-color: #f09830; // Синій

.custom-config-section {
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

.custom-badge {
    color: $custom-color;
    font-size: 14px;
}

.info-block {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;

  .card-header {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .subtitle {
    color: $custom-color;
    margin: 0;
  }
}

/* Стилі для Сіток та Карток */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.param-card {
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-top: 4px solid $custom-color;
  border-radius: 4px;
  background-color: #fcfcfc;
}

.param-title {
  color: #333;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
}

/* Виділення блоку Риббонів */
.custom-ribbon-params {
    border-color: lighten($custom-color, 20%);
    background-color: lighten($custom-color, 45%);
}
.ribbon-card {
    background-color: #fff;
    border-top-color: $custom-color;
}
.ribbon-card .param-title::before {
    content: "⚫";
    margin-right: 5px;
    color: #333;
}


/* Стилі для Кроків Замовлення (збережені з оригіналу) */
.process-steps {
    list-style: none;
    padding: 0;
    counter-reset: step-counter;
}

.process-steps li {
    counter-increment: step-counter;
    position: relative;
    padding: 10px 0 10px 40px;
    margin-bottom: 15px;
    border-left: 2px solid #eee;
    line-height: 1.5;
}

.process-steps li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: $custom-color;
    color: white;
    font-weight: bold;
    font-size: 14px;
}


@media (max-width: 768px) {
  .capability-grid {
    grid-template-columns: 1fr;
  }
}
</style>