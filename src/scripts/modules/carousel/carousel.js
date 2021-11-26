import Flickity from 'lib/flickity-custom-page-dots'
import select from 'select-dom'
import on from 'dom-event'
import { set, style, unstyle, decode } from 'lib/util'

const INIT_CLASS = 'is-init'
const INACTIVE_CLASS = 'is-inactive'
const MOBILE_BREAKPOINT = 768

/**
 * Get module options based on data-module attribute and default options params
 * @param newOptionsEncoded
 * @param currentOptions
 */
const getModuleOptions = (string, def = {}) => {
  let options = {}
  try {
    options = JSON.parse(decode(string))
  } catch (e) {
    console.warn('Invalid option JSON string.')
    console.trace()

    return def
  }

  return Object.assign({}, def, options)
}

/**
 * Ensures that all carousel slides fill to the
 * height of the largest. Cannot use Flex here
 * because cells are absolutely positioned.
 */
const forceEqualHeight = (slides = []) => {
  let max = 0

  slides.forEach((slide) => {
    unstyle(slide, 'height')
    max = slide.offsetHeight > max ? slide.offsetHeight : max
  })

  slides.forEach((slide) => {
    style(slide, 'height', `${(max)}px`)
  })
}

/**
 * Trigger prev/next button for asNavFor
 */
const asNavForOnPrevNextClick = (flkty, options, slides) => {
  if (flkty && options.hasOwnProperty('asNavFor')) {
    setTimeout(function () {
      const navFlickity = flkty.navCompanion
      if (navFlickity) {
        const nextButton = flkty.nextButton
        const prevButton = flkty.prevButton
        if (nextButton && prevButton) {
          const nextButtonEl = flkty.nextButton.element
          const prevButtonEl = flkty.prevButton.element
          on(prevButtonEl, 'click', () => {
            navFlickity.previous()
          })
          on(nextButtonEl, 'click', () => {
            navFlickity.next()
          })
        }

        slides.forEach((slide, index) => {
          on(slide, 'click', () => {
            navFlickity.select(index)
          })
        })
      }
    })
  }
}

/**
 * Align arrows to images height instead of using the whole item height
 * @param el
 * @param flkty
 * @param options
 */
const alignArrowsToImages = (el, flkty, options) => {
  if (flkty && options.alignArrowsToImage) {
    const arrows = []
    const carouselImage = select('img', el)
    const nextButton = flkty.nextButton
    const prevButton = flkty.prevButton
    if (nextButton) arrows.push(nextButton.element)
    if (prevButton) arrows.push(prevButton.element)
    if (arrows.length && carouselImage) {
      arrows.forEach(arrow => {
        arrow.style.top = `${carouselImage.offsetHeight / 2}px`
      })
    }
  }
}

const flktyToShow = (flkty) => {
  let itemCells = flkty.options.breakpoints.mobile

  if (matchMedia('screen and (min-width: 768px)').matches) {
    itemCells = flkty.options.breakpoints.tablet
  }

  if (matchMedia('screen and (min-width: 1000px)').matches) {
    itemCells = flkty.options.breakpoints.tabletHorizontal
  }

  if (matchMedia('screen and (min-width: 1200px)').matches) {
    itemCells = flkty.options.breakpoints.desktop
  }

  if (flkty.cells.length <= itemCells) {
    flkty.destroy()
  }
}

const init = (el, slides, flkty, customOptions, mobileOptions) => {
  const carouselEl = select('.js-carousel', el)
  const options = (mobileOptions && window.innerWidth < MOBILE_BREAKPOINT) ? mobileOptions : customOptions

  // Add 'on.ready' function that cannot be merged with Object.assign
  options.on = {
    ready: function () {
      set(el, INIT_CLASS)

      forceEqualHeight(slides)
    }
  }

  flkty = new Flickity(carouselEl, options)
  // flkty.reloadCells()

  asNavForOnPrevNextClick(flkty, options, slides)

  if (flkty == null) {
    set(el, INACTIVE_CLASS)
  }

  // align arrows to images
  alignArrowsToImages(el, flkty, options)

  flktyToShow(flkty)
}

/**
 * Re-init slider based on mobile options
 */
const reinit = (el, slides, flkty, customOptions, mobileOptions) => {
  if (flkty) {
    flkty.destroy()
  }

  slides.forEach((slide) => {
    unstyle(slide, 'height')
  })

  init(el, slides, flkty, customOptions, mobileOptions)
}

export default (el) => {
  if (!el.classList.contains('is-init')) {
    const carouselEl = select('.js-carousel', el)
    let flkty = null
    let slides = select.all('.js-slide', el)
    let defaultOptions = {
      cellAlign: 'left',
      contain: true,
      draggable: true,
      freeScroll: false,
      wrapAround: false,
      groupCells: true,
      autoPlay: false,
      pauseAutoPlayOnHover: true,
      watchCSS: false,
      initialIndex: false,
      prevNextButtons: true,
      pageDots: true,
      arrowShape: 'M0,50L30,20L35,25L13,46.65L100,46.65L100,53.35L13,53.35L35,75L30,80z',
      asNavFor: false,
      on: {
        ready: function () {
          set(el, INIT_CLASS)

          forceEqualHeight(slides)
        }
      }
    }
    const customOptions = getModuleOptions(el.getAttribute('custom-options-encoded'), defaultOptions)
    const mobileOptions = getModuleOptions(el.getAttribute('mobile-options-encoded'), customOptions)
    const events = ['resize']

    init(el, slides, flkty, customOptions, mobileOptions)

    let resizeTimer

    events.forEach(event => {
      on(window, event, (e) => {
        // Done resizing event
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
          forceEqualHeight(slides)
          if (mobileOptions) {
            let initializedFlkty = Flickity.data(carouselEl)
            reinit(el, slides, initializedFlkty, customOptions, mobileOptions)
          }
        }, 250)
      })
    })
  }
}
