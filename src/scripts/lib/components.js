import Vue from 'vue'
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

  new Vue({
    el: `[is="${selector}"]`,
    components,
    store
  })
}

export {
  initComponent,
  initVueComponent
}
