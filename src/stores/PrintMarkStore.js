import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrintMarkStore = defineStore('printMark', () => {
  const linkIndex = ref(0)



  return { linkIndex  }
})
