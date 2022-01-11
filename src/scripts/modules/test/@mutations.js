export const mutations = {
  active (state, active) {
    state.active = active
  }
}

export const actions = {
  setActive ({ commit, state }, value) {
    commit('active', value)
  }
}
