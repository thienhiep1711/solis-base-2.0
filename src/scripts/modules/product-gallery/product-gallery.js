import Vue from 'vue'
import state from 'lib/appState'
import { handleize, getImageWithSize, set, unset } from 'lib/util'
import vZoom from 'vue-zoom'
import select from 'select-dom'
import Vue2TouchEvents from 'vue2-touch-events'
import Flickity from 'lib/flickity-custom-page-dots'
import 'modules/carousel/carousel.vue'
import 'modules/zoomable-image-enhanced/zoomable-image-enhanced.vue'
import 'modules/video/video.vue'

Vue.use(Vue2TouchEvents, {
  swipeTolerance: 60
})

export default el => new Vue({
  el,
  components: {
    vZoom
  },
  data () {
    return {
      key: 'color',
      activeMedia: {},
      state,
      product: window.BARREL.product,
      showButton: true,
      showVideo: false,
      showYoutubeVideo: false,
      hideGradient: false
    }
  },
  computed: {
    imageHandle () {
      for (let i = 0; i < this.product.options.length; i++) {
        const {options = []} = this.product
        const variant = this.state.activeVariant

        if (handleize(options[i]) === this.key) {
          const value = variant[`option${i + 1}`]

          if (!value) {
            return false
          }
          return `${this.key}-${handleize(value)}`.toLowerCase()
        }
      }
      return false
    },
    activeColor () {
      for (let i = 0; i < this.product.options.length; i++) {
        const { options = [] } = this.product
        const variant = this.state.activeVariant

        if (handleize(options[i]) === this.key) {
          const value = variant[`option${i + 1}`]

          if (!value) {
            return false
          }

          return handleize(value)
        }
      }

      return false
    },
    media () {
      if (this.activeColor && this.product.media) {
        const filtered = this.product.media.filter(({ alt = '' }) => {
          return !alt || !~alt.indexOf('(') || ~handleize(alt.toLowerCase()).indexOf(`(${this.activeColor})`)
        })

        return filtered.length ? filtered : []
      }

      return this.product.media
    },
    featuredImage () {
      return this.activeMedia.src
    },
    videoSourceList () {
      if (this.activeMedia.media_type !== 'video') {
        return []
      }

      const length = this.activeMedia.sources.length

      return this.activeMedia.sources.map((source, index) => {
        const width = source.width
        let media

        if (index < length - 2) {
          if (width < 240) {
            media = 'all and (max-width: 480px)'
          } else if (width < 360) {
            media = 'all and (max-width: 720px)'
          } else if (width < 512) {
            media = 'all and (max-width: 1024px)'
          } else {
            media = ''
          }
        } else {
          media = ''
        }

        return {
          src: source.url,
          type: source.mime_type,
          media
        }
      })
    },
    youtubeId () {
      return this.activeMedia.external_id
    },
    badge () {
      const altBadge = typeof this.activeMedia.alt === 'string' ? this.activeMedia.alt.split('::') : []

      if (altBadge.length >= 2) {
        return altBadge[altBadge.length - 1]
      }

      return false
    }
  },
  watch: {
    activeColor () {
      const media = this.media

      if (media.length) {
        this.handleThumbnailClick(media[0])
      }
    }
  },
  methods: {
    handleThumbnailClick (media, updateSlide = false) {
      this.activeMedia = media
      this.showVideo = this.activeMedia.media_type === 'video'
      this.showYoutubeVideo = this.activeMedia.media_type === 'external_video'

      const pageDots = select.all('.flickity-page-dots .dot', this.$el)

      if (pageDots.length > 0) {
        const index = this.media.findIndex(media => media === this.activeMedia)

        unset(pageDots, 'is-selected')

        if (pageDots[index]) {
          set(pageDots[index], 'is-selected')
        }
      }

      if (Flickity && updateSlide) {
        const flkty = Flickity.data('.product-gallery__list .flickity')
        const index = this.media.findIndex(media => media === this.activeMedia)

        flkty.selectCell(index, false, false)
      }
    },
    mediaThumbnail (media) {
      return getImageWithSize(media.preview_image.src, '140')
    },
    handleChangeSlide (index) {
      this.handleThumbnailClick(this.media[index])
    },
    nextImage () {
      const media = this.media
      const index = media.findIndex(media => media === this.activeMedia)
      let activeMedia = this.activeMedia

      if (index === media.length - 1) {
        activeMedia = media[0]
      } else {
        activeMedia = media[index + 1]
      }

      this.handleThumbnailClick(activeMedia)
    },
    prevImage () {
      const media = this.media
      const index = media.findIndex(media => media === this.activeMedia)
      let activeMedia = this.activeMedia

      if (index === 0) {
        activeMedia = media[media.length - 1]
      } else {
        activeMedia = media[index - 1]
      }

      this.handleThumbnailClick(activeMedia)
    },
    badgeImage (badge) {
      return window.FILE_CDN + badge + '-badge.svg'
    }
  },
  created () {
    this.activeMedia = this.media[0]
  },
  mounted () {
    if (this.media.length < 7) {
      this.showButton = false
    }
  }
})
