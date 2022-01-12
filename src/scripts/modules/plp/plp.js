import { createApp } from 'vue'
import store from './@store'
import { useStore } from 'vuex'
import selene from '@solislab/selene/dist/selene.umd'

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
    },
    methods: {
      open () {
        console.log(this.value)
      }
    }
  })
  app.use(selene, {
    'sel-button': 'button'
  })
  app.use(store)
  app.mount(el)
}
