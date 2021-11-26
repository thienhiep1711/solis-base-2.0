import select from 'select-dom'
import on from 'dom-event'
import { trapFocus, removeElement } from 'lib/util'

const doc = document.documentElement
const form = select('.js-age-gate-form')

const activateAgeGate = (el) => {
  doc.classList.add('js-age-gate-active')

  const minAge = parseInt(el.dataset.minAge)

  if (form) on(form, 'submit', submitBirthday(el, minAge))
}

const deactivateAgeGate = (el) => {
  doc.classList.remove('js-age-gate')
  doc.classList.remove('js-age-gate-active')

  setTimeout(() => {
    removeElement(el)
  }, 500)

  localStorage.setItem('age_gate', '1')
}

const submitBirthday = (el, minAge) => {
  return e => {
    e.preventDefault()

    const month = parseInt(select('[name="month"]', e.target).value) - 1 // JavaScript counts months from 0 to 11.
    const day = parseInt(select('[name="day"]', e.target).value)
    const year = parseInt(select('[name="year"]', e.target).value)
    const birthday = new Date(year, month, day)

    if (isLegal(minAge, birthday)) {
      deactivateAgeGate(el)
    } else {
      doc.classList.add('has-error')
    }
  }
}

const isLegal = (minAge, birthday) => {
  const legalDate = new Date()
  legalDate.setFullYear(legalDate.getFullYear() - minAge)

  return birthday <= legalDate
}

export default (el) => {
  if (doc.classList.contains('js-age-gate') && localStorage.getItem('age_gate') !== '1') {
    activateAgeGate(el)
    el.focus()
    trapFocus(el)
  } else {
    deactivateAgeGate(el)
  }
}
