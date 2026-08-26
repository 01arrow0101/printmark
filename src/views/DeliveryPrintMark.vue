<template>
  <section class="delivery-info-section">
    <div class="container">
      <h1 class="title">
        Умови Доставки та Оплати
        <span class="badge delivery-badge">ШВИДКО ТА НАДІЙНО</span>
      </h1>
      <p class="description">
        Ми гарантуємо швидку обробку та відправку ваших замовлень по всій
        території України. Ознайомтеся з доступними способами доставки.
      </p>

      <div class="info-block delivery-methods">
        <div class="card-header">
          <h2 class="subtitle">🚀 Способи Доставки</h2>
        </div>
        <div class="card-content">
          <div
            v-for="method in accentMethods"
            :key="method.title"
            class="method-card"
          >
            <h3 class="method-title">{{ method.title }}</h3>
            <p class="method-description">{{ method.description }}</p>
            <ul class="spec-list">
              <li>**Терміни:** {{ method.terms }}</li>
              <li>**Вартість:** {{ method.cost }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="info-block order-timing">
        <div class="card-header">
          <h2 class="subtitle">⏰ Терміни Обробки Замовлень</h2>
        </div>
        <div class="card-content">
          <p>
            Усі замовлення, оформлені до **14:00** робочого дня, відправляються
            у той же день. Замовлення, оформлені після 14:00, відправляються
            наступного робочого дня.
          </p>
          <ul class="spec-list timing-list">
            <li>**Обробка:** 1-3 години з моменту підтвердження оплати.</li>
            <li>**Відправка:** Щоденно, окрім вихідних та святкових днів.</li>
          </ul>
        </div>
      </div>

      <div class="info-block payment-methods">
        <div class="card-header">
          <h2 class="subtitle">💳 Умови Оплати</h2>
        </div>
        <div class="card-content payment-grid">
          <div
            v-for="payment in paymentMethods"
            :key="payment.title"
            class="payment-card"
          >
            <h3 class="payment-title">{{ payment.title }}</h3>
            <p>{{ payment.description }}</p>
          </div>
        </div>
      </div>

      <appButton @click="router.push('/contacts')">
        Потрібна консультація щодо доставки? Зв'яжіться з нами
      </appButton>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import appButton from "@/components/Button/appButton.vue";
const router = useRouter();

// Дані для блоку "Доставка"
const accentMethods = ref([
  {
    title: "Нова Пошта (Склад-Склад)",
    description: "Найшвидший та найпопулярніший спосіб доставки по Україні.",
    terms: "1-3 дні, залежно від регіону.",
    cost: "За тарифами перевізника. Безкоштовно для замовлень від 5000 грн.",
  },
  {
    title: "Кур'єрська доставка НП",
    description: "Доставка до дверей по всій Україні.",
    terms: "1-3 дні.",
    cost: "За тарифами перевізника (додаткова оплата).",
  },
  {
    title: "Самовивіз зі складу",
    description: "Можливість забрати замовлення самостійно у м. Київ.",
    terms: "У день замовлення (після підтвердження менеджером).",
    cost: "Безкоштовно.",
  },
]);

// Дані для блоку "Оплата"
const paymentMethods = ref([
  {
    title: "Безготівковий розрахунок",
    description: "Оплата на розрахунковий рахунок (з ПДВ або без ПДВ).",
  },
  {
    title: "Оплата на картку (ФОП)",
    description: "Переказ на картковий рахунок через мобільний додаток.",
  },
  {
    title: "Накладений платіж",
    description:
      "Оплата готівкою при отриманні у відділенні Нової Пошти (стягується комісія перевізника).",
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
/* Використовуємо ваші базові стилі та додаємо стилі для блоку доставки */

.delivery-info-section {
  // Змінено назву класу для коректності
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

.delivery-badge {
  // Змінено назву класу значка
  color: $accent-color;
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

.spec-list {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 10px;
  color: #555;

  li {
    margin-bottom: 5px;
  }
}

/* Стилі для методів доставки */
.delivery-methods .card-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.method-card {
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-left: 4px solid $accent-color;
  border-radius: 4px;
  background-color: #fcfcfc;
}

.method-title,
.payment-title {
  color: #333;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
}

.method-description {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
}

/* Стилі для оплати */
.payment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.payment-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .delivery-methods .card-content {
    grid-template-columns: 1fr;
  }
  .payment-grid {
    grid-template-columns: 1fr;
  }
}
</style>
