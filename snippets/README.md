# Video Module

Responsive html5 video with lazy loading.

## API Reference

- `class` Additional classes for the module.
- `source` <source> elements for vanilla js version. Array of
  sources for vue version.
- `video` Video URL for mobile
- `video_s` Video URL for tablet + large tablet
- `video_l` Video URL for desktop
- `fallback` Fallback image for mobile
- `fallback_s` Fallback image for tablet + large tablet
- `fallback_l` Fallback image for desktop
- `poster` A url for an image to be shown while the video is
  downloading.
- `offset` A length in pixels used to compute when the video will
  soon be visible and load it just before it comes visible.
- `is_vue` Set it to true to enable the vue version of the module.

## Usage

### Vanilla JS

```
{%- render 'video',
  video: video,
  video_s: video_s,
  video_l: video_l,
  fallback: fallback,
  fallback_s: fallback_s,
  fallback_l: fallback_l,
  offset: 300,
  is_vue: false -%}
```

### Vue Component

```
sourceList = [
  { src: 'small.mp4', type: 'video/mp4', media: '(max-width: 480px)' },
  { src: 'video.mp4', type: 'video/mp4' }
]
```

```
{%- render 'video',
  is_vue: true,
  source: 'sourceList' -%}
```
