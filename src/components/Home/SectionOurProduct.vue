<template>
  <div class="container">
    <div class="section m-section">
      <div class="section-left">
        <div class="section-left_top">
          <div class="title">
            <h2 class="title-h2">Наша продукція</h2>
            <div class="h3 title-h3">
              <span>Ріббони</span> (Термотрансферна Стрічка)
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
            <img src="/img/ribbon/1.webp" alt="1" />
            <img src="/img/ribbon/2.webp" alt="2" />
            <img src="/img/ribbon/3.webp" alt="3" />
          </div>
        </div>
        <div class="section-left_bottom">
          <div class="title">
            <div class="h3 title-h3">
              <span>Самоклеюча Етикетка</span> (Рулони)
            </div>
          </div>
          <div class="text">
            Етикетка — це інформаційний або декоративний елемент, що наноситься
            на упаковку, товар чи продукцію з метою ідентифікації, маркування та
            реклами. Вона може бути як паперовою, так і полімерною, самоклеючою
            або призначеною для наклеювання за допомогою клею.
          </div>
          <div class="button">
            <appButton @click="goToLabel">Дізнатись більше</appButton>
          </div>
          <div class="img">
            <img src="/src/assets/img/label/4.webp" alt="4" />
            <img src="/src/assets/img/label/5.webp" alt="5" />
            <img src="/src/assets/img/label/6.webp" alt="6" />
          </div>
        </div>
      </div>
      <div class="section-right">
        <div class="section-right_top">
          <div class="title">
            <h2 class="title-h2">Наші Партнери</h2>
          </div>
          <div class="img m-section">
            <img src="/src/assets/img/partner/7.webp" alt="7" />
            <img src="/src/assets/img/partner/8.webp" alt="8" />
            <img src="/src/assets/img/partner/9.webp" alt="9" />
          </div>
          <div class="text">
            Ми пишаємося довгостроковими та довірчими відносинами з нашими
            партнерами — провідними компаніями в різних галузях. Їхній вибір на
            користь Rehmanov підтверджує високу якість нашої продукції,
            надійність постачань та професіоналізм нашої команди. Ми цінуємо
            кожного клієнта і прагнемо до взаємовигідної співпраці, пропонуючи
            індивідуальні рішення для найвимогливіших завдань.
          </div>
        </div>
        <div class="section-right_bottom">
          <div class="title">
            <h2 class="title-h2 center">Ознайомчі Відео</h2>
          </div>
          <div class="videos">
            <video class="video" controls style="width: 400px">
              <source src="/src/assets/video/1.mp4" type="video/mp4" />
            </video>
            <video class="video" controls style="width: 400px">
              <source src="/src/assets/video/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePrintMarkStore } from "@/stores/PrintMarkStore";
import { useRouter } from "vue-router";
import appButton from "../Button/appButton.vue";
const store = usePrintMarkStore();

const router = useRouter();

const goToRibbon = () => {
  router.push("/products/ribbons/");
};
const goToLabel = () => {
  store.showProduct = 2;
  router.push("/products/labels/");
};
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.section {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media ($breakpoint-desktop) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  .section-left,
  .section-right {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 620px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    @media ($breakpoint-desktop) {
      max-width: 100%;
    }
  }
}
.title {
  margin-bottom: 24px;
  .title-h2 {
    font-size: 44px;
    font-weight: $font-weight-bold;
    font-family: $font-family-alt;
    margin-bottom: 16px;
  }
  .title-h3 {
    font-size: $font-size-subtitle;
    font-weight: $font-weight-medium;
    font-family: $font-family-alt;
    span {
      font-weight: $font-weight-bold;
    }
  }
}
.text {
  font-size: $font-size-base;
  font-family: $font-family-base;
  margin-bottom: 24px;
}
.button {
  margin-bottom: 24px;
}
.img {
  display: flex;
  gap: 16px;
  @media ($breakpoint-desktop) {
    justify-content: center;
  }
  img {
    max-width: 200px;
    height: 200px;
    background-color: $bg-color;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    @media ($breakpoint-tablet) {
      width: 150px;
      height: 150px;
    }
  }
}
.videos {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  img {
    width: 100%;
    height: 250px;
    background-color: $bg-color;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
.video {
  width: 100%;
  height: 250px;
  background-color: $bg-color;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
