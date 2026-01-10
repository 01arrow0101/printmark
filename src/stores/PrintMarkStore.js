import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

export const usePrintMarkStore = defineStore("printMark", () => {
  const router = useRouter();
  const showBurgerMenu = ref(false);
  const showModal = ref(false);
  const currentTab = ref(null);

  // 1. Динамічний імпорт усіх зображень
  // Створюємо мапу, яка містить публічні URL всіх файлів у /src/assets/img/
  const allAssetsMap = import.meta.glob(
    // Увага: переконайтеся, що шлях відповідає вашим асетам!
    "/src/assets/img/**/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );

  const getOptimizedAssetUrl = (currentPath) => {
    // Ключ для пошуку у мапі завжди починається з кореня '/src/'
    const key = `/src/assets/img/${currentPath}`;

    const url = allAssetsMap[key];
    if (!url) {
      console.warn(`Ассет не знайдено в мапі glob: ${key}`);
      return "";
    }
    return url;
  };

  // 2. Логіка переходу (Вам потрібно адаптувати шляхи!)
  const setTab = (type) => {
    currentTab.value = type;
    // ПРИКЛАД: Використовуйте Vue Router для переходу
    const routes = {
      wax: "/products/ribbons/wax",
      "wax-resin": "/products/ribbons/wax-resin",
      resin: "/products/ribbons/resin",
      "resin-textile": "/products/ribbons/resin-textile",
      "thermo-eco": "/products/labels/thermo-eco",
      "thermo-top": "/products/labels/thermo-top",
      "semi-gloss": "/products/labels/semi-gloss",
      polypropylene: "/products/labels/polypropylene",
      // 'polyester': '/labels/polyester'
    };
    if (routes[type]) {
      router.push(routes[type]);
    }
  };
  return {
    showBurgerMenu,
    showModal,
    getOptimizedAssetUrl,
    setTab,
    currentTab,
  };
});
