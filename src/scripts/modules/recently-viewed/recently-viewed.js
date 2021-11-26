import Vue from 'vue'
import Cookies from 'cookies-js'
import nanoajax from 'nanoajax'

export default el => {
  const url = document.location.href
  const product = url.match(/\/products\/([a-zA-Z1-9]*)/i)

  if (product && product[1]) {
    const variantSKU = el.getAttribute('data-sku')
    const cook = Cookies.get('recently_viewed')
    const variantSKUs = (cook || '').split('|')
    if (!~variantSKUs.indexOf(variantSKU)) {
      variantSKUs.push(variantSKU)
    }
    Cookies.set('recently_viewed', variantSKUs.join('|'), {expires: 31})
    return
  }

  return new Vue({
    el,
    data () {
      return {
        products: []
      }
    },
    mounted () {
      const host = `//${window.location.host}`
      const skus = Cookies.get('recently_viewed') || false
      const q = (skus || '')
        .split('|')
        .filter(sku => !!sku)
        .join(' OR ')
      nanoajax.ajax({
        url: `${host}/search?view=recently-viewed-endpoint&q=${q}&type=product`,
        method: 'GET',
        cors: true
      }, (code, res) => {
        if (Number(code) !== 200) {
          return
        }

        const decoded = JSON.parse(res)
        this.products = decoded.products || []

        this.showModule()
      })
    },
    methods: {
      showModule () {
        this.$el.classList.remove('hide')
      }
    }
  })
}
