import Vue from 'vue'

Vue.component('zoomable-image-enhanced', resolve => {
  require(['vue-zoom'], ({ default: vZoom }) => resolve({
    props: {
      src: String,
      zoom: String,
      enabled: Boolean
    },
    components: {
      vZoom
    },
    template: `
    <div :key="src">
      <v-zoom :img="src" width="100%" :zoom="zoom" :touch="false" />
    </div>
    `
  }))
})
