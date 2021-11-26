import qs from 'query-string'
import {
  deepClone
} from 'lib/util'

/**
 * This is what we use to populate the initial state
 * of the application from the URL. This allows a user
 * to go back and forward between PDPs and PLPs, among
 * other things.
 *
 * @param {*} keys
 */
export const getStateFromUrl = keys => {
  const parsed = qs.parse(
    location.search,
    {arrayFormat: 'bracket'}
  )

  const selectedFacets = (parsed.selectedFacets || []).map(str => {
    const split = str.split(':')
    return {
      name: split[0],
      value: split[1]
    }
  })

  const filtered = Object.keys(parsed).reduce((obj, key) => {
    if (key === 'selectedFacets') {
      return obj
    }
    if (~keys.indexOf(key)) {
      obj[key] = parseVal(parsed[key])
    }
    return obj
  }, {})

  if (keysThatRequireAjax(filtered).length) {
    filtered['ajaxing'] = true
  }

  if (parsed['q']) {
    filtered['searchQuery'] = parsed['q']
  }

  return {
    ...filtered,
    selectedFacets
  }
}

/**
 * A utility function that sees if there are
 * any params in the URL that should force the
 * application to show an ajax view, rather then
 * the DOM rendered in the initial render.
 *
 * @param {*} obj
 */
export const keysThatRequireAjax = obj => {
  return Object.keys(obj).filter(k => {
    if (k === 'compactView' && !obj[k]) {
      return true
    }
    if (k === 'sort' && obj[k] !== 'manual') {
      return true
    }
    if (k === 'selectedFacets') {
      return true
    }
    return false
  })
}

/**
 * Converts boolean strings into
 * actual booleans
 *
 * @param {*} val
 */
export const parseVal = val => {
  if (val === 'true') return true
  if (val === 'false') return false
  return val
}

/**
 * This is a Vuex plugin that listens to the
 * store and updates the URL appropriately.
 *
 * @param {*} store
 */
export const updateURL = store => {
  store.subscribe((mutation, {collection, selectedFacets = [], sort, compactView, isSearch, exitted}) => {
    // Don't update if a page transition has occurred
    if (!/collections\/.+/.test(document.location.pathname)) {
      return
    }

    let url = isSearch ? `/search?` : `${collection.handle}?`
    let search = []
    let filtersQs = qs.stringify({
      selectedFacets: selectedFacets.map(({name, value}) => `${name}:${value}`)
    }, {arrayFormat: 'bracket'})
    filtersQs && search.push(filtersQs)
    search.push(`sort=${sort}`)
    search.push(`compactView=${compactView}`)

    const existing = qs.parse(
      location.search,
      {arrayFormat: 'bracket'}
    )
    const uniqueExisting = Object.keys(existing)
      .filter(key => {
        return !!key &&
        !!existing[key] &&
        !~['selectedFacets', 'sort', 'compactView'].indexOf(key)
      })
      .map(key => {
        return `${key}=${existing[key]}`
      })

    const regex = new RegExp(`(${collection.title})(.?–.*)`, 'i')
    const title = document.title
    if (!regex.test(title)) {
      document.title = title.replace(/^(.*)((?: | )?–.*)/, `${document.title} $2`).replace('&#39;', '\'') // eslint-disable-line no-irregular-whitespace
    }

    uniqueExisting.length && search.push(...uniqueExisting)

    history.replaceState({}, 'Collections', `${url}${search.join('&')}`)
  })
}

/**
 * Parses JSON, removing any comments that
 * Shopify might throw at us.
 *
 * @param {*} string
 */
export const parseJSON = string => {
  let json = {}
  string = string.replace(/<!--.*-->/g, '')
  try {
    json = JSON.parse(string)
  } catch (e) {
    console.log(e)
  }
  return json
}

export const decode = str => decodeURIComponent(str).replace(/\+/g, ' ')

/**
 * Sometimes we need to encode data so that it doesn't break
 * the JSON parsing. This decodes it.
 *
 * @param {*} meta
 */
export const decodeCollectionMeta = meta => {
  for (let key in meta) {
    if (key !== 'json') {
      meta[key] = decode(meta[key])
    }
  }
}

export const interpretTags = ({tags, ...product}, acceptedFilters = []) => {
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]
    if (acceptedFilters.find(accepted => {
      return new RegExp(accepted, 'i').test(tag)
    })) {
      const {
        name = '',
        value = '',
        error = false
      } = dehandelizeTag(tag)

      if (error) {
        continue
      }

      if (typeof product[name] === 'undefined') {
        product[name] = []
      }
      if (typeof product['tagNames'] === 'undefined') {
        product['tagNames'] = []
      }
      if (!~product['tagNames'].indexOf(name)) {
        product['tagNames'].push(name)
      }
      product[name].push(value)
    }
  }
  return {...product, tags}
}

export const dehandelizeTag = tag => {
  const split = tag.split('-')
  if (split.length < 2) {
    return {error: true}
  }
  return {
    name: split.shift().toLowerCase(),
    value: split.join(' ').toLowerCase()
  }
}

/**
 * Compiles an array that combines strings that represent
 * product variant options with strings that represent
 * tag-based filters. This is used to generate the filters
 * in the PLP sidebar.
 *
 * @param {*} products
 */
export const aggregateProductOptionsWithTags = (products = [], acceptedFilters = []) => {
  const filters = products.reduce((obj, product) => {
    (product.tagNames || []).forEach(tagName => {
      if (typeof obj[tagName] === 'undefined') {
        obj[tagName] = {}
      }
      (product[tagName] || []).forEach(tagValue => {
        obj[tagName][tagValue] = true
      })
    })
    ;(product.optionNames || []).forEach(optionName => {
      if (typeof obj[optionName] === 'undefined') {
        obj[optionName] = {}
      }
      (product[optionName] || []).forEach(optionValue => {
        obj[optionName][optionValue] = true
      })
    })
    return obj
  }, {})

  return Object.keys(filters).reduce((obj, key) => {
    obj[key] = Object.keys(filters[key]).sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
    return obj
  }, {})
}

/**
 * Returns an array of filters with a filter
 * either added or removed.
 *
 * @param {*} filters
 * @param {*} facet
 */
export const toggleSelectedFilter = (facets, facet) => {
  let index = selectedFacetsIndex(facets, facet)
  let updated = facets.splice(0)
  if (~index) {
    updated.splice(index, 1)
  } else {
    updated.push(facet)
  }
  return updated
}

export const selectedFacetsIndex = (facets = {}, facet) => {
  let index = -1
  for (let i = 0; i < facets.length; i++) {
    const {name, value} = facets[i]
    if (facet.name === name && facet.value === value) {
      index = i
    }
  }
  return index
}

export const explodeProductsByColor = (products) => {
  const newProducts = []

  products.forEach(product => {
    let colors = []

    Object.keys(product).forEach(key => {
      if (key.toLowerCase() === 'color') {
        colors = product[key]
      }
    })

    if (colors.length) {
      colors.forEach(color => {
        const newProduct = { ...product }
        newProduct.displayOnlyColor = color

        newProducts.push(newProduct)
      })
    } else {
      newProducts.push(product)
    }
  })

  return newProducts
}
