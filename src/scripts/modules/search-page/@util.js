import qs from 'query-string'

export const getSearchTabFromUrl = () => {
  const parsed = qs.parse(
    window.location.search,
    { arrayFormat: 'bracket' }
  )
  return {
    activatedType: parsed.tab
  }
}
