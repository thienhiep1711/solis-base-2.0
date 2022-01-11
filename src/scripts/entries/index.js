import { set, isIEorEdge, isTouch } from 'lib/utils'
import { initComponent, initVueComponent } from 'lib/components'

import test from 'modules/test/test.js'
import testVue from 'modules/test/test.vue'

import 'styles/main.css'

initComponent(test, 'test')
initVueComponent(testVue, 'testVue', 'test-2')

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }
})
