import './picture.css'
import { select, selectAll, on } from 'lib/dom'
import objectFitImages from 'object-fit-images'
import { set } from 'lib/utils'
require('intersection-observer')

export const loadSrc = (el, isVue = false) => {
  el.setAttribute('src', el.getAttribute('data-src'))
  if (!isVue) el.removeAttribute('data-src')
}

export const loadSrcsets = (els, isVue = false) => {
  els.forEach(els => {
    els.setAttribute('srcset', els.getAttribute('data-srcset'))
    if (!isVue) els.removeAttribute('data-srcset')
  })
}

export const initImageObserver = () => {
  const config = {
    threshold: 0
  }

  window.imageObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.hasAttribute('data-src')) loadSrc(entry.target, true)

        const sourceEls = selectAll('[data-srcset]', entry.target.parentNode)

        if (sourceEls) loadSrcsets(sourceEls, true)

        // Observer has been passed as self to our callback
        self.unobserve(entry.target)
      }
    })
  }, config)
}

export const observeNewImage = (el) => {
  window.imageObserver.observe(el)
}

export const init = (el, imgEl, sourceEls, isVue = false) => {
  // Check if native lazy-loading is supported, else use IntersectionObserver
  if ('loading' in HTMLImageElement.prototype) {
    loadSrc(imgEl, isVue)
    if (sourceEls) loadSrcsets(sourceEls, isVue)
  } else {
    // Init imageObserver as a global variable
    if (!window.imageObserver) initImageObserver()

    observeNewImage(imgEl)
  }

  on('load', () => {
    isVue ? el.isLoaded = true : set(el, 'is-loaded')
    objectFitImages(imgEl)
  }, imgEl)
}

export default (el) => {
  const imgEl = select('[data-src]', el)
  const sourceEls = selectAll('[data-srcset]', el)

  if (imgEl) init(el, imgEl, sourceEls, false)
}
