<template>
  <HeroSection class-name="bg">
    <template #subtitle>
      Інноваційні технології у сфері термотрансферного друку для автоматизованих ліній
    </template>
  </HeroSection>

  <section class="inline-printers">
    <div class="container">
      <div class="header-block">
        <h2 class="title">In-Line Принтери та Маркувальні Системи</h2>
        <div class="divider-gold"></div>
        <p class="subtitle">
          Ми пропонуємо високотехнологічні Ріббони серії <strong>Near-Edge</strong>, 
          спеціально розроблені для миттєвого перенесення фарби на високих швидкостях.
        </p>
      </div>

      <div class="advantage-banner">
        <div class="adv-text">
          <h3>Технологія Near-Edge</h3>
          <p>У системах In-Line (TTO) використовуються термоголовки кутового типу. Наші риббони мають спеціальне антистатичне покриття, що мінімізує знос дорогої головки та забезпечує стабільний друк на швидкості до 1000 мм/с.</p>
        </div>
        <div class="adv-stats">
          <div class="stat-item"><span>100%</span> сумісність</div>
          <div class="stat-item"><span>0%</span> статики</div>
        </div>
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
        <h3 class="materials-title">Відповідні матеріали PrintMark</h3>
        <div class="materials-grid">
          <div v-for="material in materials" :key="material.type" class="material-item">
            <div class="material-icon" :class="material.colorClass"></div>
            <div class="material-info">
              <h4>{{ material.type }}</h4>
              <p>{{ material.usage }}</p>
              <div class="material-footer">
                <span class="speed-indicator">Швидкість: {{ material.speed }}</span>
                <router-link to="/contacts" class="btn-sample">Замовити зразки</router-link>
              </div>
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

const printerBrands = ref([
  {
    name: 'Videojet',
    technology: 'DataFlex',
    description: 'Найпоширеніші системи TTO. Наші матеріали гарантують чіткість кодування навіть при максимальному завантаженні лінії.',
    models: ['6330', '6530', '6230', 'DataFlex Plus']
  },
  {
    name: 'Markem-Imaje',
    technology: 'SmartDate',
    description: 'Високопродуктивні принтери. Риббони PrintMark забезпечують відмінну адгезію на гнучких плівках.',
    models: ['SmartDate X45', 'SmartDate X65', 'Series 5', 'SmartDate 5/128']
  },
  {
    name: 'Domino / Linx',
    technology: 'V-Series / TT',
    description: 'Системи для точного маркування. Спеціальне покриття захищає вузол друку від перегріву.',
    models: ['V120i', 'V320i', 'TT500', 'TT750']
  },
  {
    name: 'Allen Coding / Logopak',
    technology: 'Industrial TTO',
    description: 'Промислові аплікатори та принтери. Ми постачаємо ріббони у намотках до 1100 метрів для зменшення зупинок лінії.',
    models: ['NG Series', '800 Series', 'i-Series']
  }
]);

const materials = ref([
  {
    type: 'Wax-Resin Near-Edge Premium',
    usage: 'Оптимально для харчової упаковки, флоу-пак, паперових пакетів.',
    speed: 'до 600-800 мм/с',
    colorClass: 'gold-bg'
  },
  {
    type: 'Resin Near-Edge High-Speed',
    usage: 'Для хімічної промисловості, заморозки та стійкості до розчинників.',
    speed: 'до 400 мм/с',
    colorClass: 'silver-bg'
  }
]);
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.inline-printers {
  padding: 60px 0;
  color: #fff;
}

.header-block {
  text-align: center;
  margin-bottom: 50px;
  .title {  text-transform: uppercase; margin-bottom: 15px; }
  .divider-gold { 
    width: 80px; height: 3px; background: $accent-color; margin: 0 auto 25px; 
  }
  .subtitle { 
    color: $primary-color; max-width: 800px; margin: 0 auto; line-height: 1.6;
    strong { color: $accent-color; }
  }
}

.advantage-banner {
  display: flex;
  background: linear-gradient(90deg, #1a1a1a 0%, #252525 100%);
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 60px;
  border: 1px solid rgba($accent-color, 0.2);
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) { flex-direction: column; text-align: center; }

  h3 { color: $accent-color; margin-bottom: 15px; font-size: 24px; }
  p { font-size: 16px; color: #aaa; line-height: 1.5; }

  .adv-stats {
    display: flex;
    gap: 20px;
    .stat-item {
      background: #000;
      padding: 15px 25px;
      border-radius: 10px;
      border: 1px solid #333;
      font-size: 12px;
      text-transform: uppercase;
      span { display: block; font-size: 24px; color: $accent-color; font-weight: bold; }
    }
  }
}

.printers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 70px;
}

.brand-card {
  background: $bg-color;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: $accent-color;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .brand-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    h3 { font-size: 22px; color: $accent-color; margin: 0; }
    .tech-tag { 
      font-size: 12px; background: #d4af3720; color: $accent-color; 
      padding: 3px 10px; border-radius: 4px; border: 1px solid rgba($accent-color, 0.3);
    }
  }
  .brand-desc { font-size: 15px; color: #bbb; line-height: 1.6; margin-bottom: 25px; }
}

.compat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .model-tag {
    font-size: 13px;
    background: #111;
    color: #eee;
    padding: 5px 12px;
    border-radius: 6px;
    border: 1px solid #333;
  }
}

.materials-section {
  background: #111;
  padding: 50px;
  border-radius: 20px;
  .materials-title { 
    margin-bottom: 40px; text-align: center; font-size: 28px; color: #fff;
  }
}

.material-item {
  display: flex;
  gap: 25px;
  background: #1a1a1a;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #333;
  
  .material-icon {
    width: 60px; height: 60px; border-radius: 12px; flex-shrink: 0;
    &.gold-bg { background: linear-gradient(135deg, $accent-color, #f9eeb2); }
    &.silver-bg { background: linear-gradient(135deg, #777, #ccc); }
  }

  h4 { margin-bottom: 10px; font-size: 20px; color: $accent-color; }
  p { font-size: 15px; color: #999; margin-bottom: 15px; flex-grow: 1; }

  .material-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .speed-indicator { font-size: 14px; font-weight: bold; color: #fff; }
    .btn-sample {
      font-size: 13px; color: $accent-color; text-decoration: none;
      border: 1px solid $accent-color; padding: 6px 15px; border-radius: 5px;
      transition: all 0.2s;
      &:hover { background: $accent-color; color: #000; }
    }
  }
}

@media (max-width: 992px) {
  .materials-grid { grid-template-columns: 1fr; }
  .material-item { flex-direction: column; text-align: center; .material-icon { margin: 0 auto; } }
}
</style>