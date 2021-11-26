import Vue from 'vue'
import objectFitImages from 'object-fit-images'

Vue.component('vue-image', {
  props: {
    src: String,
    sources: Array,
    alt: String,
    css: String,
    size: Number,
    loader: {
      type: Boolean,
      default: false
    },
    spinner: {
      type: Boolean,
      default: true
    },
    spinnerSize: {
      type: String,
      default: 'lg'
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      mainImageSrc: '',
      secondaryImgSrc: '',
      states: {
        isLoaded: false
      }
    }
  },
  computed: {
    imgClasses () {
      return this.states.isLoaded ? 'is-loaded' : ''
    },
    parts () {
      const arr = (this.src || '').split(new RegExp(`.(jpg|jpeg|png|gif)`))

      return {
        originalPath: arr[0],
        filePath: arr[0].replace(new RegExp(`_[0-9]*x`), ''),
        ext: arr[1],
        query: arr[2]
      }
    },
    blurSrc () {
      return this.getSizeSrc(50)
    },
    blurSrcStyle () {
      return `url(${this.blurSrc})`
    },
    sizeSrc () {
      return this.size ? this.getSizeSrc(this.size) : this.src
    },
    spinnerActive () {
      return !this.states.isLoaded
    },
    spinnerClass () {
      return `spinner spinner--abs z1 spinner--${this.spinnerSize}`
    }
  },
  mounted () {
    if (this.loader) {
      this.loadImage(this.blurSrc)
    }

    if (typeof this.$refs['source'] !== 'undefined' && this.$refs['source'].length > 0) {
      this.getSrcset(this.$refs['source'])
    }

    console.warn('The image module has been depreciated. Please replace with the picture module.')
  },
  methods: {
    onLoaded () {
      this.states.isLoaded = true
      const { image } = this.$refs
      const { scale } = this

      if (!image) {
        return
      }

      image.setAttribute('width', image.width * scale)
      image.setAttribute('height', image.height * scale)
    },
    getSizeSrc (size) {
      const { filePath, ext, query } = this.parts
      return `${filePath}_${size}x.${ext + query}`
    },
    loadImage (src, onLoad = () => {}) {
      const img = new Image()

      img.onload = onLoad
      img.src = src
      objectFitImages()
    },
    getSrcset (sources) {
      for (let source of sources) {
        if (source.hasAttribute('data-srcset')) {
          source.setAttribute('srcset', source.getAttribute('data-srcset'))
          source.removeAttribute('data-srcset')
        }
      }
    }
  },
  template: `
    <transition-group name="fade" tag="picture" :class="['img', css, imgClasses]">
      <source
        v-for="(source, i) in sources"
        ref="source"
        :key="source['media']"
        :media="source['media']"
        :data-srcset="source['srcset']">
        <img
          v-if="src"
          ref="image"
          class="img__el"
          :src="sizeSrc"
          :alt="alt"
          :key="src"
          @load="onLoaded" />
      <i
        v-if="loader"
        class="img__loader"
        :key="0"></i>
      <i
        v-if="spinner"
        :class="[spinnerClass, { 'is-active' : spinnerActive }]"
        :key="spinnerActive"></i>
    </transition-group>
  `
})
