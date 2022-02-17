/* global Promise */
import { getModuleOptions, ready } from 'lib/dom'
import nanoajax from 'nanoajax'
import * as createHistory from 'history'
import { formatMoney as shopifyFormatMoney } from '@shopify/theme-currency'

const MODULE_NAME = 'shop'
let settings = {}
ready(() => {
  settings = getModuleOptions(MODULE_NAME, document.body, {})
})

const nanoPromise = (params, type = 'json') => new Promise((resolve, reject) => {
  if (type === 'document') {
    params.responseType = 'document'
  }
  nanoajax.ajax(
    params,
    (code, response) => {
      if (code === 200 && response) {
        if (type === 'json') {
          try {
            response = JSON.parse(response)
          } catch (e) {
          }
        }
        resolve(response)
      } else {
        reject(response)
      }
    }
  )
})

const fetchData = (endpoint, type = 'json') => {
  const params = {
    url: endpoint,
    method: 'GET'
  }
  return nanoPromise(params, type)
}

const postData = (endpoint, body, type = 'json') => {
  const params = {
    url: endpoint,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  return nanoPromise(params, type)
}

const getProduct = (productHandle) => fetchData('/products/' + productHandle + '.js')

const getShipping = (address) => {
  const url = `/cart/shipping_rates.json?shipping_address[zip]=${address.zip}&shipping_address[country]=${address.country}&shipping_address[province]=${address.province}`
  return fetchData(url, 'json').then((result) => {
    return result
  }, (error) => {
    try {
      return {
        error: JSON.parse(error)
      }
    } catch (e) {
    }
  })
}

const formatMoney = function (cents, format = settings.moneyFormat) {
  return shopifyFormatMoney(cents, format)
}

const history = createHistory.createBrowserHistory()

export {
  fetchData,
  getProduct,
  getShipping,
  formatMoney,
  nanoPromise,
  postData,
  history
}
