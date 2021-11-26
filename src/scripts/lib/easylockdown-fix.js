/**
 * Fix easylockdown styles
 */
export default function easyLockdownFix () {
  const $wrapper = document.getElementById('easylockdown-wrapper')

  if ($wrapper) {
    const $content = document.querySelector('.main > .content')
    const $errorMsg = document.getElementById('easylockdown-password-error')
    const $h1 = $wrapper.querySelector('#easylockdown-password-note h1')
    const $input = document.getElementById('easylockdown-password')
    const $button = document.getElementById('easylockdown-password-form-button')

    if ($errorMsg) {
      $errorMsg.parentNode.appendChild($errorMsg)
    }

    if ($content) {
      $content.classList.add('content--easylockdown')
    }

    if ($h1) {
      $h1.className = 'h3'
    }

    if ($input) {
      $input.className = 'text-input__el'
    }

    if ($button) {
      $button.className = 'btn btn--primary'
      $button.innerHTML = '<div class="button__el">' + $button.innerHTML + '</div>'
    }
  }
}
