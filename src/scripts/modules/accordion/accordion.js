import select from 'select-dom'
import on from 'dom-event'
import { set, unset, contains, getHeight } from 'lib/util'

const ACCORDION_ACTIVE_CLASS = 'accordion__item--active'
const ACCORDION_FOCUS_CLASS = 'is-focus'
const ACCORDION_CONTENT_SELECTOR = '.js-content'
const ACCORDION_BUTTON_SELECTOR = '.js-btn'
const ACCORDION_ITEM_SELECTOR = '.js-item'

const close = (items) => {
  unset(items, ACCORDION_ACTIVE_CLASS)
  items.map(item => {
    let content = select(ACCORDION_CONTENT_SELECTOR, item)
    let btn = select(ACCORDION_BUTTON_SELECTOR, item)
    unset(btn, ACCORDION_FOCUS_CLASS)
    content.style.height = '0px'
  })
}

export default (el) => {
  const list = select.all(ACCORDION_ITEM_SELECTOR)
  if (list.length) {
    const toggleDescription = (item) => {
      const accordion = item.parentNode
      const content = select(ACCORDION_CONTENT_SELECTOR, accordion)

      if (!contains(accordion, ACCORDION_ACTIVE_CLASS)) {
        close(list)
        set(accordion, ACCORDION_ACTIVE_CLASS)
        content.style.height = getHeight(content.children[0])
      } else {
        close(list)
      }
    }

    list.map(item => {
      const button = select(ACCORDION_BUTTON_SELECTOR, item)
      if (button) {
        on(button, 'click', () => {
          toggleDescription(button)
        })
      }
    })

    on(window, 'resize', () => {
      const active = select('.' + ACCORDION_ACTIVE_CLASS, el)
      if (active) {
        const content = select(ACCORDION_CONTENT_SELECTOR, active)
        content.style.height = getHeight(content.children[0])
      }
    })
  }
}
