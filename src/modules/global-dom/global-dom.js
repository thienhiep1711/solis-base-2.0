import { initVue } from 'lib/components'

export default (el) => {
  const app = initVue({
    name: 'GlobalDomApp'
  })
  app.mount(el)
}
