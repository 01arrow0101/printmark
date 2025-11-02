<template>
  <section class="contact-page">
    <div class="container">
      <h1 class="contact-title">Зв'яжіться з <span>PrintMark</span></h1>
      <p class="contact-subtitle">
        Наші спеціалісти готові надати вам консультацію та прийняти замовлення
        на точну порізку рібонів та етикеток.
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="info-title">Основні дані</h2>

          <div class="info-item">
            <span class="icon">📍</span>
            <p class="address">
              **Адреса виробництва та офісу:**<br />
              вулиця Вінстона Черчилля, 84, корпус 26, 1-й поверх, Київ, 02000
            </p>
          </div>

          <div class="info-item">
            <span class="icon">📞</span>
            <p>**Телефон:** <a href="tel:+380445009236">+380 44 500 9236</a></p>
          </div>

          <div class="info-item">
            <span class="icon">📧</span>
            <p>
              **Email:**
              <a href="mailto:info@printmark.ua">info@printmark.ua</a>
            </p>
          </div>

          <div class="info-item">
            <span class="icon">⏱️</span>
            <p>
              **Графік роботи:**<br />
              Понеділок - П'ятниця: 09:00 – 18:00<br />
              Субота, Неділя: Вихідні
            </p>
          </div>
        </div>

        <div class="map-container">
          <h2 class="map-title">Карта проїзду</h2>
          <p class="map-description">
            Ви легко знайдете нас за вказаною адресою.
          </p>
          <div class="map-placeholder">
            <a
              href="https://maps.google.com/?cid=18372677808494003513&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Показати маршрут на карті
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Тут можна додати імпорти, якщо потрібні інші компоненти (наприклад, AppButton)
</script>

<style lang="scss" scoped>
@import "../assets//main.scss";
/* Стилі для компонента "Контакти" */
$secondary-color: #333; // Темний текст
$background-color: #f8f9fa; // Світло-сірий фон

.contact-page {
  padding: 80px 20px;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-title {
  font-size: 3rem;
  text-align: center;
  color: $secondary-color;
  margin-bottom: 10px;
  & span{
    color: $accent-color;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px #000;
  }
}

.contact-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #6c757d;
  margin-bottom: 60px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.info-title,
.map-title {
  font-size: 2rem;
  color: $accent-color;
  margin-bottom: 30px;
}

.contact-info {
  padding: 20px 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding-left: 5px;
  border-left: 3px solid $accent-color;

  .icon {
    font-size: 1.5rem;
    margin-right: 15px;
    line-height: 1.5;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: $secondary-color;

    a {
      color: $accent-color;
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.map-container {
  background-color: $background-color;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.map-description {
  margin-bottom: 20px;
  color: #555;
  font-size: 1rem;
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5)), url("/src/assets/img/map/карта.png");
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 12px 25px;
    background-color: $accent-color;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken($accent-color, 10%);
    }
  }
}
</style>
