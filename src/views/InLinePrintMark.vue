<template>
 <HeroSection class-name="bg">
      <template #subtitle
        >Інноваційні технології у сфері термотрнасферного друку</template
      >
    </HeroSection>
  <section class="inline-printers">
    <div class="container">
      <div class="header-block">
        <h2 class="title">In-Line Принтери та Маркувальні Системи</h2>
        <div class="divider-gold"></div>
        <p class="subtitle">Наш асортимент Ріббонів ідеально сумісний з провідними світовими брендами TTO обладнання</p>
      </div>

      <div class="printers-grid">
        <div v-for="brand in printerBrands" :key="brand.name" class="brand-card">
          <div class="brand-header">
            <h3>{{ brand.name }}</h3>
            <span class="tech-tag">{{ brand.technology }}</span>
          </div>
          <p class="brand-desc">{{ brand.description }}</p>
          <div class="compat-list">
            <span v-for="model in brand.models" :key="model" class="model-tag">
              {{ model }}
            </span>
          </div>
        </div>
      </div>

      <div class="materials-section">
        <h3 class="subtitle">Відповідні матеріали PrintMark</h3>
        <div class="materials-grid">
          <div v-for="material in materials" :key="material.type" class="material-item">
            <div class="material-icon" :class="material.colorClass"></div>
            <div class="material-info">
              <h4>{{ material.type }}</h4>
              <p>{{ material.usage }}</p>
              <span class="speed-indicator">Швидкість: {{ material.speed }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import HeroSection from '@/components/Layout/HeroSection.vue';

// Дані про бренди принтерів
const printerBrands = ref([
  {
    name: 'Videojet',
    technology: 'TTO / Near-Edge',
    description: 'Світовий лідер у маркуванні на гнучкій упаковці. Потребує Ріббонів з високою чутливістю фарби.',
    models: ['DataFlex 6330', 'DataFlex 6530', '6230']
  },
  {
    name: 'Markem-Imaje',
    technology: 'SmartDate',
    description: 'Принтери для високошвидкісних ліній. Наші Ріббони забезпечують чіткість на плівках та фользі.',
    models: ['SmartDate X45', 'SmartDate X65', 'Series 5']
  },
  {
    name: 'Domino',
    technology: 'V-Series',
    description: 'Відомі своєю надійністю. Ми пропонуємо Near-Edge рішення для моделей i-Tech.',
    models: ['V120i', 'V230i', 'V320i']
  },
  {
    name: 'Linx',
    technology: 'TT Series',
    description: 'Компактні рішення для пакувальних машин. Наші стрічки гарантують мінімальний знос термоголовки.',
    models: ['Linx TT500', 'Linx TT750', 'Linx TT1000']
  }
]);

// Дані про матеріали
const materials = ref([
  {
    type: 'Wax-Resin Near-Edge (Premium)',
    usage: 'Для стандартної гнучкої упаковки (поліпропілен, поліетилен). Найкращий баланс ціни та стійкості.',
    speed: 'до 600 мм/с',
    colorClass: 'gold-bg'
  },
  {
    type: 'Resin Near-Edge (High Resistance)',
    usage: 'Для стерилізації, заморозки або контакту з маслами. Максимальна стійкість до стирання.',
    speed: 'до 400 мм/с',
    colorClass: 'silver-bg'
  }
]);
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";


.inline-printers {
  padding: 60px 0; // Темна тема для контрасту
  color: #fff;
}

.header-block {
  text-align: center;
  margin-bottom: 40px;
  .title { font-size: 32px; letter-spacing: 1px; margin-bottom: 15px; }
  .divider-gold { 
    width: 60px; height: 3px; background: $accent-color; margin: 0 auto 20px; 
  }
  .subtitle { color: $accent-color; max-width: 700px; margin: 0 auto; }
}

.printers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.brand-card {
  background: $bg-color;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: $accent-color;
  }

  .brand-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h3 { font-size: 20px; color: $accent-color; margin: 0; }
    .tech-tag { font-size: 14px; background: #333; padding: 2px 8px; border-radius: 4px; }
  }

  .brand-desc { font-size: $font-size-base; color: #ccc; line-height: 1.5; margin-bottom: 20px; }
}

.compat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .model-tag {
    font-size: 14px;
    background: rgba(212, 175, 55, 0.1);
    color: $accent-color;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid rgba(212, 175, 55, 0.3);
  }
}

.materials-section {
  background: $bg-color;
  padding: 30px;
  border-radius: 15px;
  font-size: 20px;
  h3 { margin-bottom: 30px; text-align: center; }
}

.materials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
}

.material-item {
  display: flex;
  gap: 20px;
  align-items: center;
  
  .material-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    flex-shrink: 0;
    &.gold-bg { background: linear-gradient(135deg, $accent-color, #f9eeb2); }
    &.silver-bg { background: linear-gradient(135deg, #888, #ddd); }
  }

  h4 { margin: 0 0 8px 0; font-size: 18px; }
  p { font-size: $font-size-base; color: #aaa; margin-bottom: 5px; }
  .speed-indicator { font-size: 14px; font-weight: bold; color: $accent-color; }
}
</style>