import range from 'lodash/range'
import chunk from 'lodash/chunk'
import Vue from 'vue'

Vue.component('pagination', {
  props: {
    currentPage: {
      type: Number,
      default: 1,
      required: true
    },
    totalCount: {
      type: Number,
      default: 0,
      required: true
    },
    perPage: {
      type: Number,
      default: 1,
      required: true
    },
    limit: {
      type: Number,
      default: 4
    }
  },
  computed: {
    totalPage () {
      return Math.floor(this.totalCount / this.perPage) +
        (this.totalCount % this.perPage > 0 ? 1 : 0)
    },

    isShowPrev () {
      return this.currentPage > 1
    },

    isShowNext () {
      return this.totalPage > 1 && this.currentPage < this.totalPage
    },

    /**
     * Number value of last page previous chunk
     * @returns {number}
     */
    firstPageOfPrevChunk () {
      const currentChunk = Math.floor((this.currentPage - 1) / this.limit)
      let prevChunkPage = 0
      if (currentChunk > 0) {
        const prevChunk = currentChunk - 1
        prevChunkPage = (prevChunk * this.limit) + this.limit
      }

      return prevChunkPage
    },

    /**
     * Number value of first page number next chunk
     * @returns {number}
     */
    firstPageOfNextChunk () {
      const currentChunk = Math.floor((this.currentPage - 1) / this.limit)
      const nextChunk = currentChunk + 1
      const nextChunkPage = (nextChunk * this.limit) + 1
      if (nextChunkPage <= this.totalPage) {
        return nextChunkPage
      } else {
        return 0
      }
    },

    /**
     * Array number of page value
     * @returns {*}
     */
    pages () {
      let pageLists = []
      const arrayRangePage = range(1, this.totalPage + 1)
      if (this.totalPage <= this.limit || this.limit === 0) {
        pageLists = arrayRangePage
      } else {
        const chunkPages = chunk(arrayRangePage, this.limit)
        const currentChunk = Math.floor((this.currentPage - 1) / this.limit)
        pageLists = chunkPages[currentChunk]
      }

      return pageLists
    }
  },
  methods: {
    // @eventHandler
    handleClickPage (page) {
      this.$emit('change', page)
    },

    // @eventHandler
    handleClickPrev () {
      const prev = this.currentPage - 1
      prev > 0 ? this.$emit('change', prev) : this.$emit('change', 1)
    },

    // @eventHandler
    handleClickNext () {
      const next = this.currentPage + 1
      next <= this.totalPage ? this.$emit('change', next) : this.$emit('change', this.totalPage)
    },

    /**
     * @ventHandler
     * @description: Trigger custom event `change` on parent component
     * @param: value of next page
     **/
    handleClickDoubleNext (next) {
      if (!next) { return }
      this.$emit('change', next)
    },

    /**
     * @ventHandler
     * @description: Trigger custom event `change` on parent component
     * @param: value of previous page
     **/
    handleClickDoublePrev (prev) {
      if (!prev) { return }
      this.$emit('change', prev)
    }
  }
})
