import Vue from 'vue'
import 'modules/picture/picture.vue'
import 'modules/color-selector/color-selector.vue'
import 'modules/quick-add-to-cart/quick-add-to-cart.vue'

import {
  decode
} from 'lib/util'
import appState from 'lib/appState'

import ProductCardMixin from './product-card-mixin'
import on from 'dom-event'

/**
 * This component is used throughout the site,
 * in product carousels and on the PLP page.
 */
Vue.component('product-card', {
  mixins: [ProductCardMixin],
  props: [
    'product',
    'collection',
    'decode',
    'featured',
    'image',
    'imageHover',
    'imageRatio'
  ],

  /**
   * Data can come via a JSON string that needs to be
   * decoded, or via an javascript object, passed by a
   * parent component or a Vuex store.
   */
  data () {
    let product
    if (!!this.decode && this.product) {
      product = JSON.parse(decode(this.product))
    } else {
      product = (this.product || {
        title: '',
        price: '',
        compareAtPrice: '',
        featuredImage: '',
        variants: [],
        firstAvailableVariant: {},
        optionNames: [],
        optionsWithValues: [],
        displayOnlyColor: false,
        hasOnlyDefaultVariant: false
      })
    }

    return {
      ...product,
      collectionData: this.collection ? JSON.parse(decode(this.collection)) : this.collection,
      productData: product,
      isColorSelected: false,
      colorSelected: '',
      selectedOptions: {},
      selectedVariant: {},
      inViewport: false,
      appState,
      discountMessageTemplate: window.BARREL.discountMessage,
      setDiscountMessageTemplate: window.BARREL.setDiscountMessage
    }
  },
  watch: {
    activeColor (value) {
      this.selectedOptions['Color'] = value
    },
    'selectedOptions': {
      handler () {
        if (this.activeColor) {
          const variants = this.variants.filter(variant => {
            return this.optionNames.every((option, index) => {
              if (option.toLowerCase() === 'color' || this.selectedOptions[option] !== '') {
                return variant[`option${index + 1}`] === this.selectedOptions[option]
              }

              return true
            })
          })

          this.selectedVariant = variants.find(variant => variant.available) || variants[0] || {}
        } else {
          const selectedVariant = this.variants.find(variant => {
            return this.optionNames.every((option, index) => {
              return variant[`option${index + 1}`] === this.selectedOptions[option]
            })
          })

          this.selectedVariant = selectedVariant || this.firstAvailableVariant || {}
        }
      },
      deep: true
    }
  },
  mounted () {
    this.selectedOptions = this.optionsWithValues.reduce((obj, option) => {
      if (this.activeColor && option.name.toLowerCase() === 'color') {
        obj[option.name] = this.activeColor
      } else {
        obj[option.name] = ''
      }
      return obj
    }, {})

    on(window, 'scroll', this.scrollHandler)
  },
  destroyed () {
    on.off(window, 'scroll', this.scrollHandler)
  }
})
