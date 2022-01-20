import { onPassive } from 'lib/dom'
import debounce from 'lodash.debounce'
const MOBILE_BREAKPOINT = 768
const DESKTOP_BREAKPOINT = 1025

/* Global mixins */
export default {
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth < MOBILE_BREAKPOINT
    },
    isTablet () {
      return this.windowWidth >= MOBILE_BREAKPOINT && this.windowWidth < DESKTOP_BREAKPOINT
    },
    isDesktop () {
      return this.windowWidth >= DESKTOP_BREAKPOINT
    }
  },
  methods: {
    resizeCallback () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    this.debouncedResizeCallback = debounce(this.resizeCallback, 50)

    this.$nextTick(() => {
      onPassive('resize', this.debouncedResizeCallback, window)
    })
  },
  beforeUnmoute () {
    off('resize', this.debouncedResizeCallback, window)
  }
}
/* End global mixins */
