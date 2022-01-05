import Vue from 'vue'
import { init } from './picture'

Vue.component('vue-picture', {
  props: {
    sources: {
      type: [String, Array],
      required: true
    },
    breakpoints: String,
    alt: String
  },
  data () {
    return {
      isLoaded: false,
      sourceEls: null
    }
  },
  mounted () {
    this.sourceEls = this.$refs.source

    init(this, this.imgEl, this.sourceEls, true)
  },
  watch: {
    'sources' () {
      this.$nextTick(() => {
        init(this, this.imgEl, this.sourceEls, true)
      })
    }
  },
  computed: {
    imgEl () {
      return this.$refs.img.length
        ? this.$refs.img[0]
        : this.$refs.img
    },
    sourcesArr () {
      return Array.isArray(this.sources) ? this.sources : this.sources.split('|').filter(source => source !== '')
    },
    sourcesSplit () {
      return this.sourcesArr.map(source => {
        const arr = this.getDefaultSource(source).split(new RegExp(`.(jpg|jpeg|png|gif|svg)`))

        // masterPath strips out size info from img_url
        return {
          originalPath: arr[0],
          masterPath: arr[0].replace(new RegExp(`_[0-9]*x$`), ''),
          ext: arr[1],
          query: arr[2]
        }
      })
    },
    sourcesResized () {
      return this.sourcesSplit.map(sourceSplit => {
        if (sourceSplit.ext === 'svg') {
          return [
            {
              sizeSrc: `${sourceSplit.originalPath}.${sourceSplit.ext}${sourceSplit.query}`,
              width: ''
            }
          ]
        } else if (sourceSplit.masterPath.indexOf('cdn.shopify.com') === -1 && sourceSplit.masterPath.indexOf('cdn.accentuate.io') === -1) {
          return [
            {
              sizeSrc: `${sourceSplit.originalPath}.${sourceSplit.ext}${sourceSplit.query}`,
              width: ''
            }
          ]
        } else {
          return [2160, 1080, 640, 320].map(size => (
            {
              sizeSrc: this.getSizeSrc(sourceSplit, size),
              width: ` ${size}w`
            }
          ))
        }
      })
    },
    srcsets () {
      return this.sourcesResized.map(sourceResized => {
        return sourceResized.reduce((srcset, size) => {
          return srcset + size.sizeSrc + `${size.width}, `
        }, '').slice(0, -2)
      })
    },
    breakpointsArr () {
      return this.breakpoints ? this.breakpoints.split('|').filter(breakpoint => breakpoint !== '') : []
    }
  },
  methods: {
    getDefaultSource (source) {
      if (
        window.BARREL &&
        window.BARREL.hasOwnProperty('defaultImage') &&
        window.BARREL.defaultImage &&
        source &&
        source.indexOf('cdn.shopify.com/s/assets/no-image') !== -1
      ) {
        return window.BARREL.defaultImage
      }
      return source
    },
    getSizeSrc (sourceSplit, size) {
      if (sourceSplit.masterPath.indexOf('cdn.shopify.com') !== -1) {
        const { masterPath, ext, query } = sourceSplit
        return `${masterPath}_${size}x.${ext + query}`
      } else if (sourceSplit.masterPath.indexOf('cdn.accentuate.io') !== -1) {
        return `//images.accentuate.io?c_options=w_${size}&shop=${window.Shopify.shop}&image=${sourceSplit.originalPath}.${sourceSplit.ext}${sourceSplit.query}`
      }
    }
  }
})
