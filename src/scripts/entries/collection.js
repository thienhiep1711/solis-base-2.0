import init from 'lib/init'
import { set, isIEorEdge, isTouch } from 'lib/utils'
import { initComponent } from 'lib/components'

import plp from 'modules/plp/plp.js'

import 'styles/main.css'

initComponent(plp, 'plp')

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }
  init().mount()
})
