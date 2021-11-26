import Vue from 'vue'

Vue.component('plp-select', {
  props: [
    'name',
    'value',
    'id'
  ],
  data: function () {
    return {}
  },
  computed: {
    inputValue () {
      return this.sort
    }
  },
  methods: {
    updateSort (e) {
      this.$store
        .dispatch('updateSort', e.target.value)
        .then(() => {
          this.$store.dispatch('fetchCollection', {
            ajaxing: true,
            initial: false,
            resetSelectedFacets: false,
            explodeColor: true
          })
        })
    }
  },
  template: `
  <div class="plp-select">
    <select class="plp-select__el p2" :id="id" :name="name" :value="value" v-on:change="updateSort">
      <slot></slot>
    </select>
    <i class="plp-select__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
        <path d="M9 1L4.374 5 0 1" stroke="#343538" fill="none" fill-rule="evenodd"/>
      </svg>
    </i>
  </div>`
})
