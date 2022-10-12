import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore('state', () => {

  // const count = ref(0)
  // const name = ref('Eduardo')
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  // return { count, name, doubleCount, increment }

  const user = ref(
    {
      isLogin: false,
      jwt: '',
      user: {},
      role: {},
    }
  )
  const form = ref({
    coordinate: '',
  })

  return { user, form }
})