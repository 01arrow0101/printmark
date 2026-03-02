<template>
  <div v-if="route.path === '/products/labels'">
    <ButtonBack @action="router.go(-1)" />
    <section class="product-info-section">
      <div class="container">
        <h1 class="section-title">
          Самоклейні Етикетки для Термотрансферної Друкування
        </h1>
        <p class="section-description">
          Ми — ваш експерт у виробництві чистих і пре-принт рулонних етикеток,
          ідеально адаптованих для роботи з вашими термотрансферними принтерами
          та нашими Ріббонами.
        </p>

        <div class="materials-block">
          <h2 class="subtitle">Матеріали: Вибір для Любих Умов</h2>
          <div class="material-grid">
            <div
              v-for="material in labelMaterials"
              :key="material.type"
              class="product-card"
            >
              <div class="card-header">
                <h3 class="product-title">
                  {{ material.title }}
                  <span :class="['badge', material.type]">
                    {{ material.type }}</span
                  >
                </h3>
              </div>
              <div class="card-content">
                <div class="material-icon">{{ material.icon }}</div>
                <p class="product-description">{{ material.description }}</p>
                <ul class="spec-list">
                  <li>**Застосування:** {{ material.application }}</li>
                </ul>
                <div class="button">
                  <appButton @click="router.push(material.path)"
                    >Детальніше</appButton
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services-block">
          <h2 class="subtitle">Наші Послуги та Комплексне Снабження</h2>
          <div class="service-grid">
            <div
              v-for="service in services"
              :key="service.title"
              class="service-card"
            >
              <h4 class="service-title">{{ service.title }}</h4>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <div class="cta-form-block">
          <div class="form-placeholder">
            <h3>Розрахувати Вартість Тиражу</h3>
            <p>
              Заповніть форму, і ми оперативно підготуємо точний розрахунок
              вашого замовлення на рулонні етикетки. Гарантуємо сумісність з
              вашим принтером.
            </p>
            <appButton @click="router.push('/contacts')"
              >Замовити розрахунок</appButton
            >
          </div>
          <div class="image-placeholder"></div>
        </div>
      </div>
    </section>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { RouterView } from "vue-router";
import ButtonBack from "@/UI/ButtonBack.vue";
import appButton from "../Button/appButton.vue";
const route = useRoute();
const router = useRouter();
const labelMaterials = ref([
  {
    title: "Паперові",
    type: "ТермоТОП/Полуглянець",
    icon: "🗞️",
    description:
      "Економічна основа, що вимагає захисту від вологи та тертя. Ідеально для Ріббонів WAX.",
    application: "Логістика, складський облік, сухі харчові продукти.",
    path: "/products/labels/semi-gloss",
  },
  {
    title: "Синтетичні",
    type: "(ПП/ПЕТ)",
    icon: "💧",
    description:
      "Не рвуться, стійкі до води, жиру та хімікатів. Вимагають Ріббонів RESIN або WAX/RESIN.",
    application: "Косметика, побутова хімія, маркування електроніки.",
    path: "/products/labels/polypropylene",
  },
  // {
  //   title: "Спеціальні",
  //   type: "(Пломби/Текстиль)",
  //   icon: "🔒",
  //   description:
  //     "Для спеціфічних завдань, таких як контроль відкриття (VOID) або маркування одягу.",
  //   application: "Гарантійний контроль, інвентаризація, легка промисловість.",
  //   path: "/products/labels/thermo-top",
  // },
]);

const services = ref([
  {
    title: "Чисті Етикетки на Замовлення",
    description:
      "Виробництво рулонів усіх стандартних і нестандартних розмірів, з точним намотуванням і діаметром втулки під будь-яку модель вашого принтера.",
  },
  {
    title: "Пре-принт (Монохромний/Простий)",
    description:
      "Попереднє нанесення постійної інформації (логотип, рамки) для економії вашого часу. Ви самостійно допечатуєте змінну інформацію.",
  },
  {
    title: "Контроль Якості Підкладки",
    description:
      "Ми гарантуємо ідеальне нарізання і відсутність дефектів, що виключають застрягання і пошкодження термоголовок вашого обладнання.",
  },
]);
</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

.product-info-section {
  padding: 40px 0;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.section-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.materials-block,
.services-block {
  margin-bottom: 50px;
}

.subtitle {
  color: #333;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.material-grid,
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.card-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.product-title {
  font-weight: 600;
  color: #333;
}
.badge {
  margin-left: 15px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  background-color: $accent-color;
  color: white;
  text-wrap-mode: nowrap;
}
.material-icon {
  font-size: 30px;
  margin-bottom: 10px;
  color: $accent-color;
}

.product-description {
  margin-bottom: 10px;
  line-height: 1.6;
}

.spec-list {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 32px;
  font-size: 14px;
  color: $accent-color;
}

.service-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #eee;
}

.service-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.service-description {
  font-size: 15px;
  color: #555;
}

.cta-form-block {
  display: flex;
  background-color: #e0f2f1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-placeholder {
  flex: 1;
  padding: 40px;
}

.form-placeholder h3 {
  font-size: 28px;
  color: $accent-color;
  margin-bottom: 10px;
}

.form-placeholder p {
  color: #555;
  margin-bottom: 20px;
}

.action-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: $accent-color;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: lighten($accent-color, 10%);
}

.image-placeholder {
  flex: 1;
  min-height: 250px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),
    url("/src/assets/img/label/labels.webp") no-repeat bottom / cover;
}

@media (max-width: 900px) {
  .cta-form-block {
    flex-direction: column;
  }
}
</style>
