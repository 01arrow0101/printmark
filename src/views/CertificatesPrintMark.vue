<template>
  <ButtonBack @action="router.go(-1)" />
  <section class="quality-control-section">
    <div class="container">
      <h1 class="title">
        Контроль Якості Сировини та Сертифікація
        <span class="badge quality-badge">ГАРАНТІЯ НАДІЙНОСТІ</span>
      </h1>
      <p class="description">
        Ми використовуємо лише **сертифіковану сировину** від перевірених
        європейських виробників. Кожен етап виробництва проходить ретельну
        перевірку, що підтверджується відповідними документами.
      </p>

      <div class="info-block label-quality-block">
        <div class="card-header">
          <h2 class="subtitle">
            🏷️ Контроль Якості Етикеток (Папір/Синтетика)
          </h2>
        </div>
        <div class="card-content quality-grid">
          <div v-for="qc in labelQuality" :key="qc.title" class="qc-card">
            <h3 class="qc-title">{{ qc.title }}</h3>
            <p>{{ qc.description }}</p>
          </div>
        </div>

        <div class="certificate-buttons">
          <h3 class="cert-header">Сертифікати якості на сировину</h3>
          <div class="button-group">
            <appButton class="view-button" @click="viewCertificate('labels')">
              Переглянути Сертифікати Етикеток
            </appButton>
            <a
              class="download-button"
              :href="labelCertPath"
              download="Сертифікати_Етикеток.pdf"
            >
              Завантажити Сертифікати Етикеток
            </a>
          </div>
        </div>
      </div>

      <div class="info-block ribbon-quality-block">
        <div class="card-header">
          <h2 class="subtitle">
            ⚫️ Сертифікація Фарбувальних Стрічок (Риббонів)
          </h2>
        </div>
        <div class="card-content quality-grid">
          <div v-for="qc in ribbonQuality" :key="qc.title" class="qc-card">
            <h3 class="qc-title">{{ qc.title }}</h3>
            <p>{{ qc.description }}</p>
          </div>
        </div>

        <div class="certificate-buttons">
          <h3 class="cert-header">Сертифікати на відповідність (RoHS, FDA)</h3>
          <div class="button-group">
            <appButton class="view-button" @click="viewCertificate('ribbons')">
              Переглянути Сертифікати Риббонів
            </appButton>
            <a
              class="download-button"
              :href="ribbonCertPath"
              download="Сертифікати_Риббонів.pdf"
            >
              Завантажити Сертифікати Риббонів
            </a>
          </div>
        </div>
      </div>

      <appButton @click="router.push('/contacts')">
        Отримати індивідуальну консультацію по матеріалам
      </appButton>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import ButtonBack from "@/UI/ButtonBack.vue";
import appButton from "@/components/Button/appButton.vue";
const router = useRouter();

// Використовуємо import.meta.env.BASE_URL для коректного шляху
const basePath = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : import.meta.env.BASE_URL + '/';

// Динамічні шляхи для <a> тегів
const labelCertPath = computed(() => basePath + 'docs/label_certificates.pdf');
const ribbonCertPath = computed(() => basePath + 'docs/ribbon_certificates.pdf');


// Дані: Контроль якості ЕТИКЕТОК
const labelQuality = ref([
  {
    title: "Вхідний Контроль Сировини",
    description:
      "Кожен рулон самоклеючого матеріалу перевіряється на відповідність щільності, типу клею та сертифікату виробника (FSC, ISEGA).",
  },
  {
    title: "Точність Різки та Намотування",
    description:
      "Нарізка етикеток відбувається на високоточному обладнанні з автоматичним контролем зазору та відсутністю 'склеювань' у рулоні.",
  },
  {
    title: "Гарантія Клею",
    description:
      "Ми гарантуємо заявлені властивості клею (морозостійкість, посилення) та відсутність залишків клею на поверхні. ",
  },
]);

// Дані: Контроль якості РИББОНІВ
const ribbonQuality = ref([
  {
    title: "Сертифікація RoHS",
    description:
      "Всі наші риббони відповідають європейським директивам RoHS, що обмежують вміст шкідливих речовин.",
  },
  {
    title: "Сумісність з Харчовою Продукцією (FDA)",
    description:
      "Надаємо сертифікати FDA для певних типів WAX/RESIN та RESIN риббонів, що контактують з первинною упаковкою продуктів харчування.",
  },
  {
    title: "Якість Барвника",
    description:
      "Використовуємо фарбувальну стрічку, що забезпечує максимальну чіткість і стійкість друку, а також мінімальний знос термоголовки принтера.",
  },
]);

// ВИПРАВЛЕНО: Використовуємо window.open з динамічним шляхом
const viewCertificate = (type) => {
  const path = type === "labels" ? labelCertPath.value : ribbonCertPath.value;
  
  // Використовуємо window.open для коректного відкриття PDF-файлу в новій вкладці
  window.open(path, '_blank'); 
};
</script>

<style lang="scss" scoped>
$accent-color: #007bff;
$custom-color: #f09830; // Синій
$ribbon-color: #333; // Чорний для риббонів
$label-color: #f09830; // Світло-синій для етикеток

.quality-control-section {
  padding: 40px 0;
}

.title {
  color: #2c3e50;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.quality-badge {
  color: $custom-color;
  font-size: 14px;
}

.info-block {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;

  .card-header {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .subtitle {
    color: $custom-color;
    margin: 0;
  }
}

/* Стилі для Сітки та Карток */
.quality-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.qc-card {
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-top: 4px solid $custom-color;
  border-radius: 4px;
  background-color: #fcfcfc;
}

.qc-title {
  color: #333;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
}

/* Індивідуальні кольори блоків */
.label-quality-block {
  .subtitle {
    color: $label-color;
  }
  .qc-card {
    border-top-color: $label-color;
  }
  .cert-header {
    color: $label-color;
  }
}

.ribbon-quality-block {
  .subtitle {
    color: $ribbon-color;
  }
  .qc-card {
    border-top-color: $ribbon-color;
  }
  .cert-header {
    color: $ribbon-color;
  }
}

/* Стилі для Кнопок Сертифікатів */
.certificate-buttons {
  margin-top: 30px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.cert-header {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
}

.button-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.view-button {
  background-color: $custom-color;
  color: white;
  border: 1px solid $custom-color;
  flex-grow: 1;
  min-width: 250px;
}

.download-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $ribbon-color;
  color: white;
  border: 1px solid $ribbon-color;
  flex-grow: 1;
  min-width: 250px;
  &:hover {
    background-color: lighten($ribbon-color, 10%);
  }
}

@media (max-width: 768px) {
  .quality-grid {
    grid-template-columns: 1fr;
  }
  .button-group {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
