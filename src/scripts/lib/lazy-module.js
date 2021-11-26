import inViewport from 'in-viewport'
import select from 'select-dom'

/**
 * Lazy loads a Module
 * @param {String} module - Selector that triggers the load of the module
 * @param {Object} options - Options for in-viewport
 * @returns {Promise} Resolves with a dynamic import
 */
export default (module, options = {}) => new Promise(resolve => {
  const element = select(`[data-module="${module}"]`)

  inViewport(element, options, () => resolve(
    import(
      /* webpackMode: "lazy-once" */
      `root/modules/${module}/${module}.js`
    )
  ))
})
