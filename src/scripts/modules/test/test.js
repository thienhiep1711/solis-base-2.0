import { createApp } from 'vue'
import store from './@store'
import { useStore } from 'vuex'

export default (el) => {
  const app = createApp({
    name: "TestSingle",
    setup () {
      const store = useStore()
      console.log(store)
    },
    data () {
      return {
        value: 'test'
      }
    }
  })
  app.use(store)
  app.mount(el)
}
