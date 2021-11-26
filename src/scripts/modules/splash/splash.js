import nanoajax from 'nanoajax'

export default el => {
  nanoajax.ajax({url: '/cart/update.js', method: 'POST', body: 'attributes[hide_overlay]=1'}, () => {})
}
