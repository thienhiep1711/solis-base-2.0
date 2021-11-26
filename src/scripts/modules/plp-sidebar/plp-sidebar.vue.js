import Vue from 'vue'
import {mapState, mapActions} from 'vuex'
import ClickOutside from 'vue-click-outside'
import select from 'select-dom'
import on from 'dom-event'
import {
  selectedFacetsIndex
} from 'modules/plp/@util'
import {
  handleize
} from 'lib/util'
import 'modules/color-circle/color-circle.vue.js'
import 'modules/checkbox/checkbox.vue.js'
import 'modules/tooltip/tooltip.vue.js'

const qs = Math.ceil(Date.now() / 60 / 60 / 24) // Changes once a day
const URL = window.FILE_CDN
const allSizes = [
  {
    option: 'XXS',
    value: 'XX-Small'
  },
  {
    option: 'XS',
    value: 'X-Small'
  },
  {
    option: 'S',
    value: 'Small'
  },
  {
    option: 'M',
    value: 'Medium'
  },
  {
    option: 'L',
    value: 'Large'
  },
  {
    option: 'XL',
    value: 'X-Large'
  },
  {
    option: 'XXL',
    value: 'XX-Large'
  }
]

Vue.component('plp-sidebar', {
  directives: {
    ClickOutside
  },
  props: [
    'title'
  ],
  data () {
    return {
      collectionListActive: false,
      activeClickOutside: false
    }
  },
  computed: {
    ...mapState([
      'facets',
      'selectedFacets',
      'showFilterMenu',
      'showCollectionMenu'
    ])
  },
  watch: {
    showFilterMenu () {
      this.activeClickOutside = false

      setTimeout(() => {
        this.activeClickOutside = true
      }, 200)
    },
    selectedFacets () {
      this.activeClickOutside = false

      setTimeout(() => {
        this.activeClickOutside = true
      }, 200)
    }
  },
  methods: {
    ...mapActions([
      'updateSelectedFacets',
      'toggleFilterMenu',
      'resetSelectedFacets',
      'toggleCollectionMenu'
    ]),
    isActiveFilter (group, facet) {
      return ~selectedFacetsIndex(this.selectedFacets, {
        name: group,
        value: facet
      })
    },
    getColorImageSrc (color) {
      return `${URL}${handleize(color)}.png?${qs}`
    },
    getStyles (type, color) {
      if (type.toLowerCase() === 'color') {
        return {
          'backgroundImage': `url(${this.getColorImageSrc(color)})`,
          'backgroundColor': `${color.toLowerCase()}`
        }
      }

      return {}
    },
    setHeaderHeight () {
      const header = select('.site-header')
      this.$el.setAttribute('style', '--header-height:' + header.offsetHeight + 'px')
    },
    closeFilterMenu () {
      if (this.activeClickOutside && this.showFilterMenu) {
        this.toggleFilterMenu(false)
      }
    },
    getAvailableSizes (availableSizes) {
      const sizes = []

      allSizes.forEach(size => {
        if (availableSizes.includes(size.option)) {
          sizes.push(size)
        }
      })

      return sizes
    },
    handleize (str) {
      return handleize(str)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setHeaderHeight()
      on(window, 'resize', this.setHeaderHeight)
    })
  },
  template: `
  <div :class="{'is-collection-list-active': showCollectionMenu}" v-click-outside="closeFilterMenu">
    <h2 class="sr-only">Collection Sidebar</h2>
    <slot></slot>
    <div
      class="plp-sidebar__list plp-sidebar__list--filters"
      :class="{'is-active': showFilterMenu}">
      <div class="plp-sidebar__filter-label label">Filter By</div>
      <div class="plp-sidebar__close">
        <button class="is-icon a1" href="/" @click="toggleFilterMenu(false)" ref="closeButton">
          <i>
            <svg viewBox="0 0 17 17"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close" x="0" y="0"></use></svg>
          </i>
          <span class="sr-only">Close Sidebar</span>
        </button>
      </div>
      <div class="plp-sidebar__body">
        <div
          v-for="key in Object.keys(facets).sort()"
          :key="'filter-group' + handleize(key)"
          :class="'plp-sidebar__list-group--' + handleize(key)"
          class="plp-sidebar__list-group plp-sidebar__list-group--shape">
          <h3 class="h5">{{key}}</h3>
          <ul v-if="key !== 'Size' && key !== 'Top Size' && key !== 'Bottom Size'">
            <li
              class="plp-sidebar__list-group-item plp-sidebar__list-group-item--filter"
              v-for="(facet, i) in facets[key]"
              :style="getStyles(key, facet)"
              :class="'plp-sidebar__list-group-item--' + handleize(facet)"
              @click="updateSelectedFacets({name: key, value: facet})">
              <checkbox
                :key="facet + isActiveFilter(key, facet)"
                :checked="isActiveFilter(key, facet)"
                :label="facet"
                :title="facet" />
            </li>
          </ul>
          <ul v-else>
            <li
              class="plp-sidebar__list-group-item plp-sidebar__list-group-item--filter"
              v-for="(size, i) in getAvailableSizes(facets[key])"
              @click="updateSelectedFacets({name: key, value: size.option})">
              <checkbox
                :key="size.option + isActiveFilter(key, size.option)"
                :checked="isActiveFilter(key, size.option)"
                :label="size.value" />
            </li>
          </ul>
        </div>
      </div>
      <div class="plp-sidebar__footer">
        <div class="plp-sidebar__apply-filter">
          <a
            href="javascript:void(0)"
            @click="toggleFilterMenu(false)"
            class="btn btn--secondary block align-c w1">Apply Filters</a>
        </div>
        <div class="plp-sidebar__reset-filter align-c">
          <a
            href="javascript:void(0)"
            v-on:click="resetSelectedFacets"
            class=underline>Reset Filters</a>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showFilterMenu"
        v-on:click="toggleFilterMenu(false)"
        class="plp-sidebar__list-overlay"></div>
    </transition>
  </div>`
})
