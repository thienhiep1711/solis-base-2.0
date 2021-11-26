import select from 'select-dom'
import on from 'dom-event'

const STICKY_SELECTOR = '.js-sticky-flexible-header'
const SITE_HEADER_SELECTOR = '.js-site-header'

export default (el) => {
  const headerEl = select(SITE_HEADER_SELECTOR)
  const stickyEl = select(STICKY_SELECTOR)
  const isSticky = el.getAttribute('data-sticky') === 'true'

  const main = () => {
    const headerHeight = headerEl ? headerEl.offsetHeight : 0
    if (stickyEl && isSticky) {
      stickyEl.setAttribute('style', `top: ${headerHeight}px`)
    } else {
      stickyEl.setAttribute('style', 'position: static')
    }
  }

  main()
  on(window, 'resize', main)
}
