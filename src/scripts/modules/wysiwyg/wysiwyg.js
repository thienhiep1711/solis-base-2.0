import select from 'select-dom'
import { set } from 'lib/util'

const IMAGE_WRAPPER_CLASS = 'wysiwyg__image-wrapper'

export default el => {
  const images = select.all('img', el).filter(el => el.closest('.related-products') === null)
  if (images.length) {
    images.forEach(image => {
      const wrapper = document.createElement('div')
      set(wrapper, IMAGE_WRAPPER_CLASS)
      image.parentNode.insertBefore(wrapper, image)
      wrapper.appendChild(image)
    })
  }
}
