export const mutations = {
  mutateSetTabs (state, tabs) {
    state.tabs = tabs
  },
  mutateSetActivatedType (state, tab) {
    state.activatedType = tab
  },
  mutateSetSearchTerms (state, terms) {
    state.searchTerms = terms
  },
  mutateSetSearchResults (state, searchResults) {
    state.searchResults = searchResults
  },
  mutateSetCurrentPage (state, currentPage) {
    state.currentPage = currentPage
  }
}

export const actions = {
  setTabs ({commit, state}, tabs) {
    commit('mutateSetTabs', tabs)
  },
  setActivatedType ({commit, state}, tab) {
    commit('mutateSetActivatedType', tab)
  },
  setSearchTerms ({commit, state}, terms) {
    commit('mutateSetSearchTerms', terms)
  },
  setSearchResults ({commit, state}, searchResults) {
    commit('mutateSetSearchResults', searchResults)
  },
  setCurrentPage ({commit, state}, currentPage) {
    commit('mutateSetCurrentPage', currentPage)
  }
}
