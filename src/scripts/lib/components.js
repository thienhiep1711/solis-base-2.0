import { createApp } from 'vue'
import emit from 'mitt'
import store from 'scripts/store'
import globalMixins from '../mixins/global'
import { selectAll } from 'scripts/lib/dom'
import selene from '@solislab/selene/dist/selene.umd'

const emitter = emit()

const initComponent = (Component, selector) => {
  const elements = selectAll(`[data-module="${selector}"]`)

  elements.forEach(element => {
    element.removeAttribute('data-module')
    Component(element)
  })
}

const initVue = (options = {}) => {
  const app = createApp(options)

  app.config.globalProperties.emitter = emitter

  app.mixin(globalMixins)

  app.use(selene, {
    'sel-video': 'sel-video',
    'sel-button': 'sel-button',
    'sel-select': 'sel-select',
    'sel-text-input': 'sel-text-input',
    'sel-dialog': 'sel-dialog',
    'sel-slideout': 'sel-slideout',
    'sel-expansion': 'sel-expansion',
    'sel-backdrop': 'sel-backdrop',
    'sel-badge': 'sel-badge',
    'sel-panel': 'sel-panel',
    'sel-checkbox': 'sel-checkbox',
    'sel-number-control': 'sel-number-control'
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
