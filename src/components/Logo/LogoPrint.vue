<template>
  <div class="logo-wrapper">
    <div class="logo-main">
      <img src="@/assets/img/logo-ribbons.png" alt="PrintMark Logo" class="logo-img" />
      
      <div class="logo-text-content">
        <h1 class="brand-name">PrintMark</h1>
        <div class="divider"></div>
        <p class="tagline">THERMAL TRANSFER TECHNOLOGY</p>
        
        <nav class="material-links">
          <router-link to="/products/ribbons/wax">Wax</router-link>
          <span class="sep">|</span>
          <router-link to="/products/ribbons/wax-resin">Wax-Resin</router-link>
          <span class="sep">|</span>
          <router-link to="/products/ribbons/resin">Resin</router-link>
          <span class="sep">|</span>
          <router-link to="/products/ribbons/hotstamp">HotStamp</router-link>
          <span class="sep">|</span>
          <router-link to="/products/ribbons/resin-textile">Textile</router-link>
          <span class="sep">|</span>
          <router-link to="/in-line">In-Line</router-link>
          <span class="sep">|</span>
          <router-link to="/products/labels">Label</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
// Використовуємо кольори вашого бренду
$gold-gradient: linear-gradient(to bottom, #f9eeb2 0%, #d4af37 50%, #a67c00 100%);
$text-gray: #cccccc;

.logo-wrapper {
  display: inline-block;
  padding: 10px;
}

.logo-main {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 20px;
}

.logo-img {
  height: 120px; // Налаштуйте під ваш розмір
  width: auto;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
}

.logo-text-content {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: $font-family-base; // Або схожий засічений шрифт
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  line-height: 1;
  background: $gold-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 8px 0;
  width: 100%;
}

.tagline {
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 3px;
  margin: 0 0 5px 0;
  font-weight: 500;
  text-transform: uppercase;
}

.material-links {
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: $text-gray;
  flex-wrap: wrap;

  a {
    color: $text-gray;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #d4af37; // Золотий колір при наведенні
    }
  }

  .sep {
    color: rgba(255, 255, 255, 0.2);
    user-select: none;
  }
}

// Адаптивність для мобільних пристроїв
@media (max-width: 600px) {
  .logo-main {
    gap: 10px;
  }
  .logo-img {
    height: 80px;
  }
  .brand-name {
    font-size: 32px;
  }
  .tagline {
    font-size: 10px;
    letter-spacing: 1px;
  }
  .material-links {
    font-size: 10px;
  }
}
</style>