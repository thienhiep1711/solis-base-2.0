import Flickity from 'flickity-as-nav-for'
const proto = Flickity.PageDots.prototype
proto._create = function () {
  // create holder element
  this.holder = document.createElement('div')
  this.holder.className = 'flickity-page-dots'
  // create dots, array of elements
  this.dots = []
  // events
  this.handleClick = this.onClick.bind(this)
  this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent))
}
proto.addDots = function (count) {
  const fragment = document.createDocumentFragment()
  const newDots = []
  const length = this.dots.length
  const max = length + count

  for (let i = length; i < max; i++) {
    const dot = document.createElement('button')
    dot.setAttribute('type', 'submit')
    dot.className = 'dot'
    dot.setAttribute('aria-label', 'Page dot ' + (i + 1))
    fragment.appendChild(dot)
    newDots.push(dot)
  }

  this.holder.appendChild(fragment)
  this.dots = this.dots.concat(newDots)
}
proto.onClick = function (event) {
  const target = event.target
  // only care about dot clicks
  if (target.nodeName !== 'BUTTON') {
    return
  }
  this.parent.uiChange()
  const index = this.dots.indexOf(target)
  this.parent.select(index)
}

const buttonProto = Flickity.PrevNextButton.prototype

buttonProto.update = function () {
  // index of first or last slide, if previous or next
  const slides = this.parent.slides
  // enable is wrapAround and at least 2 slides
  if (this.parent.options.wrapAround && slides.length > 1) {
    this.enable()
    return
  }

  if (this.parent.size.innerWidth >= this.parent.slideableWidth - 8) {
    this.disable()
    return
  }

  const lastIndex = slides.length ? slides.length - 1 : 0
  const boundIndex = this.isPrevious ? 0 : lastIndex
  const method = this.parent.selectedIndex === boundIndex ? 'disable' : 'enable'
  this[ method ]()
}

export default Flickity
