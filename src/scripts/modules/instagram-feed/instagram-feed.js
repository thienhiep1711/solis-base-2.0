import select from 'select-dom'
import Flickity from 'lib/flickity-custom-page-dots'

export default el => {
  const embedEl = select('.js-showcase-embed', el)
  const galleryId = el.getAttribute('data-gallery-id')

  const showcaseScriptTag = document.createElement('script')
  showcaseScriptTag.setAttribute('data-gallery-id', galleryId)
  showcaseScriptTag.src = `https://showcase.abovemarket.com/embed/gallery/${galleryId}`
  embedEl.appendChild(showcaseScriptTag)
}
