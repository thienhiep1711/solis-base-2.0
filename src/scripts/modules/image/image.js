import on from 'dom-event'
import objectFitImages from 'object-fit-images'
import Layzr from 'layzr.js'
import {set} from 'lib/util'
import select from 'select-dom'

const instance = Layzr({
  normal: 'data-normal',
  retina: 'data-retina',
  srcset: 'data-srcset',
  threshold: 0
})

instance
  .on('src:before', image => {
    const onLoad = function () {
      let container = image.parentNode || false
      let sources = select.all('source', container) || false

      if (sources) {
        for (let source of sources) {
          if (source.hasAttribute('data-srcset')) {
            source.setAttribute('srcset', source.getAttribute('data-srcset'))
            source.removeAttribute('data-srcset')
          }
        }
      }

      if (container) {
        set(container, 'is-loaded')
      }
      objectFitImages()
    }

    /* For some reason, onLoad events are not firing on picture elements in Safari. */
    const fallbackEvent = setTimeout(onLoad, 500)

    image.onload = () => {
      onLoad()
      clearTimeout(fallbackEvent)
    }
  })

export default (el) => {
  instance
    .update()
    .check()
    .handlers(true)

  console.warn('The image module has been depreciated. Please replace with the picture module.')
}
