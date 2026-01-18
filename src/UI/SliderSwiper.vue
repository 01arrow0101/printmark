<template>
  <section class="slider-section">
    <div class="container">
      <h2 v-if="title" class="title">{{ title }}</h2>

      <swiper
        v-if="items && items.length > 0"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
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
              class="media-content video-player" 
              controls 
              preload="metadata"
              playsinline
            >
              <source :src="item.src" type="video/mp4" />
              Ваш браузер не підтримує відео.
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
      
      <div v-else class="empty-msg">
        <p>Контент для слайдера відсутній або завантажується...</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Визначення пропсів з безпечними значеннями за замовчуванням
const props = defineProps({
  title: { 
    type: String, 
    default: '' 
  },
  items: { 
    type: Array, 
    required: true,
    default: () => [] // Повертає порожній масив, якщо пропс не передано
  },
  breakpoints: {
    type: Object,
    default: () => ({
      '768': { slidesPerView: 2 },
      '1024': { slidesPerView: 3 }
    })
  }
});

const modules = [Navigation, Pagination, Autoplay];

/**
 * Перевіряє, чи є файл відео формату mp4
 */
const isVideo = (src) => {
  if (!src) return false;
  return src.toLowerCase().endsWith('.mp4');
};

/**
 * Зупиняє всі відео при перемиканні слайдів
 */
const handleSlideChange = () => {
  const videos = document.querySelectorAll('.video-player');
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.slider-section {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

.universal-swiper {
  width: 100%;
  padding-bottom: 50px; // Місце для пагінації (точок)
}

.media-card {
  width: 100%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  line-height: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.media-content {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.empty-msg {
  text-align: center;
  padding: 40px;
  color: #666;
  border: 2px dashed #ccc;
  border-radius: 12px;
}

/* Кастомізація навігації (стрілки) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: $accent-color !important;
  background: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  
  &::after {
    font-size: 18px !important;
    font-weight: 800;
  }

  &:hover {
    background: $accent-color;
    color: white !important;
  }
}

/* Кастомізація точок пагінації */
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: $accent-color !important;
  opacity: 1;
  width: 25px; // Робимо активну точку довшою
  border-radius: 5px;
}
</style>