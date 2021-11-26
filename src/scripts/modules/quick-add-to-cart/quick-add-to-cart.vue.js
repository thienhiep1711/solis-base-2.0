import Vue from 'vue'
import ClickOutside from 'vue-click-outside'
import cart from 'lib/cart'
import { formatMoney } from 'lib/util'
import state from 'lib/appState'
import PortalVue, { MountingPortal } from 'portal-vue'
import bus from 'lib/bus'

Vue.use(PortalVue)

Vue.component('quick-add-to-cart', {
  components: {
    'mounting-portal': MountingPortal
  },
  props: {
    product: Object,
    variants: {
      type: Array,
      default: []
    },
    optionsWithValues: {
      type: Array,
      default: []
    },
    selectedVariant: {
      type: Object,
      default: {}
    },
    inViewport: {
      type: Boolean,
      default: false
    },
    addToCartText: {
      type: String,
      default: ''
    },
    soldOutText: {
      type: String,
      default: ''
    },
    unavailableText: {
      type: String,
      default: ''
    },
    hasOnlyDefaultVariant: {
      type: Boolean,
      default: false
    },
    firstAvailableVariant: {
      type: Object,
      default: {}
    },
    activeColor: {
      type: String,
      default: ''
    }
  },
  data () {
    const productOptions = this.getDefaultProductOptions()
    return {
      isActive: false,
      isTouch: Boolean('ontouchstart' in document.documentElement),
      productOptions,
      tempSelectedOption: {}
    }
  },
  watch: {
    inViewport (value) {
      if (value === false && this.isActive) {
        this.isActive = false
      }
    }
  },
  mounted () {
    this.addDefaultSelectOptions()
  },
  computed: {
    addToCartButtonText () {
      if (this.hasOnlyDefaultVariant) {
        return this.firstAvailableVariant
          ? this.addToCartText
          : this.soldOutText
      }

      if (!Object.keys(this.selectedVariant).length) {
        return this.unavailableText
      }

      return this.isSubmitButtonDisabled
        ? this.soldOutText
        : this.addToCartText
    },
    submitButtonText () {
      if (this.hasOnlyDefaultVariant) {
        return this.firstAvailableVariant
          ? this.addToCartText
          : this.soldOutText
      }

      if (!Object.keys(this.selectedVariant).length) {
        return this.unavailableText
      }

      return this.isSubmitButtonDisabled
        ? this.soldOutText
        : this.addToCartText
    },
    isSubmitButtonDisabled () {
      return !this.selectedVariant.id || (this.selectedVariant.id && this.selectedVariant.available === false)
    },
    activeVariant () {
      return this.hasOnlyDefaultVariant
        ? this.firstAvailableVariant.id
        : this.selectedVariant.id
    },
    variantOptions () {
      const optionsWithValues = ([...this.productOptions] || [])
      if (Object.keys(this.tempSelectedOption).length) {
        // get all available variants based on current selected dropdown
        const availableVariants = this.variants.filter(variant => {
          return variant.available &&
            variant.title.indexOf(this.activeColor) > -1 &&
            variant[`option${this.tempSelectedOption.position}`] === this.tempSelectedOption.value
        })

        // rebuild selected options based on current selected dropdown
        if (optionsWithValues && optionsWithValues.length > 1) {
          for (const option of optionsWithValues) {
            const position = option.position

            if (position === this.tempSelectedOption.position) {
              continue
            }

            const selectedOption = optionsWithValues.find(option => option.position === position)

            selectedOption.values.forEach(item => {
              item.available = availableVariants.some(variant =>
                variant[`option${position}`] === item.value
              )
            })
          }

          // reset second option on first select
          const secondOption = this.productOptions[1]
          if (secondOption.position !== this.tempSelectedOption.position) {
            const secondOptionName = secondOption.name
            this.resetOptionSelect([secondOptionName])
            this.$emit('change', {
              name: secondOptionName,
              value: ''
            })
          }
        }
      }
      return optionsWithValues
    }
  },
  methods: {
    showQuickAddToCart () {
      this.isActive = true
    },
    hideQuickAddToCart () {
      this.isActive = false
      this.productOptions = this.getDefaultProductOptions()
      this.addDefaultSelectOptions()
      this.resetOptionSelect()
    },
    handleClickOutside (e) {
      if (e.target.closest('#quick-add-to-cart')) {
        return
      }

      this.hideQuickAddToCart()
    },
    onOptionSelect (item, e) {
      const selectedOption = this.productOptions.find(option => option.position === item.position)
      const selectedValues = selectedOption.values.map(item => {
        item.selected = (item.value === e.target.value)
        return item
      })
      selectedOption.values = [...selectedValues]
      this.tempSelectedOption = {
        position: item.position,
        value: e.target.value
      }
      this.$emit('change', {
        name: e.target.name,
        value: e.target.value
      })
    },
    getDefaultProductOptions () {
      return this.optionsWithValues
        .filter(option => option.name.toLowerCase() !== 'color')
        .map(option => {
          const values = option.values.map(value => {
            const isOptionAvailable = this.variants.filter(variant => {
              const optionIndex = `option${option.position}`
              return variant.available &&
                variant.title.indexOf(this.activeColor) > -1 &&
                variant[optionIndex] === value
            })
            return {
              value,
              available: isOptionAvailable.length,
              selected: false
            }
          })
          return {...option, values}
        })
    },
    addDefaultSelectOptions () {
      this.productOptions = this.productOptions.map(option => {
        option.values = [{
          selected: true,
          available: false,
          label: `Select ${option.name}`,
          value: ''
        }, ...option.values]
        return option
      })
    },
    resetOptionSelect (options = []) {
      const shouldResetOptions = options.length ? options : this.productOptions.map(option => option.name)
      this.productOptions = this.productOptions.map(option => {
        if (shouldResetOptions.indexOf(option.name) > -1) {
          option.values = option.values.map((value, index) => {
            value.selected = (index === 0)
            return value
          })
        }
        return option
      })
    },
    addToCart () {
      this.isActive = false
      this.resetOptionSelect()
      cart.add({
        id: this.activeVariant,
        quantity: 1
      }).then(() => {
        cart.get().then((data) => {
          bus.$emit('add-to-cart')

          state.isMiniCartOpen = true

          // tracking
          _learnq.push(['track', 'Added to Cart', {
            Name: this.product.title,
            ProductID: this.product.id,
            Categories: this.product.collections,
            ImageURL: `https:${this.product.featuredImage}`,
            URL: `${window.BARREL.secureUrl}/products/${this.product.handle}`,
            Brand: this.product.vendor,
            Price: formatMoney(this.product.price),
            CompareAtPrice: formatMoney(this.product.compareAtPriceMax)
          }]);
        })
      })
    }
  },
  directives: {
    ClickOutside
  }
})
