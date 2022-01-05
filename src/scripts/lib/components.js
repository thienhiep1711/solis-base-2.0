const initComponent = (Component, selector) => {
  const elements = [...document.querySelectorAll(`[data-component="${selector}"]`)]
  elements.forEach(element => {
    element.removeAttribute('data-component')
    Component(element)
  })
}

export {
  initComponent
}
