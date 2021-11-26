import Vue from 'vue'
import Vuex from 'vuex'
import {
  isMobile
} from 'lib/util'
import {mutations, actions} from './@mutations'
import {
  updateURL,
  getStateFromUrl
} from './@util'

Vue.use(Vuex)

const defaults = {
  isMobile: isMobile(),
  isSearch: !!~document.location.href.indexOf('/search'),
  mounted: false,
  sort: 'manual',
  compactView: true,
  showFilterMenu: false,
  showCollectionMenu: false,
  searchQuery: '',
  acceptedFilters: ['style', 'material'],
  collection: {
    handle: '',
    image: '',
    title: '',
    description: '',
    fetched: false
  },
  products: [],
  facets: {},
  selectedFacets: [],
  ajaxing: false,
  loading: false
}

export default () => new Vuex.Store({
  state: Object.assign({},
    defaults,
    getStateFromUrl(Object.keys(defaults))
  ),
  actions,
  mutations,
  plugins: [updateURL]
})
