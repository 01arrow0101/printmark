<template>
  <div class="container">
    <div class="section m-section">
      <div class="section-left">
        <div class="section-left_top">
          <div class="section-left_title">
            <h2 class="title">Наша продукція</h2>
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
            <img src="/src/assets/img/ribbon/1.webp" alt="1" />
            <img src="/src/assets/img/ribbon/2.webp" alt="2" />
            <img src="/src/assets/img/ribbon/3.webp" alt="3" />
          </div>
        </div>
        <div class="section-left_bottom">
          <div class="section-left_title">
            <div class="subtitle">
              Самоклеюча Етикетка <span>(Рулони)</span>
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
          <div class="section-right_title">
            <h2 class="title">Наші Партнери</h2>
          </div>
          <div class="img m-section">
            <img src="/src/assets/img/partner/7.webp" alt="7" />
            <img src="/src/assets/img/partner/8.webp" alt="8" />
            <img src="/src/assets/img/partner/9.webp" alt="9" />
          </div>
          <div class="text">
            Ми пишаємося довгостроковими та довірчими відносинами з нашими
            партнерами — провідними компаніями в різних галузях. Їхній вибір на
            користь PRINTMARK підтверджує високу якість нашої продукції,
            надійність постачань та професіоналізм нашої команди. Ми цінуємо
            кожного клієнта і прагнемо до взаємовигідної співпраці, пропонуючи
            індивідуальні рішення для найвимогливіших завдань.
          </div>
        </div>
        <div class="section-right_bottom">
          <div class="section-right_title">
            <h2 class="title center">Ознайомчі Відео</h2>
          </div>
          <div class="videos">
            <video class="video" controls style="width: 400px">
              <source src="/video/1.mp4" type="video/mp4" />
            </video>
            <video class="video" controls style="width: 400px">
              <source src="/video/2.mp4" type="video/mp4" />
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
.section-left_title,
.section-right_title {
  margin-bottom: 24px;
  .title {
    margin-bottom: 16px;
  }
  .subtitle {
    color: $primary-color;
    span {
      font-weight: $font-weight-normal;
    }
  }
}

.text {
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
  @media ($breakpoint-mobile) {
    flex-wrap: wrap;
  }
  img {
    max-width: 200px;
    background-color: $bg-color;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    @media ($breakpoint-tablet) {
      width: 150px;
    }
    @media ($breakpoint-mobile) {
      width: 200px;
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
