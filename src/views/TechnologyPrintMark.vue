<template>
  <section class="hero">
    <div class="hero_content">
      <div class="hero_title">
        <h1>Точна Порізка від <span>PrintMark</span></h1>
      </div>
      <div class="hero_text">
        <p>Інноваційні рішення у порізці термотрансферних рібонів та етикеток</p>
      </div>
      <div class="button">
        <app-button>Замовити консультацію</app-button>
      </div>
    </div>
  </section>

  <section class="our-technologies">
    <div class="our-product_title">
      <h2>Наші Технології Порізки</h2>
    </div>
    
    <div class="product-section">
      <div class="section-header">
        <div class="our-product_text">
          <p><span>Сучасні</span> рішення для точного формування матеріалів</p>
        </div>
        <div class="product-grid">
          <div 
            v-for="tech in technologies" 
            :key="tech.title" 
            class="product-card"
          >
            <div class="card_image">
              <img :src="tech.image" :alt="tech.title" />
            </div>
            <div class="card_title">
              <h3>{{ tech.title }}</h3>
            </div>
            <div class="card_description">
              <p>{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="our-product_text">
          <p><span>Обладнання</span> для високоточної порізки</p>
        </div>
        <div class="product-grid">
          <div 
            v-for="equipment in equipment" 
            :key="equipment.title" 
            class="product-card"
          >
            <div class="card_image">
              <img :src="equipment.image" :alt="equipment.title" />
            </div>
            <div class="card_title">
              <h3>{{ equipment.title }}</h3>
            </div>
            <div class="card_description">
              <p>{{ equipment.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="our-product_text">
          <p><span>Контроль</span> якості порізаної продукції</p>
        </div>
        <div class="quality-section">
          <div class="quality-content">
            <p class="quality-text">
              Ми виконуємо комплексний контроль якості на всіх етапах порізки:
            </p>
            <ul class="quality-list">
              <li>Перевірка точності розмірів та відповідності специфікаціям</li>
              <li>Випробування на міцність країв та відсутність дефектів</li>
              <li>Автоматизовані системи вимірювання ширини та довжини рулонів</li>
              <li>Тестування якості намотування рулонів та їх цілісності</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from "/src/components/Button/appButton.vue";

const technologies = [
  {
    title: "Високоточна Порізка",
    image: "src/assets/img/technologies/precision-cutting.png",
    description: "Використання передових систем різання з точністю до 0.01 мм для термотрансферних стрічок та самоклеючих етикеток. Наше обладнання забезпечує ідеально рівні краї та однакову товщину матеріалу по всій довжині."
  },
  {
    title: "Рішення для Спеціалізованих Матеріалів",
    image: "src/assets/img/technologies/heat-resistant.png", // Це зображення може потребувати оновлення, якщо воно було про термостійкість, а не порізку спец. матеріалів
    description: "Технології порізки, адаптовані для роботи з різними типами матеріалів, включаючи термостійкі, синтетичні та інші спеціалізовані рібони й етикетки, що вимагають особливого підходу."
  },
  {
    title: "Ефективність та Екологічність",
    image: "src/assets/img/technologies/ecological.png",
    description: "Оптимізація процесів порізки для мінімізації відходів та використання енергоефективного обладнання. Ми дбаємо про екологічність нашого виробництва, забезпечуючи високоякісні результати."
  }
];

const equipment = [
  {
    title: "Системи Лазерної та Ротаційної Порізки",
    image: "src/assets/img/equipment/laser-cutting.png",
    description: "Сучасні лазерні та ротаційні системи з автоматичним керуванням, призначені для порізки рібонів та етикеток з точністю до 0.01 мм. Забезпечують бездоганні краї та відповідність заданим розмірам."
  },
  {
    title: "Автоматизовані Лінії Перемотування",
    image: "src/assets/img/equipment/automated-lines.png",
    description: "Повністю автоматизовані лінії для перемотування та порізки рулонів. Системи моніторингу контролюють якість намотування та щільність, гарантуючи високу продуктивність та стабільність параметрів готової продукції."
  },
  {
    title: "Інтегровані Системи Контролю",
    image: "src/assets/img/equipment/quality-control.png",
    description: "Сучасні інтегровані системи автоматизованого контролю якості з використанням оптичних сенсорів для аналізу точності порізки, відсутності дефектів та відповідності розмірів на всіх етапах виробництва."
  }
];
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

/* Збережено існуючі стилі, вони є загальними і не конфліктують з новою логікою */
.quality-section {
  background-color: #f3f4f6;
  padding: 48px 0;
  border-radius: 16px;
  margin-top: 64px;
}

.quality-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.quality-text {
  font-size: $font-size-base;
  color: $primary-color;
  margin-bottom: 32px;
}

.quality-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  li {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-size: $font-size-base;
    color: $primary-color;
  }
}

/* Hero section specific styles (можливо, потребують доопрацювання для кращого візуального ефекту) */
.hero {
  background: linear-gradient(rgba(0,0,0,0.5)), url('/src/assets/img/bg/tehnology/bgTehology.png') no-repeat center / cover; 
  color: $secondary-color;
  text-align: center;
  padding: 100px 20px;
}

.hero_content {
  max-width: 1440px;
  margin: 0 auto;
}

.hero_title h1 {
  font-size: 3.5rem; /* Збільшити розмір для привабливості */
  margin-bottom: 20px;
  & span{
    text-transform: uppercase;
    text-shadow: 4px 4px 4px $accent-color;
  }
}

.hero_text p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.button {
  margin-top: 30px;
}

/* Загальні стилі для секцій та карток, які у вас вже були */
.our-technologies {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.our-product_title h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: $primary-color;
}

.our-product_text {
  text-align: center;
  margin-bottom: 40px;
  p {
    font-size: 1.8rem;
    color: $secondary-color;
    span {
      font-weight: bold;
      color: $primary-color;
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.product-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
}

.card_image img {
  max-width: 100%;
  height: 200px; /* Фіксована висота для зображень */
  object-fit: contain; /* Зберігаємо пропорції */
  margin-bottom: 20px;
}

.card_title h3 {
  font-size: 1.5rem;
  color: $primary-color;
  margin-bottom: 15px;
}

.card_description p {
  font-size: $font-size-base;
  color: $secondary-color;
  line-height: 1.6;
}
</style>