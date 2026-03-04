<template>
  <div class="container">
    <h2 class="title center">Наша продукція</h2>
    <div class="section m-section">
      <div class="section-left">
        <div class="section-left_top">
          <div class="section-left_title">
            <div class="subtitle">
              Ріббони <span>(Термотрансферна Стрічка)</span>
            </div>
          </div>
          <div class="text">
            Ріббон (Ribbon) — це спеціальна термотрансферна стрічка, яка
            використовується в принтерах етикеток для друку тексту, штрихкодів
            або зображень на самоклеючих етикетках, бірках, ярликах тощо.
          </div>
          <div class="button">
            <appButton @click="goToRibbon">Дізнатись більше</appButton>
          </div>
          <div class="img">
            <img
              src="/src/assets/img/ribbon/piramide.webp"
              alt="Ріббони піраміда"
            />
            <img
              src="/src/assets/img/ribbon/05dBlack.webp"
              alt="Чорний ріббон"
            />
            <img
              src="/src/assets/img/ribbon/rainbowPiramide.webp"
              alt="Кольорові ріббони"
            />
          </div>
        </div>
      </div>

      <div class="section-right">
        <div class="section-right_top">
          <div class="section-left_title">
            <div class="subtitle">
              Самоклеюча Етикетка <span>(Рулони)</span>
            </div>
          </div>
          <div class="text">
            Етикетка — це інформаційний або декоративний елемент, що наноситься
            на упаковку, товар чи продукцію з метою ідентифікації, маркування та
            реклами. Вона може бути як паперовою, так і полімерною.
          </div>
          <div class="button">
            <appButton @click="goToLabel">Дізнатись більше</appButton>
          </div>
          <div class="img">
            <img src="/src/assets/img/label/4.webp" alt="Етикетка 4" />
            <img src="/src/assets/img/label/5.webp" alt="Етикетка 5" />
            <img src="/src/assets/img/label/6.webp" alt="Етикетка 6" />
          </div>
        </div>
      </div>
    </div>

    <div class="section-center m-section">
      <div class="section-right_title">
        <h2 class="title center">Ознайомчі Матеріали</h2>
      </div>
      <div class="videos">
        <SliderSwiper :items="sliderItems" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import { useRouter } from "vue-router";
import appButton from "../Button/appButton.vue";
import SliderSwiper from "@/UI/SliderSwiper.vue";

const store = usePrintMarkStore();
const folder = store.getOptimizedAssetUrl;
const router = useRouter();

const goToRibbon = () => {
  router.push("/products/ribbons");
};
const goToLabel = () => {
  store.showProduct = 2;
  router.push("/products/labels");
};

const sliderItems = [
  {
    src: "https://www.youtube.com/embed/5iPvj4XNKxc?si=m3Qhl8-5Sk7z_mDg",
    alt: "Відео: Виробництво Ріббонів",
  },
  {
    src: "https://www.youtube.com/embed/98yDrlaaMuM?si=lPIjCdyKbCvxpBOG",
    alt: "Відео: Виробництво Етикеток",
  },
  {
    src: folder("img/ribbon/piramide.webp"),
    alt: "Фото: Нанесення Ріббону",
  },
  {
    src: folder("img/ribbon/rainbowPiramide.webp"),
    alt: "Фото: Кольорова гама",
  },
  {
    src: folder("img/ribbon/rainbow.webp"),
    alt: "Фото: Асортимент",
  },
];

const partnerIsShow = false;
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.section {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding-top: 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.section-left,
.section-right {
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 30px;
  max-width: 640px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

.subtitle {
  color: $primary-color;
  font-weight: bold;
  span {
    font-weight: normal;
    font-size: 0.9em;
  }
}

.img {
  display: flex;
  gap: 16px;
  padding-top: 32px;
  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

.videos {
  width: 100%;
  margin-top: 30px;
}
.text {
  margin-bottom: 16px;
}
</style>
