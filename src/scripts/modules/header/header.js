import on from 'dom-event'
import select from 'select-dom'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import {
  set,
  unset,
  toggle,
  contains,
  getHeight,
  isOver
} from 'lib/util'

// variables
const off = on.off
const breakpoint = 999

// 'close' function - remove is-active and set height to 0.
const close = (links, groups) => {
  unset(groups.concat(links), 'is-active')
  for (let group of groups) group.style.height = '0px'
}

class Header {
  constructor (el) {
    this.el = el
    this.links = select.all('.js-nav-parent-item', el)
    this.groups = select.all('.js-subnav', el)
    this.btnMobile = select('.js-btn-mobile', el)
    this.nav = select('.js-nav', el)
    this.navBackdrop = select('.js-nav-backdrop', el)
    this.queuedAction = false
    this.body = document.body
    this.main = select('.js-main')
    this.promobar = select('.js-promo-bar')

    this.state = {
      logoCompressed: false
    }

    this.hideNavigation = this.hideNavigation.bind(this)
    this.toggleSubNavByClick = this.toggleSubNavByClick.bind(this)
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
    this.hideActiveMenu = this.hideActiveMenu.bind(this)
    this.openSubNavOnEnter = this.openSubNavOnEnter.bind(this)
    this.closeSubNavOnLeave = this.closeSubNavOnLeave.bind(this)
    this.cancelClose = this.cancelClose.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.setBodyClass = this.setBodyClass.bind(this)
    this.maybeSetTopOffset = this.maybeSetTopOffset.bind(this)

    this.attachEventHandlers()
    this.resizeHandler()

    this.setBodyClass()
    this.maybeSetTopOffset()
  }

  attachEventHandlers () {
    for (let link of this.links) {
      const navLinkEl = select('.js-nav-link', link)
      on(navLinkEl, 'click', this.toggleSubNavByClick)
      on(link, 'mouseenter', this.openSubNavOnEnter)
      on(link, 'mouseleave', this.closeSubNavOnLeave)
    }

    for (let group of this.groups) {
      on(group, 'mouseleave', this.closeSubNavOnLeave)
      on(window, 'load', this.closeSubNavByFocusOut(group))
    }

    if (this.btnMobile) {
      on(this.btnMobile, 'click', this.toggleMobileNav)
    }

    if (this.navBackdrop) {
      on(this.navBackdrop, 'click', this.toggleMobileNav)
    }

    on(window, 'resize', this.resizeHandler)
    if (contains(this.el, 'sticky-header')) on(window, 'scroll', this.scrollHandler)
    on(window, 'promobarChange', () => {
      this.maybeSetTopOffset()
    })
  }

  scrollHandler () {
    const scrollTop = window.scrollY
    if (scrollTop > 0) {
      if (this.state.logoCompressed) return
      this.state.logoCompressed = true
      this.handleScrolled()
    } else {
      if (!this.state.logoCompressed) return
      this.state.logoCompressed = false
      this.handleScrolled()
    }
  }

  handleScrolled () {
    if (this.state.logoCompressed) {
      set(this.el, 'header--scrolled')
    } else {
      unset(this.el, 'header--scrolled')
    }
  }

  toggleSubNavByClick (e) {
    const item = e.target.closest('.js-nav-parent-item')
    const isActive = contains(item, 'is-active')
    const group = select('.js-subnav', item)
    const link = select('.js-nav-link', item)

    if (!link.getAttribute('href')) {
      e.stopPropagation()
    }

    if (isActive) {
      close(this.links, this.groups)
      link.setAttribute('aria-expanded', false)
    } else {
      group.style.height = getHeight(group.children[0])
      set([group, item], 'is-active')
      link.setAttribute('aria-expanded', true)
    }
  }

  closeSubNav (link) {
    close(this.links, this.groups)
    link.setAttribute('aria-expanded', false)
  }

  closeSubNavByFocusOut (group) {
    const groupItems = select.all('a', group)
    const fistItem = groupItems[0]
    const lastItem = groupItems[groupItems.length - 1]
    const link = select('.js-nav-link', group.parentNode)

    if (!link) {
      return
    }

    on(fistItem, 'keydown', event => {
      if (event.keyCode === 9 && event.shiftKey) {
        this.closeSubNav(link)
      }
    })

    on(lastItem, 'keydown', event => {
      if (event.keyCode === 9 && !event.shiftKey) {
        this.closeSubNav(link)
      }
    })

    on(link, 'keydown', event => {
      if (event.keyCode === 9 && event.shiftKey) {
        this.closeSubNav(link)
      }
    })
  }

