import Vue from 'vue'

Vue.component('plp-sidebar-link', {
  props: [
    'href',
    'isActive'
  ],
  data: function () {
    return {}
  },
  methods: {
    onClick: function (e) {
      this.$emit('click', this.href)
    }
  },
  template: `
  <a
    class="plp-sidebar-link"
    :class="{'is-active' : isActive }"
    @click.prevent="onClick"
    :href="href">
      <span>
        <slot></slot>
      </span>
  </a>`
})
