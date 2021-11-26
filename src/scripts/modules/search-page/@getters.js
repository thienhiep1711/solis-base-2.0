export const getters = {
  activatedTab (state) {
    return state.tabs.find(tab => tab.type === state.activatedType)
  },
  heroText (state, getters) {
    return getters.activatedTab
      ? `Showing ${getters.activatedTab.count} ${getters.activatedTab.title} for "${state.searchTerms}"`
      : `Showing ${state.searchResults.length} Results for "${state.searchTerms}"`
  },
  resultsByType (state) {
    return state.activatedType
      ? state.searchResults.filter(item => item.resultType === state.activatedType)
      : state.searchResults
  }
}
