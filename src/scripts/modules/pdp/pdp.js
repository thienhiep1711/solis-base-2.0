import { createApp } from 'vue'
import store from './@store'
import { useStore } from 'vuex'

export default (el) => {
  const app = createApp({
    name: "Pdp",
    setup () {
      const store = useStore()
      console.log('test local store', store)
    },
    data () {
      return {
        value: 'pdp'
      }
    }
  })
  app.use(store)
  app.mount(el)
}
