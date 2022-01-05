import select from 'select-dom'

/**
 * Initializes JS modules within a DOM Element.
 *
 * @param {Object} modules - Modules to initialize, keys are selectors and values are modules
 * @param {Element} parent - DOM element where Modules are contained
 */
function initializer (modules = {}, parent = document) {
  const moduleElements = select.all('[data-module]', parent)

  moduleElements.forEach(el => {
    const moduleName = el.dataset.module
    const module = modules[moduleName]

    if (!module) {
      return
    }

    if (typeof module.then === 'function') {
      module.then(({ default: asyncModule }) => {
        init(asyncModule, el)
      })
      return
    }

    init(module, el)
  })
}

/**
 * Initializes a Module
 * @param {Function} module - Module to initialize
 * @param {Element} el - Element to initialize the Module
 */
function init (module, el) {
  if (typeof module.bind === 'undefined') {
    return
  }

  module(el)
}

export default initializer
