import Vue from 'vue'

Vue.component('flex-lookbook-product', {
  data () {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
      this.$refs.link.focus()
    }
  }
})
