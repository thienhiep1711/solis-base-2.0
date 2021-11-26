import animate from 'lib/animate'

export default {
  mounted () {
    this.$nextTick(() => {
      animate(this.$el, true)
    })
  }
}
