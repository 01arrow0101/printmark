<template>
  <section class="contact-page p-section m-section">
    <div class="container">
      <div class="hero-block">
        <h1 class="hero-title"><span>Зв'яжіться з</span> {{ companyName }}</h1>
        <p class="contact-subtitle subtitle">
          Наші спеціалісти готові надати вам консультацію та прийняти замовлення
          на точну порізку ріббонів та етикеток.
        </p>
      </div>

      <div class="contact-flex-container">
        <div class="contact-column">
          <h2 class="column-title">Основні дані</h2>

          <div class="info-item">
            <span class="icon">📍</span>
            <div class="item-text">
              <p><strong>Адреса виробництва та офісу:</strong></p>
              <p>{{ address }}</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📞</span>
            <div class="item-text">
              <p><strong>Телефони:</strong></p>
              <div class="links-list">
                <a
                  v-for="tel in phones"
                  :key="tel"
                  :href="`tel:${tel}`"
                  class="accent-link"
                >
                  {{ formatPhone(tel) }}
                </a>
              </div>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📧</span>
            <div class="item-text">
              <p><strong>Email:</strong></p>
              <div class="links-list">
                <div
                  v-for="(mail, index) in emails"
                  :key="index"
                  class="email-row"
                >
                  <span class="label"
                    ><strong>{{ mail.label }}:</strong></span
                  >
                  <a :href="`mailto:${mail.email}`" class="accent-link">{{
                    mail.email
                  }}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">⏱️</span>
            <div class="item-text">
              <p><strong>Графік роботи:</strong></p>
              <p>{{ schedule.days }}</p>
              <p>{{ schedule.weekend }}</p>
            </div>
          </div>
        </div>

        <div class="contact-column">
          <h2 class="column-title">Карта проїзду</h2>
          <p class="map-desc">Ви легко знайдете нас за вказаною адресою.</p>
          <div class="map-wrapper">
            <div class="map-placeholder">
              <a
                :href="mapLink"
                target="_blank"
                rel="noopener noreferrer"
                class="map-btn"
              >
                Показати маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companyName = "PrintMark";
const address =
  "вулиця Вінстона Черчилля, 84, корпус 26, 1-й поверх, Київ, 02094";
const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Вінстона+Черчилля+84+Київ";

const phones = ["0505628414", "0932527629"];

const emails = [
  { label: "Загальний", email: "info@printmark.com.ua" },
  { label: "Продажі", email: "oleg.nastenko@printmark.com.ua" },
  { label: "Бухгалтерія", email: "olena.nastenko@printmark.com.ua" },
];

const schedule = {
  days: "Понеділок - П'ятниця: 09:00 – 18:00",
  weekend: "Субота, Неділя: Вихідні",
};

const formatPhone = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.contact-page {
  background-color: #fff;
  overflow: hidden;
}

.hero-block {
  text-align: center;
  margin-bottom: 40px;

  .hero-title {
    color: $accent-color;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

    span {
      display: block;
      font-size: 32px;
      color: #333;
      text-shadow: none;
      text-transform: none;
    }
  }
}

.contact-flex-container {
  display: flex;
  justify-content: bween;
  gap: 60px;
  align-items: stretch; // Змушує обидві колонки бути однакової висоти

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
}

.contact-column {
  flex: 1; // Обидві колонки завжди мають однакову ширину 50/50
  display: flex;
  flex-direction: column;
}

.column-title {
  color: $accent-color;
  font-size: 24px;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 3px solid $accent-color;

  .icon {
    font-size: 22px;
    line-height: 1.2;
  }

  .item-text {
    p {
      margin: 0;
      line-height: 1.6;
      color: #444;
    }
    strong {
      color: #000;
    }
  }
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.accent-link {
  color: $accent-color;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: 0.2s;

  &:hover {
    color: darken($accent-color, 15%);
    text-decoration: underline;
  }
}

.email-row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.map-wrapper {
  flex-grow: 1; // Дозволяє карті розтягуватися по висоті лівої колонки
}

.map-placeholder {
  width: 100%;
  min-height: 400px;
  height: 100%;
  background: #f4f4f4 url("@/assets/img/map/map.webp") center/cover no-repeat;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  .map-btn {
    position: relative;
    z-index: 10;
    background: $accent-color;
    color: white;
    padding: 14px 28px;
    border-radius: 6px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background: #333;
      transform: translateY(-2px);
    }
  }
}
</style>
