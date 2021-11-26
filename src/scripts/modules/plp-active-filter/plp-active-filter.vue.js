import Vue from 'vue'
import {mapActions} from 'vuex'

Vue.component('plp-active-filter', {
  props: [
    'facet'
  ],
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'updateSelectedFacets'
    ])
  },
  template: `
  <a
    class="plp-active-filter p2"
    @click="updateSelectedFacets(facet)"
    href="javascript:void(0)">
    <span class="plp-active-filter__icon"><slot /></span>
    {{facet.value}}
  </a>`
})
