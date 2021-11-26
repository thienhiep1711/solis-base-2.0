import Vue from 'vue'
import store from './@store'
import {mapState, mapActions} from 'vuex'
import animate from 'mixins/animate'
import 'modules/hero-small/hero-small.vue'
import 'modules/plp-sidebar/plp-sidebar.vue'
import 'modules/plp-select/plp-select.vue'
import 'modules/product-card/product-card.vue'

export default el => new Vue({
  el,
  mixins: [animate],
  store: store(),
  data () {
    return {
      settings: () => ({})
    }
  },
  mounted () {
    let initial = el.getAttribute('data-initial')
    let decodedImport = decodeURIComponent(initial)
    let collection = JSON.parse(decodedImport)
    this.$store.state.collection = collection
    this.fetchCollectionHeroSettings()
    this.fetchCollection({
      handle: location.pathname,
      ajaxing: true,
      initial: true,
      explodeColor: true
    })
  },
  computed: {
    ...mapState([
      'collection',
      'products',
      'mounted',
      'ajaxing',
      'loading',
      'selectedFacets',
      'sort',
      'compactView',
      'isMobile'
    ]),
    ...mapState({
      visibleProducts (state) {
        const prods = (state.products || []).filter(p => this.shouldShowProduct(p))
        return prods.filter((item) => {
          return (item.tags.indexOf('hidden'))
        })
      }
    }),
    blockSettings () {
      const collectionHandle = this.collection.handle.replace('/collections/', '')
      if (this.settings) {
        const blocksSettings = this.settings.hasOwnProperty('blocks') ? this.settings.blocks : []
        return blocksSettings.find(item => item.collection === collectionHandle)
      }
    },
    heroStyle () {
      return this.getCollectionSetting('hero_style')
    },
    heroInvertedMode () {
      return this.getCollectionSetting('inverted_mode')
    },
    heroEnableOverlay () {
      return this.getCollectionSetting('enable_overlay')
    },
    heroOverlayOpacity () {
      return this.getCollectionSetting('overlay_opacity')
    },
    heroBackgroundColor () {
      return this.getCollectionSetting('background_color')
    },
    heroVideo () {
      return this.getCollectionSetting('video')
    },
    heroVideoSmall () {
      return this.getCollectionSetting('video_s')
    },
    heroVideoLarge () {
      return this.getCollectionSetting('video_l')
    },
    heroImageMobile () {
      return this.getCollectionSetting('image_mobile')
    },
    heroImageIntermediate () {
      return this.getCollectionSetting('image_intermediate')
    },
    heroImage () {
      return this.getCollectionSetting('image')
    },
    heroContentAlignment () {
      return this.getCollectionSetting('content_alignment')
    },
    heroTextAlignment () {
      return this.getCollectionSetting('text_alignment')
    },
    heroType () {
      if (this.heroStyle === '2-up' || this.heroStyle === 'fullwidth-image') {
        return 'image'
      } else if (this.heroStyle === 'fullwidth-video') {
        return 'video'
      } else {
        return 'color'
      }
    },
    heroSources () {
      const images = []
      if (this.blockSettings) {
        if (this.blockSettings.image_mobile) images.push(this.blockSettings.image_mobile)
        if (this.blockSettings.image_intermediate) images.push(this.blockSettings.image_intermediate)
      } else {
        if (this.heroImageMobile) images.push(this.heroImageMobile)
        if (this.heroImageIntermediate) images.push(this.heroImageIntermediate)
      }
      let heroImage = this.heroImage || this.collection.image

      if (heroImage) {
        images.push(heroImage)
      }

      return images.join('|')
    },
    heroBreakpoints () {
      const breakpoints = []
      if (this.blockSettings) {
        if (this.blockSettings.image_mobile) breakpoints.push('(max-width: 767px)')
        if (this.blockSettings.image_intermediate) breakpoints.push('(min-width: 768px) and (max-width: 999px)')
      } else {
        if (this.heroImageMobile) breakpoints.push('(max-width: 767px)')
        if (this.heroImageIntermediate) breakpoints.push('(min-width: 768px) and (max-width: 999px)')
      }
      let heroImage = this.heroImage || this.collection.image
      if (heroImage) {
        breakpoints.push('(min-width: 1000px)')
      }
      return breakpoints.join('|')
    }
  },
  methods: {
    shouldShowProduct (product) {
      const productFacetMatches = this.selectedFacets.reduce((obj, facet) => {
        if (typeof obj.needed === 'undefined') {
          obj.needed = {}
        }
        if (typeof obj.matches === 'undefined') {
          obj.matches = {}
        }
        obj.needed[facet.name] = true
        if (
          typeof product[facet.name] !== 'undefined' &&
          ~product[facet.name].indexOf(facet.value)
        ) {
          if (product.displayOnlyColor && facet.name.toLowerCase() === 'color') {
            if (product.displayOnlyColor.toLowerCase() === facet.value.toLowerCase()) {
              obj.matches[facet.name] = true
            }
          } else {
            obj.matches[facet.name] = true
          }
        }
        return obj
      }, {})

      if (!productFacetMatches.needed) {
        return true
      }

      return Object.keys(productFacetMatches.needed).every(key => {
        return typeof productFacetMatches.matches[key] !== 'undefined'
      })
    },
    fetchCollectionHeroSettings () {
      const heroSettingsEl = this.$refs['plp-hero-settings']
      if (heroSettingsEl) {
        const settings = heroSettingsEl.getAttribute('data-settings')
        const decodedSettings = decodeURIComponent(settings)
        this.settings = JSON.parse(decodedSettings)
      }
    },
    getCollectionSetting (name) {
      if (this.blockSettings) {
        return this.blockSettings[name]
      } else if (this.settings) {
        return this.settings[name]
      }
    },
    ...mapActions([
      'fetchCollection',
      'toggleFilterMenu',
      'toggleCompactView'
    ])
  }
})
