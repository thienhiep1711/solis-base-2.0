import select from 'select-dom'
import on from 'dom-event'
import nanoajax from 'nanoajax'
import { set, unset, write, isIEorEdge } from 'lib/util'
import { getLineItem, getCartItems, getCartPrice } from 'Lib/util-product'

const cartCount = select('#cart-count')
const cart = select('#cart-drawer')
const modal = select('#product-modal')
const header = select('#header')

const build = (product) => {
  let variant = ''
  if (product.option1 && product.option1.indexOf('$') <= -1) variant = product.option1
  if (product.option2) variant = (variant !== '') ? `${variant} / ${product.option2}` : product.option2
  if (product.option3) variant = (variant !== '') ? `${variant} / ${product.option3}` : product.option3
  return `
    <div class="cart-drawer__row">
      <div class="drawer-main">
        <div class="drawer-main__featured ratio ro-1">
          <div class="img fit-contain drawer-main__img is-loaded">
            <img class="img__el js-image" src="${product.image}">
          </div>
        </div>
        <div class="drawer-main__wrapper">
          <a class="drawer-main__title p1 a1" href="${product.url}" type="${product.title}">${product.title}</a>
          <p class="drawer-main__variant p2 o6">${variant}</span>
          <div class="drawer-main__holder p2">
            <span class="drawer-main__quantity o6">Qty: ${product.quantity}</span>
          </div>
        </div>
      </div>
      <div class="drawer-total">
        <span class="drawer-total__price p2">${product.total_price}</span>
      </div>
    </div>`
}

export class AddCart {
  constructor (el) {
    this.el = el
    this.init()
  }

  init () {
    let variant = select('.js-product-variant', this.el)
    let quantity = select('.js-product-quantity .js-field', this.el)
    let btn = select('.js-btn', this.el)

    on(this.el, 'submit', (e) => {
      e.preventDefault()

      let nb = quantity.value
      let id = variant.value

      nanoajax.ajax({
        url: '/cart/add.js',
        method: 'POST',
        body: `quantity=${nb}&id=${id}`
      }, (code, responseText, request) => {
        let add = select('.js-add', modal)
        let unavailable = select('.js-unavailable', modal)

        if (code !== 422) {
          let product = getLineItem(JSON.parse(responseText))
          let image = select('.js-image', modal)
          let fallback = select('.js-fallback', modal)
          let counters = select.all('.js-count', modal)

          cartCount.innerHTML = parseInt(cartCount.innerHTML) + parseInt(nb)

          /* Update Counters */
          for (let counter of counters) {
            write(counter, nb)
          }

          /* Update Modal Image */
          if (isIEorEdge()) {
            fallback.style.backgroundImage = `url(${product.image})`
          } else {
            image.setAttribute('src', product.image)
          }
          /* Update Modal Informations */
          write(select('.js-title', modal), product.title)
          write(select('.js-price', modal), product.price)
          if (select('.js-option1', modal) || false) write(select('.js-option1', modal), product.option1)
          if (select('.js-option2', modal) || false) write(select('.js-option2', modal), product.option2)
          if (select('.js-option3', modal) || false) write(select('.js-option3', modal), product.option3)

          unset(add, 'hidden')
          set(unavailable, 'hidden')

          /* Tigger GTM Event */
          this.triggerGTMEvent(product)

          nanoajax.ajax({
            url: '/cart.js',
            method: 'GET'
          }, (code, responseText, request) => {
            let holder = select('.js-holder', cart)
            let none = select('.js-none', cart)
            let wrapper = select('.js-wrapper', cart)
            let btn = select('.js-cart-btn .js-text', cart)
            let products = getCartItems(JSON.parse(responseText))
            let template = ''
            for (let product of products) {
              template = build(product) + template
            }
            wrapper.innerHTML = template
            btn.innerHTML = `${getCartPrice(JSON.parse(responseText))} - View Bag`
            unset(holder, 'hidden')
            set(none, 'hidden')
          })
        } else {
          variant.options[variant.selectedIndex].setAttribute('data-available', 'false')
          btn.children[0].innerHTML = 'Out of Stock'
          btn.disabled = true

          unset(unavailable, 'hidden')
          set(add, 'hidden')
        }

        set(modal, 'is-active')
        setTimeout(() => {
          unset(modal, 'is-active')
        }, 4000)
        on(header, 'mouseenter', () => {
          unset(modal, 'is-active')
        })
      })
    })
  }

  triggerGTMEvent (product) {
    if (!dataLayer) {
      return true
    }

    var values = {
      'event': 'productAddedToCart',
      'adcProductTitle': product.title,
      'adcProductVariant': `${product.option1} / ${product.option2} / ${product.option3}`,
      'adcProductType': product.productType,
      'adcProductId': product.id
    }

    dataLayer.push(values)
  }
}
