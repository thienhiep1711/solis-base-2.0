import init from 'lib/init'
import {set, isIEorEdge, isTouch} from 'lib/util'
import animate from 'lib/animate'
import easyLockdownFix from 'lib/easylockdown-fix'

import 'styles/main.css'

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }

  animate(document)
  easyLockdownFix()

  init().mount()
})
