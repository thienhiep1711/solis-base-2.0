import init from 'lib/init'
import {set, isIEorEdge, isTouch} from 'lib/utils'

import 'styles/main.css'

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }

  init().mount()
})
