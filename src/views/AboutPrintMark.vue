<template>
  <section class="about-section">
    <div class="container">
      <div class="header-content">
        <h1 class="title">О компании <span>PrintMark</span></h1>
        <h2 class="subtitle">Профессиональная порезка термотрансферной ленты и самоклеющихся этикеток</h2>
        <p class="description">
          Мы специализируемся на точной порезке термотрансферных лент и самоклеющихся этикеток, 
          обеспечивая высокое качество и точность для различных отраслей.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="content">
            <h3 class="feature-title">Термотрансферная лента</h3>
            <p class="feature-text">
              Мы обеспечиваем точную порезку термотрансферных лент для печати этикеток, 
              используя современное оборудование и проверенные технологии.
            </p>
          </div>
        </div>

        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 112.828 2.828l-8.486 8.486a2 2 0 01-2.828 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="content">
            <h3 class="feature-title">Самоклеющиеся этикетки</h3>
            <p class="feature-text">
              Производим высококачественные самоклеющиеся этикетки различных форм и размеров 
              для упаковки, идентификации и маркировки.
            </p>
          </div>
        </div>

        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="content">
            <h3 class="feature-title">Индивидуальные решения</h3>
            <p class="feature-text">
              Разрабатываем и производим решения под конкретные требования клиентов, 
              включая нестандартные размеры и материалы.
            </p>
          </div>
        </div>
      </div>

      <div class="tech-section">
        <div class="section-header">
          <h2 class="section-title">Наши технологии</h2>
          <p class="section-description">
            Используем современное оборудование с высокой точностью порезки до 0.01 мм 
            и автоматизированные системы контроля качества.
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-card">
            <h3 class="card-title">Процесс порезки термотрансферной ленты</h3>
            <p class="card-text">
              Мы используем высокоточные режущие станки, обеспечивающие равномерную толщину 
              и чистые края. Все ленты проходят тестирование на адгезию и термостойкость.
            </p>
          </div>
          <div class="tech-card">
            <h3 class="card-title">Производство самоклеющихся этикеток</h3>
            <p class="card-text">
              Изготавливаем этикетки из различных материалов (ПВХ, бумага, полимеры) 
              с разными типами клея для различных поверхностей и условий эксплуатации.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.about-section {
  padding: 5rem 1rem;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-content {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: $font-size-title;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: $primary-color;
  & span{
    color: $accent-color;
    text-shadow: 4px 4px 4px $primary-color;
  }
}

.subtitle {
  font-size: $font-size-subtitle;
  font-weight: $font-weight-bold;
  font-family: $font-family-alt;
  line-height: 1.2;
  color: $primary-color;
  margin-bottom: 1.5rem;
}

.description {
  color: $primary-color;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.icon {
  width: 2.25rem;
  height: 2.25rem;
  color: $accent-color;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  font-family: $font-family-alt;
  color: $primary-color;
  margin-bottom: 0.5rem;
}

.feature-text {
  color: $primary-color;
}

.tech-section {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  font-family: $font-family-alt;
  color: $primary-color;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: $primary-color;
  max-width: 600px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tech-card {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  font-family: $font-family-alt;
  color: $primary-color;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  color: $primary-color;
}
</style>