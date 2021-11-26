import { formatMoney, getProductImage } from 'lib/util'
import inViewport from 'in-viewport'

export default {
  computed: {
    /**
     * Compiles a list of all available colors under the
     * product.
     */
    allColors () {
      return this.getOptionValuesByName('color')
    },
    /**
     * This determines which color should be shown
     * be the active color, and thus dictate which
     * image should be shown to the user.
     */
    activeColor () {
      if (this.isColorSelected && this.colorSelected) {
        return this.colorSelected
      }

      if (!this.image) {
        if (this.firstAvailableVariant && Object.keys(this.firstAvailableVariant).length) {
          const colorIndex = this.getOptionIndexByName('color')
          if (colorIndex) return this.firstAvailableVariant[`option${colorIndex}`]
        }

        return (this.allColors || [])[0]
      }
    },
    imageSrc () {
      if (this.image && !this.colorSelected) {
        return this.image
      } else if (this.isCollectionCard) {
        return this.collectionData.image.src
      } else {
        return getProductImage(this.activeColor, this.media, false, this.activeVariantImage)
      }
    },
    hoverImageSrc () {
      if (this.imageHover && !this.colorSelected) {
        return this.imageHover
      } else if (this.isCollectionCard) {
        return this.collectionData.image.src
      } else {
        return getProductImage(this.activeColor, this.media, true)
      }
    },
    link () {
      if (this.isCollectionCard) {
        return `/collections/${this.collectionData.handle}`
      }
      return `/products/${this.handle}${this.activeVariantUrl}`
    },
    activeVariant () {
      return this.variants.find(({title = '', id}) => {
        return ~title.indexOf(this.activeColor)
      })
    },
    activeVariantUrl () {
      return (this.activeVariant ? `?variant=${this.activeVariant.id}` : '')
    },
    activeVariantImage () {
      return this.activeVariant && this.activeVariant.hasOwnProperty('image')
        ? this.activeVariant.image
        : this.featuredImage
    },
    productPrice () {
      return this.activeVariant
        ? this.activeVariant.price
        : this.price
    },
    productCompareAtPrice () {
      return this.activeVariant
        ? this.activeVariant.compareAtPrice
        : this.compareAtPrice
    },
    formattedPrice () {
      return formatMoney(this.productPrice)
    },
    formattedCompareAtPrice () {
      return formatMoney(this.productCompareAtPrice)
    },
    isOnSale () {
      if (this.activeVariant) {
        return this.activeVariant.compareAtPrice > this.activeVariant.price
      }

      return this.compareAtPrice > this.price
    },
    variantsAvailable () {
      return this.variants.length
    },
    ratioStyles () {
      if (this.imageSrc === this.image) {
        return {
          paddingBottom: `${100 / this.imageRatio}%`,
          '--aspect-ratio': this.imageRatio
        }
      } else {
        const comparingImageSrc = (this.imageSrc || '')
          .replace(/(^\w+:|^)\/\//, '') // remove protocols (http:// or https://) from url
          .replace(/\.[^/.]+$/, '') // remove file extension from url

        const currentMedia = (this.media || []).find(media => {
          const comparingMediaSrc = (media.src || '')
            .replace(/(^\w+:|^)\/\//, '') // remove protocols from  (http:// or https://)url
            .replace(/\.[^/.]+$/, '') // remove file extension from url
          return ~comparingImageSrc.indexOf(comparingMediaSrc)
        })
        if (currentMedia) {
          return {
            paddingBottom: `${100 / currentMedia.aspect_ratio}%`,
            '--aspect-ratio': currentMedia.aspect_ratio
          }
        }
      }
    },
    badge () {
      const comparingImageSrc = (this.imageSrc || '')
        .replace(/(^\w+:|^)\/\//, '') // remove protocols (http:// or https://) from url
        .replace(/\.[^/.]+$/, '') // remove file extension from url

      const currentMedia = (this.media || []).find(media => {
        const comparingMediaSrc = (media.src || '')
          .replace(/(^\w+:|^)\/\//, '') // remove protocols from  (http:// or https://)url
          .replace(/\.[^/.]+$/, '') // remove file extension from url
        return comparingMediaSrc !== '' && ~comparingImageSrc.indexOf(comparingMediaSrc)
      })

      if (currentMedia) {
        const altBadge = typeof currentMedia.alt === 'string' ? currentMedia.alt.split('::') : []

        if (altBadge.length >= 2) {
          return altBadge[altBadge.length - 1]
        }

        return false
      }
    },
    isCollectionCard () {
      return this.collection && this.collectionData && Object.keys(this.collectionData).length
    },
    activeTitle () {
      if (this.isCollectionCard) {
        return this.collectionData.title
      }
      return this.displayOnlyColor ? this.title + ' - ' + this.activeColor : this.title
    },
    filteredVariants () {
      return this.variants.filter(({title = '', id}) => {
        return ~title.indexOf(this.activeColor)
      })
    },
    discountMessage () {
      let compareAtPrice, price

      if (this.activeVariant) {
        compareAtPrice = this.activeVariant.compareAtPrice
        price = this.activeVariant.price
      } else {
        compareAtPrice = this.compareAtPrice
        price = this.price
      }

      const priceDiff = compareAtPrice - price
      const discountAmount = formatMoney(priceDiff)
      const discountPercent = Math.round(priceDiff * 100 / compareAtPrice) + '%'

      return (this.type && this.type.toLowerCase() === 'sets' ? this.setDiscountMessageTemplate : this.discountMessageTemplate)
        .replace('{discount_amount}', discountAmount)
        .replace('{discount_percent}', discountPercent)
    },
    discountMessageMobile () {
      return this.discountMessage.replace(/^[^a-zA-Z0-9]*/, ' ')
    }
  },
  created () {
    if (this.displayOnlyColor) {
      this.updateActiveColor(this.displayOnlyColor)
    }
  },
  methods: {
    formatMoney,
    /**
     * Allows the user to manually select
     * a color to show a variant image. This action
     * will override colors that are shown from other means,
     * such as a PLP color filter being clicked.
     *
     * @param {*} color
     */
    updateActiveColor (color) {
      this.isColorSelected = true
      this.colorSelected = color
    },
    getOptionByName (name) {
      return (this.optionsWithValues || []).filter(option => {
        return option.name.toLowerCase() === name.toLowerCase()
      })
    },
    getOptionIndexByName (name) {
      const option = this.getOptionByName(name)
      if (option && option.length) return option[0].position
    },
    getOptionValuesByName (name) {
      const option = this.getOptionByName(name)
      if (option && option.length) return option[0].values
    },
    badgeImage (badge) {
      return window.FILE_CDN + badge + '-badge.svg'
    },
    updateProductOptions (obj) {
      this.selectedOptions[obj.name] = obj.value
    },
    scrollHandler () {
      this.inViewport = Boolean(inViewport(this.$el))
    }
  }
}
