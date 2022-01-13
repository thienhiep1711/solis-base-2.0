import { initVue } from 'lib/components'
import store from './@store'

export default (el) => {
  const app = initVue({})
  app.use(store)
  app.mount(el)
}
