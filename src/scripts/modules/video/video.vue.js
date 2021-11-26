import Vue from 'vue'
import { updateSource } from './video.js'

Vue.component('vue-video', {
  props: ['source', 'poster'],
  data () {
    return {
      isLoaded: false,
      isPlaying: false,
      isMuted: true
    }
  },
  mounted () {
    const offset = parseInt(this.$el.dataset.offset)
    const config = { offset }

    updateSource(this.$refs.source, this.$refs.video, config)
    this.onVolumeChange()
  },
  methods: {
    onCanPlay () {
      this.isLoaded = true
    },
    onPlay () {
      this.isPlaying = true
    },
    onPause () {
      this.isPlaying = false
    },
    togglePlay () {
      this.isPlaying = !this.isPlaying

      if (this.isPlaying) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    },
    onVolumeChange () {
      this.isMuted = this.$refs.video.muted
    },
    toggleAudio () {
      this.isMuted = !this.isMuted
      this.$refs.video.muted = this.isMuted
    }
  }
})
