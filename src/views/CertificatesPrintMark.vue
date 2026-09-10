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
        європейських та вітчизняних виробників. Кожен етап виробництва проходить ретельну
        перевірку, що підтверджується відповідними документами.
      </p>

      <!-- БЛОК 1: ЕТИКЕТКИ -->
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

      <!-- БЛОК 2: РІББОНИ -->
      <div class="info-block ribbon-quality-block">
        <div class="card-header">
          <h2 class="subtitle">
            ⚫️ Сертифікація Фарбувальних Стрічок (Ріббонів) та PPWR
          </h2>
        </div>
        <div class="card-content quality-grid">
          <div v-for="qc in ribbonQuality" :key="qc.title" class="qc-card">
            <h3 class="qc-title">{{ qc.title }}</h3>
            <p>{{ qc.description }}</p>
          </div>
        </div>

        <div class="certificate-buttons">
          <h3 class="cert-header">Сертифікати на відповідність (RoHS, FDA, PPWR)</h3>
          <div class="button-group">
            <appButton class="view-button" @click="viewCertificate('ribbons')">
              Переглянути Сертифікати Ріббонів
            </appButton>
            <a
              class="download-button"
              :href="ribbonCertPath"
              download="Сертифікати_Ріббонів.pdf"
            >
              Завантажити Сертифікати Ріббонів
            </a>
          </div>
        </div>
      </div>

      <!-- БЛОК 3: ГІГІЄНА (САНІТАРНИЙ ВИСНОВОК) -->
      <div class="info-block hygiene-quality-block">
        <div class="card-header">
          <h2 class="subtitle">
            🛡️ Державна Санітарно-Епідеміологічна Експертиза
          </h2>
        </div>
        <div class="card-content quality-grid">
          <div v-for="qc in hygieneQuality" :key="qc.title" class="qc-card">
            <h3 class="qc-title">{{ qc.title }}</h3>
            <p>{{ qc.description }}</p>
          </div>
        </div>

        <div class="certificate-buttons">
          <h3 class="cert-header">Офіційний висновок СЕС України</h3>
          <div class="button-group">
            <appButton class="view-button view-button-hygiene" @click="viewCertificate('hygiene')">
              Переглянути Висновок СЕС
            </appButton>
            <a
              class="download-button download-button-hygiene"
              :href="hygieneCertPath"
              download="Санітарний_Висновок.pdf"
            >
              Завантажити Висновок СЕС
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
const hygieneCertPath = computed(() => basePath + 'docs/hygiene_conclusion.pdf'); // Шлях до файлу гігієни


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

// Дані: Контроль якості Ріббонів (включно з новими даними PPWR з попереднього файлу)
const ribbonQuality = ref([
  {
    title: "Сертифікація RoHS та Регламент PPWR",
    description:
      "Всі стрічки відповідають європейським директивам RoHS та регламенту ЄС 2024/40 про упаковку та відходи (PPWR), обмежуючи вміст шкідливих речовин, важких металів та PFAS.",
  },
  {
    title: "Сумісність з Харчовою Продукцією (FDA)",
    description:
      "Надаємо сертифікати FDA для певних типів WAX/RESIN та RESIN Ріббонів, що контактують з первинною упаковкою продуктів харчування.",
  },
  {
    title: "Якість Барвника",
    description:
      "Використовуємо фарбувальну стрічку, що забезпечує максимальну чіткість і стійкість друку, а також мінімальний знос термоголовки принтера.",
  },
]);

// Дані: Санітарно-гігієнічний висновок (Третій файл)
const hygieneQuality = ref([
  {
    title: "Державна Експертиза України",
    description:
      "Продукція (стрічка барвника в рулонах) пройшла державну санітарно-епідеміологічну експертизу в Інституті медицини праці імені Ю.І. Кундієва НАМН України.",
  },
  {
    title: "Відповідність Санітарному Законодавству",
    description:
      "Матеріали повністю відповідають чинним нормам санітарного законодавства України та допущені до використання у заявленій сфері застосування.",
  },
  {
    title: "Безпека та Контроль",
    description:
      "Висновок підтверджує безпеку використання витратних матеріалів згідно з встановленими технічними умовами (ТУ У 32.9-37847756-001:2020).",
  },
]);

// Використовуємо window.open з динамічним шляхом для всіх типів
const viewCertificate = (type) => {
  let path = labelCertPath.value;
  if (type === "ribbons") path = ribbonCertPath.value;
  if (type === "hygiene") path = hygieneCertPath.value;
  
  window.open(path, '_blank'); 
};
</script>

<style lang="scss" scoped>
$accent-color: #007bff;
$custom-color: #f09830; // Помаранчевий
$ribbon-color: #333; // Чорний для Ріббонів
$label-color: #f09830; // Колір для етикеток
$hygiene-color: #00897b; // Зеленуватий/Бірюзовий для гігієни (санітарний блок)

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

.hygiene-quality-block {
  .subtitle {
    color: $hygiene-color;
  }
  .qc-card {
    border-top-color: $hygiene-color;
  }
  .cert-header {
    color: $hygiene-color;
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

.view-button-hygiene {
  background-color: $hygiene-color;
  border-color: $hygiene-color;
  &:hover {
    background-color: darken($hygiene-color, 5%);
  }
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
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: lighten($ribbon-color, 10%);
  }
}

.download-button-hygiene {
  background-color: #555;
  border-color: #555;
  &:hover {
    background-color: #444;
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