export const mutations = {
  page (state, page) {
    state.page = page
  }
}

export const actions = {
  setPage ({ commit, state }, page) {
    commit('page', page)
  }
}
