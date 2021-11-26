import request from './@connectors'
import {
  aggregateProductOptionsWithTags,
  toggleSelectedFilter,
  interpretTags,
  explodeProductsByColor
} from './@util'

export const mutations = {
  changeCollection (state, handle) {
    state.collection.handle = handle
  },
  changeCollectionData (state, {
    menu,
    products,
    collection
  }) {
    state.menu = menu
    state.collection = collection
    state.products = (products || []).map(product => interpretTags(product, state.acceptedFilters))
    state.facets = aggregateProductOptionsWithTags(state.products, state.acceptedFilters)
    state.mounted = true
  },
  changeAjaxingFlag (state, ajaxing) {
    state.ajaxing = ajaxing
  },
  changeLoadingState (state, isLoading) {
    state.loading = isLoading
  },
  updateSelectedFacets (state, facet) {
    state.selectedFacets = toggleSelectedFilter(state.selectedFacets, facet)
  },
  resetSelectedFacets (state) {
    state.selectedFacets = []
  },
  updateSort (state, sort) {
    state.sort = sort
  },
  toggleFilterMenu (state, show) {
    state.showFilterMenu = show
  },
  toggleCollectionMenu (state, show) {
    state.showCollectionMenu = show
  },
  toggleCompactView (state, show) {
    state.compactView = show
  },
  updateFlowExperience  (state, experience) {
    state.experience = experience
  }
}

export const actions = {
  fetchCollection ({commit, state}, {
    handle = state.collection.handle,
    ajaxing = true,
    initial = false,
    resetSelectedFacets = true,
    explodeColor = false
  }) {
    !initial && commit('changeLoadingState', true)

    return new Promise((resolve, reject) => {
      request(handle, state, res => {
        const {
          menu,
          collection,
          products
        } = res

        commit('changeCollectionData', {
          menu,
          collection,
          products: explodeColor ? explodeProductsByColor(products) : products
        })

        ajaxing && commit('changeAjaxingFlag', ajaxing)

        !initial && resetSelectedFacets && commit('resetSelectedFacets')
        commit('toggleCollectionMenu', false)
        commit('changeLoadingState', false)
        resolve()
      })
    })
  },
  updateSelectedFacets ({commit, state}, facet) {
    commit('changeAjaxingFlag', true)
    commit('updateSelectedFacets', facet)
  },
  updateSort ({commit, state}, sort) {
    commit('updateSort', sort)
  },
  toggleFilterMenu ({commit, state}, show) {
    commit('toggleFilterMenu', show)
  },
  toggleCollectionMenu ({commit, state}, show) {
    commit('toggleCollectionMenu', show)
  },
  toggleCompactView ({commit, state}, show) {
    commit('toggleCompactView', show)
    commit('changeAjaxingFlag', true)
  },
  resetSelectedFacets ({commit, state}) {
    commit('resetSelectedFacets')
  }
}
