import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import 'modules/video-popup-player/video-popup-player.vue'

Vue.use(VueYoutube)

export default el => new Vue({ el })
