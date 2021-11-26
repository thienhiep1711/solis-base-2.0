import Vue from 'vue'
import Flickity from 'lib/flickity-custom-page-dots'
import select from 'select-dom'
import on from 'dom-event'
import { set, style, unstyle, decode, isEmpty } from 'lib/util'
import debounce from 'lodash/debounce'

Vue.component('carousel', {
  props: {
    customOptionsEncoded: String,
    mobileOptionsEncoded: String,
    items: Array,
    activeIndex: Number
  },
  data () {
    return {
      initClass: 'is-init',
      inactiveClass: 'is-inactive',
      mobileBreakpoint: 768,
      flkty: null,
      slides: null,
      defaultOptions: null,
      customOptions: null,
      mobileOptions: null,
      options: null,
      itemCells: null
    }
  },
  mounted () {
    this.slides = this.$refs.slide || select.all('.js-slide', this.$el)

    this.defaultOptions = {
      cellAlign: 'left',
      contain: true,
      draggable: true,
      freeScroll: false,
      wrapAround: false,
      groupCells: true,
      autoPlay: false,
      pauseAutoPlayOnHover: true,
      watchCSS: false,
      prevNextButtons: true,
      pageDots: false,
      arrowShape: 'M0,50L30,20L35,25L13,46.65L100,46.65L100,53.35L13,53.35L35,75L30,80z',
      as_nav_for: false
    }

    this.customOptions = this.getModuleOptions(this.customOptionsEncoded, this.defaultOptions)
    this.mobileOptions = this.getModuleOptions(this.mobileOptionsEncoded, this.customOptions)

    let resizeTimer

    this.flktyToShow()

    on(window, 'resize', (e) => {
      // Done resizing event
      this.flktyToShow()
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        this.forceEqualHeight(this.slides)
        this.reinit()
      }, 250)
    })

    this.$nextTick(debounce(() => {
      this.init()
    }, 250))
  },
  watch: {
    'items' () {
      this.reinit()
    }
  },
  methods: {
    init () {
      this.options = (this.mobileOptions && window.innerWidth < this.mobileBreakpoint) ? this.mobileOptions : this.customOptions

      // Add 'on.ready' function that cannot be merged with Object.assign
      this.options.on = {
        ready: () => {
          this.$emit('ready')
          set(this.$refs.carousel, this.initClass)

          this.forceEqualHeight(this.slides)
        }
      }

      this.flkty = new Flickity(this.$refs.carousel, this.options)
      this.flkty.reloadCells()

      this.asNavForOnPrevNextClick(this.flkty)

      // Used to sync with product-gallery thumbnails
      this.flkty.select(this.activeIndex)
      this.flkty.on('change', (index) => {
        this.$emit('change-slide', index)
      })

      if (this.flkty == null) {
        set(this.$refs.carousel, this.inactiveClass)
      }

      this.alignArrowsToImages()

      if (this.flkty.cells.length <= this.itemCells) {
        this.flkty.destroy()
      }
    },
    flktyToShow () {
      this.itemCells = this.customOptions.breakpoints.mobile

      if (matchMedia('screen and (min-width: 768px)').matches) {
        this.itemCells = this.customOptions.breakpoints.tablet
      }

      if (matchMedia('screen and (min-width: 1000px)').matches) {
        this.itemCells = this.customOptions.breakpoints.tabletHorizontal
      }

      if (matchMedia('screen and (min-width: 1200px)').matches) {
        this.itemCells = this.customOptions.breakpoints.desktop
      }
    },
    reinit () {
      if (this.flkty) {
        this.flkty.destroy()
      }
      this.slides.forEach((slide) => {
        unstyle(slide, 'height')
      })

      this.$nextTick(() => {
        this.init()
      })
    },
    getModuleOptions (newOptionsEncoded, currentOptions = {}) {
      let options
      if (newOptionsEncoded) {
        let newOptions = JSON.parse(decode(newOptionsEncoded))

        if (!isEmpty(newOptions)) {
          // Remove empty values
          Object.keys(newOptions).forEach((key) => (newOptions[key] === '') && delete newOptions[key])

          // Merge customOptions into options
          let currentOptionsCopy = JSON.parse(JSON.stringify(currentOptions))
          options = Object.assign(currentOptionsCopy, newOptions)
        } else {
          options = currentOptions
        }
      }

      return options
    },
    forceEqualHeight (slides = []) {
      let max = 0

      slides.forEach((slide) => {
        unstyle(slide, 'height')
        max = slide.offsetHeight > max ? slide.offsetHeight : max
      })

      slides.forEach((slide) => {
        style(slide, 'height', `${(max)}px`)
      })
    },
    asNavForOnPrevNextClick (flkty) {
      if (flkty && this.options.hasOwnProperty('asNavFor')) {
        setTimeout(() => {
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
          }
        })
      }
    },
    alignArrowsToImages () {
      if (this.flkty && this.options.alignArrowsToImage) {
        const arrows = []
        const carouselImage = select('picture', this.$el)
        const nextButton = this.flkty.nextButton
        const prevButton = this.flkty.prevButton
        if (nextButton) arrows.push(nextButton.element)
        if (prevButton) arrows.push(prevButton.element)
        if (arrows.length && carouselImage) {
          arrows.forEach(arrow => {
            arrow.style.top = `${carouselImage.offsetHeight / 2}px`
          })
        }
      }
    }
  }
})
