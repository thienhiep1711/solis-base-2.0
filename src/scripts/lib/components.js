import { createApp } from 'vue'
import store from '@/store'
import { selectAll } from '@/lib/dom'
import selene from '@solislab/selene/dist/selene.umd'

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

  app.use(selene, {
    'sel-video': 'video',
    'sel-button': 'button',
    'sel-select': 'select',
    'sel-text-input': 'text-input',
    'sel-dialog': 'dialog',
    'sel-slideout': 'slideout',
    'sel-expansion': 'expansion',
    'sel-backdrop': 'backdrop',
    'sel-badge': 'badge',
    'sel-panel': 'panel',
  })

  app.use(store)
  app.mount(`[is="${selector}"]`)
}

export {
  initComponent,
  initVueComponent
}
