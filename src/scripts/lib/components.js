import { createApp } from 'vue'
import store from '@/store'
import { selectAll } from '@/lib/dom'

const initComponent = (Component, selector) => {
  const elements = selectAll(`[data-component="${selector}"]`)

  elements.forEach(element => {
    element.removeAttribute('data-component')
    Component(element)
  })
}

const initVueComponent = (Component, componentName, selector) => {
  const components = {}
  components[componentName] = Component

  const app = createApp(Component)

  app.use(store)
  app.mount(`[is="${selector}"]`)
}

export {
  initComponent,
  initVueComponent
}
