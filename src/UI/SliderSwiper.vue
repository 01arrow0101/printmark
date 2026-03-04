<template>
  <section class="slider-section">
    <div class="container">
      <h2 v-if="title" class="title">{{ title }}</h2>

      <swiper
        v-if="items && items.length > 0"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        navigation
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
        class="universal-swiper"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="(item, index) in items" :key="index" class="media-slide">
          <div class="media-card">
            
            <iframe 
              v-if="isYouTube(item.src)"
              :src="item.src"
              class="media-content video-style"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <video 
              v-else-if="isVideo(item.src)"
              class="media-content video-style" 
              controls 
              preload="metadata"
              playsinline
            >
              <source :src="item.src" type="video/mp4" />
            </video>

            <img 
              v-else 
              :src="item.src" 
              :alt="item.alt || 'PrintMark image'" 
              class="media-content image-style"
              loading="lazy"
            >

          </div>
          <p v-if="item.alt" class="slide-caption">{{ item.alt }}</p>
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
  items: { type: Array, required: true },
  breakpoints: {
    type: Object,
    default: () => ({
      '320': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '1200': { slidesPerView: 2 }
    })
  }
});

const modules = [Navigation, Pagination, Autoplay];

const isVideo = (src) => src?.toLowerCase().endsWith('.mp4');
const isYouTube = (src) => src?.includes('youtube.com') || src?.includes('youtu.be');

const handleSlideChange = () => {
  document.querySelectorAll('video').forEach(v => v.pause());
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.slider-section { width: 100%; overflow: hidden; }
.universal-swiper { padding-bottom: 50px; }

.media-card {
  width: 100%;
  position: relative;
  background: #000; // Чорний фон для полів зображення
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.media-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

// Стиль для відео (на весь блок)
.video-style {
  object-fit: cover;
}

// Стиль для фото (збереження пропорцій)
.image-style {
  object-fit: contain; // Картинка не розтягується, видно її реальну форму
  background-color: #1a1a1a; 
}

.slide-caption {
  text-align: center;
  margin-top: 12px;
  color: $accent-color;
  font-size: 14px;
  font-weight: 500;
}

:deep(.swiper-button-next), :deep(.swiper-button-prev) {
  color: $accent-color !important;
  @media (max-width: 768px) { display: none; }
}

:deep(.swiper-pagination-bullet-active) {
  background: $accent-color !important;
}
</style>