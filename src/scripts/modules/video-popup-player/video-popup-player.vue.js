import Vue from 'vue'

Vue.component('video-popup-player', {
  props: {
    videoUrl: String
  },
  data () {
    return {
      isModalOpen: false
    }
  },
  computed: {
    videoId () {
      if (this.isModalOpen) {
        // get youtube id from url
        const videoUrl = this.videoUrl
        const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        const found = videoUrl.match(regex)

        if (found) {
          return found[1]
        }

        return videoUrl
      } else {
        return ''
      }
    }
  },
  methods: {
    toggleModal (state) {
      if (typeof state === 'undefined') {
        this.isModalOpen = !this.isModalOpen
      } else {
        this.isModalOpen = state
      }

      if (this.isModalOpen) {
        this.$nextTick(() => {
          this.$refs.modal.$refs.youtube.player.playVideo()
        })
      }
    }
  }
})
