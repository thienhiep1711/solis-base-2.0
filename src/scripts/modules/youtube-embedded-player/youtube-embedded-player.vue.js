import Vue from 'vue'

Vue.component('youtube-embedded-player', {
  props: ['id'],
  computed: {
    src () {
      /**
       * See parameters
       * https://developers.google.com/youtube/player_parameters
       */
      return `https://www.youtube.com/embed/${this.id}?autoplay=1&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0`
    }
  },
  template: `
  <iframe
    frameborder="0"
    class="fill"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="allowfullscreen"
    :src="src"
    ref="externalVideo"
  >
  </iframe>
  `
})
