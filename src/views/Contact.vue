<template>
  <section class="contact-page p-section m-section">
    <div class="container">
      <h1 class="hero-title"><span>Зв'яжіться з</span> {{ companyName }}</h1>
      <p class="contact-subtitle subtitle">
        Наші спеціалісти готові надати вам консультацію та прийняти замовлення
        на точну порізку ріббонів та етикеток.
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="title">Основні дані</h2>

          <div class="info-item">
            <span class="icon">📍</span>
            <p class="address">
              **Адреса виробництва та офісу:**<br />
              {{ address }}
            </p>
          </div>

          <div class="info-item">
            <span class="icon">📞</span>
            <div class="phones-list">
              <p>**Телефони:**</p>
              <a v-for="tel in phones" :key="tel" :href="`tel:${tel}`" class="phone-link">
                {{ formatPhone(tel) }}
              </a>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📧</span>
            <div class="emails-list">
              <p>**Email:**</p>
              <div v-for="(mail, index) in emails" :key="index" class="email-row">
                <span class="email-label">{{ mail.label }}:</span>
                <a :href="`mailto:${mail.email}`">{{ mail.email }}</a>
              </div>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">⏱️</span>
            <p>
              **Графік роботи:**<br />
              {{ schedule.days }}<br />
              {{ schedule.weekend }}
            </p>
          </div>
        </div>

        <div class="map-container">
          <h2 class="title">Карта проїзду</h2>
          <p class="map-description">
            Ви легко знайдете нас за вказаною адресою.
          </p>
          <div class="map-placeholder">
            <a
              :href="mapLink"
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
const companyName = 'PrintMark';
const address = 'вулиця Вінстона Черчилля, 84, корпус 26, 1-й поверх, Київ, 02094';
const mapLink = 'https://www.google.com/maps/search/?api=1&query=Вінстона+Черчилля+84+Київ';

const phones = ['0505628414', '0932527629'];

const emails = [
  { label: 'Загальний', email: 'info@printmark.com.ua' },
  { label: 'Продажі', email: 'oleg.nastenko@printmark.com.ua' },
  { label: 'Бухгалтерія', email: 'olena.nastenko@printmark.com.ua' }
];

const schedule = {
  days: 'Понеділок - П\'ятниця: 09:00 – 18:00',
  weekend: 'Субота, Неділя: Вихідні'
};

// Функція для красивого форматування номера (наприклад, 050 562 84 14)
const formatPhone = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

$secondary-color: #333;
$background-color: #f8f9fa;

.contact-page {
  background-color: #fff;
}

.hero-title {
  text-align: center;
  margin-bottom: 10px;
  color: $accent-color;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #000;
  & span {
    font-size: 36px;
    color: $secondary-color;
    text-shadow: none;
  }
}

.contact-subtitle {
  text-align: center;
  color: #6c757d;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  @media ($breakpoint-mobile) {
    gap: 32px;
  }
}

.title {
  color: $accent-color;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 3px solid $accent-color;

  .icon {
    font-size: 24px;
    margin-right: 15px;
    line-height: 1.5;
  }

  .phones-list, .emails-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    p {
      margin-bottom: 2px;
      font-weight: bold;
    }
  }

  .phone-link, .email-row {
    font-size: 20px;
    color: $secondary-color;
    text-decoration: none;
    
    a {
      color: $accent-color;
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .email-label {
    margin-right: 8px;
    font-weight: 500;
  }

  .phone-link {
    color: $accent-color;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
}

.map-container {
  padding: 20px;
  background-color: $background-color;
  border-radius: 8px;
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background-image: url("@/assets/img/map/map.png"); 
  background-image: image-set(
    url("@/assets/img/map/map.webp") type("image/webp"),
    url("@/assets/img/map/map.png") type("image/png")
  );
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }

  a {
    position: relative;
    z-index: 1;
    padding: 12px 25px;
    background-color: $accent-color;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background-color: darken($accent-color, 10%);
      transform: scale(1.05);
    }
  }
}
</style>