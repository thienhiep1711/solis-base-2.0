export default {
  data () {
    return {
      content: []
    }
  },
  computed: {
    modalContent () {
      return this.content.map((item, index) => {
        return {
          id: item.id,
          name: item.title,
          content: item.body_html
        }
      })
    }
  },
  methods: {
    fetchPage (pageHandle) {
      const path = `/pages/${pageHandle}.json`

      return fetch(path)
        .then(response => response.json())
    },
    openSizeGuideModal (pageHandle) {
      if (pageHandle.indexOf(',')) {
        const chain = pageHandle.split(',').map(this.fetchPage)
        return Promise.all(chain).then(this.handleResponse)
      } else {
        this.fetchPage(pageHandle)
          .then(this.handleResponse)
      }
    },
    handleResponse (res) {
      if (res instanceof Array) {
        this.content = []

        res.map(({page}) => {
          this.content.push(page)
        })
      } else {
        this.content = res
      }
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  }
}
