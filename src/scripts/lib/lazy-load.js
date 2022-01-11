import { on } from 'lib/dom'
import Layzr from 'lib/layzr-fork'
import { set, isIEorEdge } from 'lib/utils'

/* Setup LazyLoad */
const instance = Layzr({
  normal: 'data-normal',
  retina: 'data-retina',
  srcset: 'data-srcset',
  threshold: 0
})

instance
  .on('src:before', (image) => {
    on(image, 'load', (event) => {
      let container = image.parentNode
      let ancestor = container ? container.parentNode : false

      /* Fallback for IE and Edge */
      if (isIEorEdge()) {
        let fallback = document.createElement('div')
        fallback.style.backgroundImage = `url(${image.src})`
        fallback.setAttribute('class', 'img__el img__el--ie js-fallback')
        container.replaceChild(fallback, image)
      }

      set(container, 'is-loaded')
      if (ancestor) {
        set(ancestor, 'img-is-loaded')
      }
    })
  })

const start = () => {
  let init = false
  return (force = false) => {
    if (init && !force) {
      return
    }
    instance
      .update()
      .check()
      .handlers(true)
    init = true
  }
}
const triggerOnce = start()

export default (el = false, force = false) => {
  triggerOnce(force)
}
