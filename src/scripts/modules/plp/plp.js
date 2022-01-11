import { createApp } from 'vue'
import store from './@store'
import { useStore } from 'vuex'

export default (el) => {
  const app = createApp({
    name: "Plp",
    setup () {
      const store = useStore()
      console.log('test local store', store)
    },
    data () {
      return {
        value: 'plp'
      }
    }
  })
  app.use(store)
  app.mount(el)
}
