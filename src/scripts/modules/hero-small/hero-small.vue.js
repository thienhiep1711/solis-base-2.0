import Vue from 'vue'
import 'modules/video/video.vue'

Vue.component('hero-small', {
  props: [
    'type',
    'invertedMode',
    'enableOverlay',
    'overlayOpacity',
    'heroStyle',
    'title',
    'description',
    'breakpoints',
    'imageSources',
    'backgroundColor',
    'video',
    'videoSmall',
    'videoLarge',
    'contentAlignment',
    'textAlignment',
    'fallback',
    'fallbackSmall',
    'fallbackLarge'
  ],
  computed: {
    heroClass () {
      let result = `hero-small hero-small--${this.heroStyle}  hero-small--text-${this.textAlignment} hero-small--content-${this.contentAlignment} bg-secondary-background`
      if (this.heroStyle && this.heroStyle.indexOf('fullwidth') > -1) {
        result += ` hero-small--fullwidth`
      }
      if (this.invertedMode) {
        result += ' hero-small--inverted'
      }
      return result
    },
    heroStyles () {
      return {
        background: this.backgroundColor && this.backgroundColor !== 'rgba(0,0,0,0)' && this.backgroundColor !== 'transparent'
          ? this.backgroundColor
          : ''
      }
    },
    heroVideos () {
      const videos = []

      if (this.video) {
        videos.push({ src: this.video, type: 'video/mp4', media: '(max-width: 767px)' })
      }

      if (this.videoSmall) {
        videos.push({ src: this.videoSmall, type: 'video/mp4', media: '(min-width: 767px) and (max-width: 999px)' })
      }

      if (this.videoLarge) {
        videos.push({ src: this.videoLarge, type: 'video/mp4', media: '(min-width: 1000px)' })
      }

      return videos
    }
  }
})