  openSubNavOnEnter (e) {
    if (!isOver(breakpoint)) {
      return
    }

    const item = e.target.closest('.js-nav-parent-item')
    const isActive = contains(item, 'is-active')
    const group = select('.js-subnav', item)
    const link = select('.js-nav-link', item)

    if (!isActive) {
      group.style.height = getHeight(group.children[0])
      set([this.el, group, item], 'is-active')
      link.setAttribute('aria-expanded', true)
    }
  }

  closeSubNavOnLeave (e) {
    if (!isOver(breakpoint)) {
      return
    }

    const item = e.target.closest('.js-nav-parent-item')
    const isActive = contains(item, 'is-active')
    const link = select('.js-nav-link', item)
    const group = select('.js-subnav', item)

    if (!isActive) {
      return
    }

    unset([this.el, group, item], 'is-active')
    group.style.height = '0px'
    link.setAttribute('aria-expanded', false)
  }

  cancelClose () {
    clearTimeout(this.queuedAction)
  }

  navOffsetTop () {
    return this.el.offsetHeight + this.el.offsetTop
  }

  toggleMobileNav () {
    toggle(this.btnMobile, 'is-active')
    toggle(this.nav, 'is-active')
    toggle(this.el, 'is-active')

    const isActive = contains(this.nav, 'is-active')

    if (isActive) {
      set(this.nav, 'is-animated')
      this.btnMobile.setAttribute('aria-expanded', 'true')
      disableBodyScroll(this.nav)
    } else {
      setTimeout(() => {
        unset(this.nav, 'is-animated')
        this.btnMobile.setAttribute('aria-expanded', 'false')
      }, 300)
      enableBodyScroll(this.nav)
    }
    this.nav.style.height = isActive
      ? `calc(100vh - ${this.navOffsetTop()}px)`
      : '0px'

    this.nav.style.marginTop = isActive
      ? this.el.offsetTop + 'px'
      : '0px'

    this.navBackdrop.style.height = isActive
      ? `calc(100vh - ${this.navOffsetTop()}px)`
      : '0px'

    this.navBackdrop.style.top = isActive
      ? this.navOffsetTop() + 'px'
      : '0px'
  }

  hideNavigation () {
    close(this.links, this.groups)
    unset(this.btnMobile, 'is-active')
    unset(this.nav, 'is-active')
    this.nav.style.height = '0px'
    this.nav.style.marginTop = '0px'
  }

  resizeHandler () {
    if (!this.nav) {
      return
    }

    const isActive = contains(this.nav, 'is-active')

    if (isOver(breakpoint)) {
      /* Close mobile nav if active */
      if (isActive) {
        this.hideNavigation()
      }
    } else if (isActive) {
      this.nav.style.marginTop = this.el.offsetTop + 'px'
    }
    /* close navigation on desktop */
    close(this.links, this.groups)

    this.maybeSetTopOffset()
  }

  hideActiveMenu (e) {
    close(this.links, this.groups)
  }

  destroy () {
    off(this.header, 'click', this.toggleSubNav)
    off(this.btnMobile, 'click', this.toggleMobileNav)
    off(window, 'resize', this.resizeHandler)
    off(window, 'scroll', this.scrollHandler)
    off(window, 'click', this.hideActiveMenu)
  }

  setBodyClass () {
    if (contains(this.el, 'sticky-header')) {
      set(this.body, 'header-is-sticky')
    }

    if (contains(this.el, 'header--transparent')) {
      set(this.body, 'header-is-transparent')
    }
  }

  maybeSetTopOffset () {
    if (!this.promobar || !this.main) {
      return
    }

    if (
      contains(this.body, 'template') &&
      !contains(this.body, 'header-is-transparent')
    ) {
      const offsetTop = this.promobar.offsetHeight + this.el.offsetHeight
      if (contains(this.body, 'header-is-sticky')) {
        this.main.style.marginTop = `${offsetTop}px`
      }
      if (this.body.classList.contains('template-quiz')) {
        this.main.style.height = `calc(100vh - ${offsetTop}px)`
      }
    }
  }
}

export default el => new Header(el)
