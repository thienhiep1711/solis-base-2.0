import Vue from 'vue'

Vue.component('style-guide', {
  props: [
    'firstName',
    'isDefault',
    'items'
  ],
  data () {
    return {}
  },
  methods: {
    getInitialValue (name) {
      const match = name.match(/\[(.*)\]/)
      if (!match[1]) {
        return ''
      }
      const str = match[1]

      switch (str) {
        case 'first_name':
          return this['firstName'] || ''
        case 'default':
          return this['isDefault'] || false
        default:
          return this[str] || ''
      }
    },
    onInputChange ({name, value}) {
      const match = /\D\[(\D+)\]/.exec(name)
      if (!match || !match[1]) {
        return false
      }
    }
  },
  computed: {
    itemCount () {
      return this.items
    },
    itemCountText () {
      return `Your bag - ${this.itemCount} items`
    }
  }
})
