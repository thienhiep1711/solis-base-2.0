import select from 'select-dom'
import on from 'dom-event'
import { set, unset } from 'lib/util'
import enquire from 'enquire.js'
import inViewport from 'in-viewport'

/**
 * Updates the src attribute of the <source> elements of the video module
 * @param {node} $source The <source> elements of the video
 * @param {node} $video The <video> element
 * @param {object} config Configuration object
 */
export const updateSource = ($source, $video, config) => {
  Array.prototype.forEach.call($source, $el => {
    const media = $el.media

    if (!media) {
      loadVideo($el, $video, config)
      return
    }

    const match = onMediaQueryMatch($el, $video, config)
    const unmatch = onMediaQueryUnmatch($el, $video)

    registerMediaQuery(media, match, unmatch)
  })
}

/**
 * Load the video when it's in viewport
 * @param {node} $source <source> element to update
 * @param {node} $video <video> element to load
 * @param {object} config options for inViewport
 */
const loadVideo = ($source, $video, config) => {
  inViewport($video, config, () => {
    $source.src = $source.dataset.src
    $video.load()
  })
}

/**
 * Handles when a media query matches: update source, reload video
 * @param {node} $source <source> element
 * @param {node} $video <video> element
 */
const onMediaQueryMatch = ($source, $video, config) => {
  return () => {
    loadVideo($source, $video, config)
  }
}

/**
 * Handles when a media query doesn't match: update source, reload video
 * @param {node} $source <source> element
 * @param {node} $video <video> element
 */
const onMediaQueryUnmatch = ($source, $video) => {
  return () => {
    $source.removeAttribute('src')
    $video.load()
  }
}

/**
 * Registers handlers for a given media query
 * @param {string} mediaQuery
 * @param {function} match Callback fired when a media query matches
 * @param {function} unmatch Callback fired when a media query doesn't match
 */
const registerMediaQuery = (mediaQuery, match, unmatch) => {
  enquire.register(mediaQuery, {
    match,
    unmatch
  })
}

/**
 * Main function of the video module
 * @param {node} $el Root element
 */
export default $el => {
  const $playButton = select('.video__play-button', $el)
  const $volumeButton = select('.video__volume-button', $el)
  const $source = select.all('source', $el)
  const $video = select('video', $el)
  const offset = parseInt($el.dataset.offset)
  const config = { offset }

  const onVolumeChange = () => {
    if ($video.muted) {
      set($volumeButton, 'video__volume-button--muted')
    } else {
      unset($volumeButton, 'video__volume-button--muted')
    }
  }

  if ($source.length) {
    updateSource($source, $video, config)
    onVolumeChange()
  }

  on($video, 'canplay', (e) => {
    set($video, 'is-loaded')
  })

  on($video, 'play', (e) => {
    set($playButton, 'video__play-button--pause')
  })

  on($video, 'pause', (e) => {
    unset($playButton, 'video__play-button--pause')
  })

  on($playButton, 'click', (e) => {
    if ($video.paused) {
      $video.play()
    } else {
      $video.pause()
    }
  })

  on($video, 'volumechange', onVolumeChange)

  on($volumeButton, 'click', (e) => {
    $video.muted = !$video.muted
  })
}
