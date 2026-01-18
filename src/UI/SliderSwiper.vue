<template>
  <section class="slider-section">
    <div class="container">
      <h2 v-if="title" class="title">{{ title }}</h2>

      <swiper
        v-if="items && items.length > 0"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :auto-height="false" 
        navigation
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
        class="universal-swiper"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="(item, index) in items" :key="index" class="media-slide">
          <div class="media-card">
            
            <video 
              v-if="isVideo(item.src)"
              class="media-content" 
              controls 
              preload="metadata"
              playsinline
              webkit-playsinline
            >
              <source :src="item.src" type="video/mp4" />
            </video>

            <img 
              v-else 
              :src="item.src" 
              :alt="item.alt || 'media content'" 
              class="media-content"
              loading="lazy"
            >

          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  title: { type: String, default: '' },
  items: { type: Array, required: true, default: () => [] },
  breakpoints: {
    type: Object,
    default: () => ({
      '320': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '1024': { slidesPerView: 3 }
    })
  }
});

const modules = [Navigation, Pagination, Autoplay];

const isVideo = (src) => src?.toLowerCase().endsWith('.mp4');

const handleSlideChange = () => {
  document.querySelectorAll('video').forEach(v => v.pause());
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.slider-section {
  padding: 40px 0;
  overflow: hidden; // Гарантує, що нічого не вилетить за межі секції
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.universal-swiper {
  width: 100%;
  padding-bottom: 50px;
}

.media-card {
  width: 100%;
  position: relative;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  /* Використовуємо padding-bottom для створення фіксованого співвідношення сторін, 
     це найнадійніший метод для мобільних щоб уникнути "стрибків" висоти */
  padding-bottom: 56.25%; // Співвідношення 16:9
  height: 0;
}

.media-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Заповнює блок, прибираючи чорні полоси по боках
  display: block;
}

// Якщо це відео, краще використовувати contain, щоб не обрізати важливі деталі, 
// але тоді будуть полоси. Якщо хочеш без полос — залиш cover.
video.media-content {
  object-fit: cover; 
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: $accent-color !important;
  @media (max-width: 768px) { display: none; }
}

:deep(.swiper-pagination-bullet-active) {
  background: $accent-color !important;
}
</style>