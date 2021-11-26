import select from 'select-dom'
import on from 'dom-event'
import { set, unset } from 'lib/util'

const elements = select.all('.js-promo-bar')
const main = select('#main')

/* eslint-disable-next-line */
const event = new CustomEvent('promobarChange', {})

export default () => {
  for (let el of elements) {
    let close = select('.js-close', el)
    let content = select('.js-content', el).innerHTML

    const showPromoBar = () => {
      el.style.display = 'block'
      set(main, 'has-promo')
      unset(main, 'has-promo-closed')
      window.dispatchEvent(event)
    }

    const disablePromoBar = () => {
      window.sessionStorage.setItem('promo', content)
    }

    const hidePromoBar = () => {
      el.style.display = 'none'
      set(main, 'has-promo-closed')
      unset(main, 'has-promo')
      window.dispatchEvent(event)
    }
    if (window.sessionStorage.getItem('promo') !== content) {
      showPromoBar()
    } else {
      hidePromoBar()
    }

    on(close, 'click', () => {
      disablePromoBar()
      hidePromoBar()
    })
  }
}
