import { ref } from "vue";
import { defineStore } from "pinia";

export const usePrintMarkStore = defineStore("printMark", () => {
  const showBurgerMenu = ref(false);
  const showModal = ref(false)

  return { showBurgerMenu, showModal };
});
