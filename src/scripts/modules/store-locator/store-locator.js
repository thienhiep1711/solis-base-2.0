import StoreLocator from 'store-locator'
import jsonp from 'jsonp'
import qs from 'query-string'
import Vue from 'vue'
import { styles, icon, iconSize } from './@styles'

export default el => new Vue({
  el,
  data: {
    apiKey: '',
    entrypoint: '',
    distanceList: [
      {
        value: 25,
        label: '25 miles'
      },
      {
        value: 50,
        label: '50 miles'
      }
    ],
    address: ''
  },
  mounted () {
    this.apiKey = this.$el.dataset.apiKey
    this.entrypoint = this.$el.dataset.locationsUrl

    this.locator = new StoreLocator({
      lookup: this.lookup,
      settings: {
        key: this.apiKey,
        styles: styles,
        icon (location) {
          return icon
        },
        iconSize (location, zoom) {
          return iconSize
        }
      },
      templates: {
        sidebar: this.sidebar,
        marker: this.marker
      }
    })

    this.locator.on('response', ({address}) => {
      this.address = address
    })
  },
  methods: {
    getDistanceOptions () {
      return this.distanceList
    },
    getAddress () {
      return this.address
    },
    lookup ({lat, lng, distance}, done) {
      const params = {
        latitude: lat,
        longitude: lng,
        distance: distance
      }

      const query = qs.stringify(params)

      jsonp(`${this.entrypoint}?${query}`, {
        param: 'callback'
      }, (err, {locations = []}) => {
        if (err) {
          throw new Err(':( Oh no!)')
        }

        locations = locations
          .map(({latitude, longitude, ...location}) => ({
            lat: latitude,
            lng: longitude,
            ...location
          }))

        done({locations})
      })
    },
    sidebar ({name, address_line_1: address, city, state, postal_code: zip, phone, lat, lng}) {
      return `
        <div class="store-locator__address f ais pv1">
          <svg class="store-locator__address-icon w1 mr1" viewBox="0 0 56 82">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin" x="0" y="0"></use>
          </svg>
          <div class="store-locator__address-info">
            <h4 class="p1">${name}</h4>
            <p class="p2">${address}</p>
            <p class="p2">${zip}</p>
            ${(phone ? `<a class="block p2" href="tel:${phone}">${phone}</a>` : '')}
            <p class="p2">
              <a class="block a2" href="https://www.google.com/maps?daddr=${lat},${lng}" target="_blank">Get Directions</a>
              <a class="block js-scroll-up underline pointer">View on Map</a>
            </p>
          </div>
        </div>
      `
    },
    marker ({name, address_line_1: address, city, state, postal_code: zip, phone, lat, lng}) {
      return `
        <div class="store-locator__marker">
          <h4 class="p1">${name}</h4>
          <p class="p2">${address}</p>
          <p class="p2">${zip}</p>
          ${(phone ? `<a class="block p2" href="tel:${phone}">${phone}</a>` : '')}
          <a class="block p2" href="https://www.google.com/maps?daddr=${lat},${lng}" target="_blank">Get Directions</a>
        </div>
      `
    }
  }
})
