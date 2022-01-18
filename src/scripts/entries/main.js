import {set, isIEorEdge, isTouch} from 'lib/utils'
import { initComponent } from 'lib/components'

import 'styles/main.css'

import Hero from 'modules/hero/hero'
import Picture from 'modules/picture/picture'
initComponent(Hero, 'hero')
initComponent(Picture, 'picture')

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }
})
