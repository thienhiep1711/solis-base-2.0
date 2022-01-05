import {set, isIEorEdge, isTouch} from 'lib/util'
import initializer from 'lib/initializer'
import lazyModule from 'lib/lazy-module'
import animate from 'lib/animate'
const footer = lazyModule('footer', { offset: 120 })

import 'styles/main.css'

initializer({
  'animate': animate,
  'footer': footer
})

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }

  animate(document)
})
