import Vue from 'vue'
import store from './@store'
import { mapState, mapActions, mapGetters } from 'vuex'
import { fetchData } from 'lib/util'
import 'modules/product-card/product-card.vue'
import 'modules/picture/picture.vue'
import 'modules/color-selector/color-selector.vue'

export default el => new Vue({
  el,
  store,
  data () {
    return {
      perPage: 15,
      totalResults: 0,
      ajaxing: false
    }
  },
  created () {
    return fetchData(`${window.location.search}&view=search-results`)
      .then((data) => {
        this.setSearchResults(data.results)
        this.totalResults = data.totalResults
        this.getAllSearchResults()
        this.ajaxing = true
      })
  },
  computed: {
    ...mapState([
      'activatedType',
      'searchResults',
      'currentPage'
    ]),
    ...mapGetters([
      'resultsByType'
    ]),
    totalResultsByType () {
      return this.resultsByType.length
    },
    totalPages () {
      return Math.ceil(this.totalResults / this.perPage)
    },
    paginatedResults () {
      const page = this.currentPage
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      return this.resultsByType.slice(from, to)
    }
  },
  methods: {
    ...mapActions([
      'setSearchResults',
      'setCurrentPage'
    ]),
    getAllSearchResults () {
      const chain = []
      for (let i = 2; i <= this.totalPages; i++) {
        chain.push(fetchData(`${window.location.search}&view=search-results&page=${i}`))
      }
      Promise.all(chain).then(responses => {
        responses.forEach(res => {
          const results = [...this.searchResults, ...res.results]
          this.setSearchResults(results)
        })
      })
    },
    handleChangePagination (event) {
      this.setCurrentPage(event)
      this.ajaxing = true
    }
  }
})
