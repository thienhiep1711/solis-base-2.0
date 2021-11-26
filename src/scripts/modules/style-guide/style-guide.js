import Vue from 'vue'

export default el => {
  return new Vue({
    el,
    data () {
      return {
        data: {}
      }
    },
    methods: {
      onInputChange (event) {
      }
    }
  })
}
