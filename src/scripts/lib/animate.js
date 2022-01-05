import inView from 'in-viewport'
import select from 'select-dom'
import anime from 'animejs'
import SplitText from 'lib/split-text'

const findGroups = (el, isVue = false) => {
  const groups = select.all('.a-group, [data-a-group]', el)

  return groups.filter(group => {
    return (isVue || !group.hasAttribute('data-a-is-vue')) && !select('.a-group, [data-a-group]', group)
  })
}

const findStaggers = (el) => {
  return select.all('[data-a-stagger]', el)
}

const isSlide = (el) => {
  const type = el.getAttribute('data-a-type')
  const tagName = el.tagName.toLowerCase()

  if (type) {
    return type === 'slide'
  }

  return tagName === 'h1' || tagName === 'h2'
}

const getAnimationDuration = (el = false) => {
  let duration = false
  let staggers = []

  if (el) {
    duration = el.getAttribute('data-a-duration')
    staggers = findStaggers(el)
  }

  if (duration === 'short') {
    return 3000 / staggers.length
  } else if (duration === 'long') {
    return 1000
  } else if (duration) {
    return duration
  }

  return Math.min(4000 / staggers.length, 800)
}

const getAnimationOffset = (el, duration) => {
  const offset = el.getAttribute('data-a-offset')

  if (offset === 'no') {
    return `-=${duration}`
  }

  return '-=200'
}

const animateElements = (staggers, duration) => {
  if (staggers && staggers.length) {
    let isFirst = true
    const timeline = anime.timeline({
      easing: 'cubicBezier(0.250, 0.250, 0.265, 1)',
      duration
    })

    for (const stagger of staggers) {
      if (isSlide(stagger)) {
        stagger.setAttribute('style', 'opacity: 1')
        const remainWrapperUnderline = stagger.getAttribute('data-remain-underline')

        if (stagger.children.length) {
          const options = {
            targets: stagger,
            translateY: ['200%', '0%'],
            duration: 800
          }

          if (isFirst) {
            options.delay = 300
            isFirst = false
          }

          timeline.add(options, '-=450')
        } else {
          const lines = new SplitText(stagger, {
            type: 'lines',
            linesClass: 'a-slide-wrap'
          }).lines

          const innerLines = new SplitText(lines, {
            type: 'lines',
            linesClass: 'a-slide'
          }).lines

          for (const line of innerLines) {
            const options = {
              targets: line,
              translateY: ['100%', '0%'],
              duration: 800
            }

            if (isFirst) {
              options.delay = 300
              isFirst = false
            }

            timeline.add(options, '-=450')

            // underline
            const underline = document.createElement('div')
            underline.classList.add('a-slide-wrap__underline')
            line.insertAdjacentElement('afterend', underline)

            timeline.add({
              targets: underline,
              right: '0',
              duration: 400
            }, '-=400')
          }

          for (const line of innerLines) {
            const underline = line.parentNode.querySelector('.a-slide-wrap__underline')

            const left = remainWrapperUnderline === 'true' ? 0 : '100%'
            timeline.add({
              targets: underline,
              left,
              duration: 400
            }, '-=100')
          }
        }
      } else {
        stagger.classList.add('a-fade')

        const options = {
          targets: stagger,
          opacity: [0, 1]
        }

        if (isFirst) {
          options.delay = 300
          isFirst = false
        }

        timeline.add(options, getAnimationOffset(stagger, duration))
      }
    }
  }
}

export default function animate (el, isVue = false, startImmediately = false) {
  const groups = findGroups(el, isVue)

  if (groups.length === 0) {
    const staggers = findStaggers(el)

    if (staggers.length) {
      if (startImmediately) {
        animateElements(staggers, getAnimationDuration())
      } else {
        inView(el, { offset: -200 }, () => animateElements(staggers, getAnimationDuration()))
      }
    }
  } else {
    for (const group of groups) {
      const staggers = findStaggers(group)

      if (staggers.length) {
        if (startImmediately) {
          animateElements(staggers, getAnimationDuration(group))
        } else {
          inView(group, { offset: -200 }, () => animateElements(staggers, getAnimationDuration(group)))
        }
      }
    }
  }
}
