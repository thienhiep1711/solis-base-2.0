import Vue from 'vue'
import select from 'select-dom'
import { contains } from 'lib/util'

Vue.component('zoomable-image', resolve => {
  require(['vue-zoom'], ({ default: vZoom }) => resolve({
    props: {
      src: String
    },
    components: {
      vZoom
    },
    methods: {
      onZoomIn () {
        const wrapper = this.$el
        const img = select('img.zoomImg', this.$el)
        if (contains(wrapper, 'fit-cover')) {
          this.isActive = img.offsetWidth > wrapper.offsetWidth && img.offsetHeight > wrapper.offsetHeight
        } else {
          this.isActive = img.offsetWidth > wrapper.offsetWidth
        }
      }
    },
    data: function () {
      return {
        isActive: ''
      }
    },
    updated (next) {
      // We need to fade in the images here
      // when the user changes the active image src
      // to make the transition less aggressive
    },
    template: `
    <div :key="src">
      <v-zoom :img="src" :onZoomIn="onZoomIn" :class="['zoomImg', isActive ? 'zoomImg--is-active' : '']" width="100%" />
    </div>
    `
  }))
})
