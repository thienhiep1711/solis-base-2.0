import select from 'select-dom'
import on from 'dom-event'
import nanoajax from 'nanoajax'

export const isMobile = () => window.innerWidth < 768

export const isTouch = () => 'ontouchstart' in document.documentElement

export const supportsObjectFit = () => {
  let objectFit = false
  for (let prop in document.documentElement.style) {
    if (/object(?:-f|F)it$/.test(prop)) {
      objectFit = true
      break
    }
  }
  return objectFit
}

export const isIE = () => {
  return navigator.userAgent.toLowerCase().indexOf('msie') > 0
}

export const isIEorEdge = () => {
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}

export const isFirefox = () => {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
}

export const write = (el, value) => {
  el.innerHTML = value
}

export const set = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.add(selector)
    }
  } else {
    item.classList.add(selector)
  }
}

export const unset = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.remove(selector)
    }
  } else {
    item.classList.remove(selector)
  }
}

export const contains = (item, selector) => {
  return item.classList.contains(selector)
}

export const toggle = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.toggle(selector)
    }
  } else {
    item.classList.toggle(selector)
  }
}

export const getHeight = (el) => {
  return `${el.offsetHeight}px`
}

export const getWidth = (el) => {
  return `${el.offsetWidth}px`
}

export const isOver = (breakpoint) => {
  return (window.innerWidth > breakpoint)
}

export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

export const formatPrice = (num, fraction = 2) => {
  return (Number(num) / 100).toLocaleString('en-EN', {
    minimumFractionDigits: fraction
  })
}

export const formatMoney = (cents, format = window.BARREL.moneyFormat) => {
  if (typeof cents === 'string') { cents = cents.replace('.', '') }
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/
  let formatString = format
  let value = ''

  const defaultOption = (opt, def) => {
    return (typeof opt === 'undefined' ? def : opt)
  }

  const formatWithDelimiters = (number, precision, thousands, decimal) => {
    precision = defaultOption(precision, 2)
    thousands = defaultOption(thousands, ',')
    decimal = defaultOption(decimal, '.')

    if (isNaN(number) || number == null) { return 0 }

    number = (number / 100.0).toFixed(precision)

    const parts = number.split('.')
    const dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands)
    const cents = parts[1] ? (decimal + parts[1]) : ''

    return dollars + cents
  }

  if (formatString.match(placeholderRegex)) {
    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2)
        break
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0)
        break
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',')
        break
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',')
        break
    }
  } else {
    formatString = '$' + '{{amount}}'
    value = formatWithDelimiters(cents, 2)
  }

  return formatString.replace(placeholderRegex, value)
}

export const getUrlParam = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') // eslint-disable-line
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  let results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const handleize = str => str.replace(/[ /_]/g, '-').toLowerCase()

/**
 * Decodes a string that has been encode through the 'url_encode' Shopify filter
 * @param {*} str
 */
export const decode = str => decodeURIComponent(str).replace(/\+/g, ' ')

/**
 * Generates a URL that is suitable for the Shopify
 * image CDN. Adds the current image size suffix.
 *
 * @param {*} src
 * @param {*} size
 */
export const getImageWithSize = (src = '', size = 1000) => {
  return ('' + src).replace(/([.](?:jpe?g|png))/, `_${size}x$1`)
}

/**
 * Used by components like the product card to select
 * the current product image based on the active color.
 * If there is no active color, a fallback image
 * should be returned if it is defined.
 *
 * @param {*} color
 * @param {*} media
 * @param {*} hover
 * @param {*} fallback
 */
export const getProductImage = (color, media, hover = false, fallback = false) => {
  const key = `(${handleize(color || '')}${hover ? '-hover' : ''})`.toLowerCase()

  const image = (media || []).find(mediaItem => {
    const alt = mediaItem.alt || ''

    return mediaItem.media_type === 'image' &&
      mediaItem.alt !== null && (alt.toLowerCase().includes(key) || handleize(alt).toLowerCase().includes(key) || mediaItem.src.toLowerCase().includes(key))
  })

  if (!image) {
    if (fallback) {
      return getImageWithSize(fallback, 600)
    }

    return false
  }

  return getImageWithSize(image.src, 600)
}

export const createArrayFromNumRange = (size, start) => {
  return Array.from(Array(size), (_, i) => start + i)
}

export const createMonthArray = () => {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

export const docOffset = (el) => {
  let rect = el.getBoundingClientRect()
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

/* Element.closest() polyfill for IE11 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this

    do {
      if (el.matches(s)) return el
      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === 1)
    return null
  }
}

/* CustomEvent polyfill */
(function () {
  if (typeof window.CustomEvent === 'function') return false

  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  CustomEvent.prototype = window.Event.prototype

  window.CustomEvent = CustomEvent
})()

/* Trap focus into a particular element */
// TODO: remove this implementation of trapFocus, leverage the one in @shopify/theme-a11y
export const trapFocus = (elem) => {
  const focusableEls = select.all(['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'], elem)

  if (focusableEls.length) {
    const firstFocusableEl = focusableEls[0]
    const lastFocusableEl = focusableEls[focusableEls.length - 1]

    // Redirect first Shift+Tab to the last focusable element
    on(firstFocusableEl, 'keydown', e => {
      if (e.keyCode === 9 && e.shiftKey) {
        e.preventDefault()
        lastFocusableEl.focus()
      }
    })

    // Redirect last Tab to the first focusable element
    on(lastFocusableEl, 'keydown', e => {
      if (e.keyCode === 9 && !e.shiftKey) {
        e.preventDefault()
        firstFocusableEl.focus()
      }
    })
  }
}

const _getQueryPattern = (key) => new RegExp(`[?&]${key}=([^&]+)`)

export const removeQueryVar = (key, url = window.location.href) => {
  const idx = url.indexOf('?')

  if (idx === -1) {
    return url
  }

  const pattern = _getQueryPattern(key)
  const replaced = url.replace(pattern, '').replace(/\?$/, '')

  if (replaced.indexOf('&') !== -1 && replaced.indexOf('?') === -1) {
    return replaced.replace(/&/, '?')
  }

  return replaced
}

export const addQueryVar = (key, value, url = window.location.href) => {
  const removed = removeQueryVar(key, url)
  if (!value && value !== 0) {
    return removed
  }
  return `${removed}${removed.indexOf('?') === -1 ? '?' : '&'}${key}=${value}`
}

export const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    nanoajax.ajax(
      { url },
      (code, res) => {
        res = JSON.parse(res)
        resolve(res)
      }
    )
  })
}

export const style = (item, property, value) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.style[property] = value
    }
  } else {
    item.style[property] = value
  }
}

export const unstyle = (item, property) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.style.removeProperty(property)
    }
  } else {
    item.style.removeProperty(property)
  }
}

export const isEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }

  return true
}

export const removeElement = el => {
  el.parentNode.removeChild(el)
}

/**
 * Storefront API IDs Generator
 * @param {string} type Object type
 * @param {string} databaseKey Object ID
 * @returns {string} GraphQL ID
 */
export const normalizeId = (type, databaseKey) => {
  return btoa(`gid://shopify/${type}/${databaseKey}`)
}
