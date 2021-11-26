import on from 'dom-event'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import select from 'select-dom'
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
const LOGO_SCROLL_OFFSET = 200
// 'close' function - remove is-active and set height to 0.
const close = (links, groups) => {
  //
  unset(groups.concat(links), 'is-active')
  for (let group of groups) {
    group.style.height = '0px'
  }
}

class Header {
  constructor (el) {
    this.el = el
    this.links = select.all('.js-link', el)
    this.groups = select.all('.js-subnav', el)
    this.btnMobile = select('.js-btn-mobile', el)
    this.nav = select('.js-nav', el)
    this.queuedAction = false
    this.logoLink = select('.js-logo-link', el)
    this.sideLinks = select.all('.js-side-link', el)
    this.subNavLinks = select.all('.js-subnav-link', el)

    this.hideNavigation = this.hideNavigation.bind(this)
    this.toggleSubNavByClick = this.toggleSubNavByClick.bind(this)
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
    this.hideActiveMenu = this.hideActiveMenu.bind(this)
    this.openSubNavOnEnter = this.openSubNavOnEnter.bind(this)
    this.openSubNav = this.openSubNav.bind(this)
    this.closeSubNavOnLeave = this.closeSubNavOnLeave.bind(this)
    this.closeSubNav = this.closeSubNav.bind(this)
    this.cancelClose = this.cancelClose.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.openParentSubNavOnFocus = this.openParentSubNavOnFocus.bind(this)

    this.state = {
      open: false,
      subNavOpen: false,
      logoCompressed: false
    }

    this.attachEventHandlers()
    this.resizeHandler()
  }

  attachEventHandlers () {
    for (let link of this.links) {
      on(link, 'click', this.toggleSubNavByClick)
      on(link, 'mouseenter', this.openSubNavOnEnter)
      on(link.parentNode, 'mouseleave', this.closeSubNavOnLeave)
      on(link, 'focus', this.openSubNavOnEnter)
    }

    /* close any subnav that is already open when focusing logo link or side links */
    on(this.logoLink, 'focus', this.closeSubNav)
    for (let link of this.sideLinks) {
      on(link, 'focus', this.closeSubNav)
    }

    for (let link of this.subNavLinks) {
      on(link, 'focus', this.openParentSubNavOnFocus)
    }

    for (let group of this.groups) {
      on(group, 'mouseleave', this.closeSubNavOnLeave)
    }
    on(this.btnMobile, 'click', this.toggleMobileNav)
    on(window, 'resize', this.resizeHandler)
    on(window, 'scroll', this.scrollHandler)
    on(window, 'click', this.hideActiveMenu)
  }

  scrollHandler () {
    const scrollTop = window.scrollY
    if (scrollTop > LOGO_SCROLL_OFFSET) {
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
    e.preventDefault()
    e.stopPropagation()

    const el = e.target
    const link = e.currentTarget
    const isActive = contains(link, 'is-active')
    const group = select('.js-subnav', link.parentNode)

    if (isOver(breakpoint) || !group) {
      return
    }

    close(this.links, this.groups)

    if (!isActive) {
      group.style.height = getHeight(group.children[0])
      set([group, link], 'is-active')
    }
  }

  openSubNavOnEnter (e) {
    if (!isOver(breakpoint)) {
      return
    }

    /* Close any subnav that is already open */
    this.closeSubNav()

    const link = e.currentTarget
    const isActive = contains(link, 'is-active')
    const group = select('.js-subnav', link.parentNode)

    if (!group) return

    if (!isActive) {
      this.openSubNav(group, link)
    }
    disableBodyScroll(this.nav)
  }

  openParentSubNavOnFocus (e) {
    const subnav = e.target.closest('.header-mega__subnav')

    if (!subnav || subnav.classList.contains('is-active')) {
      return
    }

    this.openSubNav(subnav, select('.js-link', subnav.parentNode))
  }

  openSubNav (group, link) {
    group.style.height = getHeight(group.children[0])
    set([group, link, this.el], 'is-active')
    set([document.body], 'menu-open')
  }

  closeSubNavOnLeave (e) {
    if (!isOver(breakpoint)) {
      return
    }

    const link = e.currentTarget
    const isActive = contains(link, 'is-active')
    const group = select('.js-subnav', link)
    enableBodyScroll(this.nav)

    if (!isActive) {
      return
    }
    this.queuedAction = setTimeout(() => {
      this.closeSubNav()
    }, 300)
  }

  closeSubNav () {
    close(this.links, this.groups)
    unset(this.el, 'is-active')
    unset(document.body, 'menu-open')
  }

  cancelClose () {
    clearTimeout(this.queuedAction)
  }

  toggleMobileNav () {
    toggle(this.btnMobile, 'is-active')
    toggle(this.nav, 'is-active')
    toggle(this.el, 'is-active')
    toggle(document.body, 'menu-open')

    if (contains(document.body, 'menu-open')) {
      disableBodyScroll(this.nav)
    } else {
      enableBodyScroll(this.nav)
    }

    if (contains(this.nav, 'is-active')) {
      set(this.nav, 'is-animated')
    } else {
      setTimeout(() => {
        unset(this.nav, 'is-animated')
      }, 300)
    }
  }

  hideNavigation () {
    close(this.links, this.groups)
    unset(this.btnMobile, 'is-active')
    unset(this.nav, 'is-active')
    unset(document.body, 'menu-open')
    this.nav.style.height = '0px'
    enableBodyScroll(this.nav)
  }

  resizeHandler () {
    if (isOver(breakpoint)) {
      /* Close mobile nav if active */
      if (contains(this.nav, 'is-active')) {
        this.hideNavigation()
      }
    }
    /* close navigation on desktop */
    close(this.links, this.groups)
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
}

export default el => new Header(el)
