<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="accent-info-section">
    <div class="container">
      <h1 class="title">
        Наше Власне Виробництво: Етикетки та Риббони
        <span class="badge accent-badge"
          >КОНТРОЛЬ ЯКОСТІ ТА КОМПЛЕКСНІ РІШЕННЯ</span
        >
      </h1>
      <p class="description">
        Ми контролюємо повний цикл виробництва етикеток та пропонуємо власну
        нарізку риббонів, гарантуючи ідеальну сумісність та якість друку.
      </p>

      <div class="info-block capabilities">
        <div class="card-header">
          <h2 class="subtitle">🏷️ Наші Виробничі Можливості (Етикетки)</h2>
        </div>
        <div class="card-content capability-grid">
          <div
            v-for="cap in labelCapabilities"
            :key="cap.title"
            class="cap-card"
          >
            <h3 class="cap-title">{{ cap.title }}</h3>
            <p>{{ cap.description }}</p>
          </div>
        </div>
      </div>

      <div class="info-block ribbons-section">
        <div class="card-header">
          <h2 class="subtitle">⚫️ Виробництво та Асортимент Риббонів</h2>
        </div>
        <div class="card-content capability-grid">
          <div
            v-for="ribbon in ribbonData"
            :key="ribbon.type"
            class="cap-card ribbon-card"
          >
            <h3 class="cap-title">{{ ribbon.title }}</h3>
            <p>{{ ribbon.description }}</p>
            <ul class="spec-list">
              <li>**Стійкість:** {{ ribbon.resistance }}</li>
              <li>**Сумісні матеріали:** {{ ribbon.compatibility }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="info-block advantages">
        <div class="card-header">
          <h2 class="subtitle">🌟 Ваші Переваги При Комплексному Замовленні</h2>
        </div>
        <div class="card-content">
          <ul class="spec-list advantage-list">
            <li v-for="(adv, index) in advantages" :key="index">
              **{{ adv.title }}**: {{ adv.description }}
            </li>
          </ul>
        </div>
      </div>

      <appButton @click="router.push('/contacts')">
        Обговорити індивідуальне замовлення та комплектацію
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

// 1. Можливості виробництва ЕТИКЕТОК (адаптовані з оригіналу)
const labelCapabilities = ref([
  {
    title: "Будь-який Розмір та Форма",
    description:
      "Наявність широкого асортименту висічних ножів дозволяє виготовляти етикетки від 10х10 мм до 100х300 мм, включно з нестандартними формами.",
  },
  {
    title: "Різноманіття Матеріалів",
    description:
      "Працюємо з усіма типами сировини: Термо (ЕКО, ТОП), Папір (Напівглянець, Матовий), Синтетика (ПП, ПЕТ) та спеціальні плівки.",
  },
  {
    title: "Спеціальні Клеї",
    description:
      "Виготовлення етикеток з посиленим, морозостійким, знімним (Removable) або спеціальним клеєм для складних поверхонь.",
  },
]);

// 2. Інформація про РИББОНИ (Новий блок)
const ribbonData = ref([
  {
    type: "wax",
    title: "WAX (Восковий)",
    description:
      "Найбільш економічний тип риббона. Ідеальний для друку на паперових етикетках. Ми пропонуємо власну нарізку рулонів.",
    resistance: "Низька (чутливий до тертя та вологи).",
    compatibility: "Папір (Напівглянець, Матовий).",
  },
  {
    type: "wax-resin",
    title: "WAX/RESIN (Восково-смоляний)",
    description:
      "Універсальний тип. Забезпечує підвищену стійкість до змащування та подряпин. Підходить для паперу та деяких видів синтетики.",
    resistance: "Середня (стійкий до помірного тертя).",
    compatibility: "Папір, Поліпропілен (матові).",
  },
  {
    type: "resin",
    title: "RESIN (Смоляний)",
    description:
      "Максимальна стійкість. Друк витримує хімікати, високі температури та розчинники. Обов'язковий для маркування синтетики.",
    resistance: "Висока (стійкий до агресивних середовищ).",
    compatibility: "Поліпропілен, Поліестер (PET), синтетичні плівки.",
  },
]);

// 3. Переваги співпраці (Зберігаються з оригіналу)
const advantages = ref([
  {
    title: "Ціна без посередників",
    description:
      "Пряма закупівля сировини та відсутність посередників забезпечують конкурентну вартість кінцевого продукту.",
  },
  {
    title: "Мінімальні терміни",
    description:
      "Стандартні розміри виготовляються за 1-2 робочі дні. Нестандартні — до 5 робочих днів.",
  },
  {
    title: "Гнучкість замовлення",
    description:
      "Виготовляємо як малі партії (від 1000 шт.), так і великі оптові обсяги.",
  },
  {
    title: "Гарантія якості",
    description:
      "Кожен рулон проходить автоматизований та ручний контроль на відсутність браку та відповідність розмірам.",
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
$primary-color: #007bff;

.accent-info-section {
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

.accent-badge {
  color: $accent-color;
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
    color: $accent-color;
    margin: 0;
  }
}

/* Стилі для Сіток та Карток */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.cap-card {
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-top: 4px solid $accent-color;
  border-radius: 4px;
  background-color: #fcfcfc;
}

.ribbon-card {
  /* Додаткове виділення для карток риббонів */
  border-color: darken($accent-color, 10%);
  background-color: lighten($accent-color, 40%);
}

.cap-title {
  color: #333;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
}

/* Стилі для Списків (Переваги та Риббони) */
.spec-list {
  list-style: none; /* Прибираємо стандартні маркери */
  padding: 0;
  margin-left: 0;

  li {
    padding-left: 20px;
    position: relative;
    margin-bottom: 5px;
    font-size: 14px;
    &::before {
      content: "•"; /* Маркер */
      position: absolute;
      left: 0;
      color: $accent-color;
      font-size: 16px;
      line-height: 1;
    }
  }
}

.advantage-list li::before {
  content: "⭐";
  font-size: 14px;
  top: 2px;
}

@media (max-width: 768px) {
  .capability-grid {
    grid-template-columns: 1fr;
  }
}
</style>
