import { createApp } from 'vue'
import store from 'scripts/store'
import globalMixins from '../mixins/global'
import { selectAll } from 'scripts/lib/dom'
import selene from '@solislab/selene/dist/selene.umd'

const initComponent = (Component, selector) => {
  const elements = selectAll(`[data-module="${selector}"]`)

  elements.forEach(element => {
    element.removeAttribute('data-module')
    Component(element)
  })
}

const initVue = (options = {}) => {
  const app = createApp(options)

  app.mixin(globalMixins)

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
    'sel-panel': 'panel'
  })

  return app
}

const initVueComponent = (Component, componentName, selector) => {
  const components = {}
  components[componentName] = Component
  const elements = selectAll(`[is="${selector}"]`)
  if (elements && elements.length) {
    elements.forEach(element => {
      const app = initVue({
        components
      })
      app.use(store)
      app.mount(element)
    })
  }
}

export {
  initComponent,
  initVue,
  initVueComponent
}
