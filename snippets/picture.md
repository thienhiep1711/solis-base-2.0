# Picture README

## Summary
* This module has vanillaJS and Vue.js implementations. The `is_vue` variable should be set on the parent section module to initialize the appropriate scripts.
* Supports Vue dynamic props.
* Images are lazy-loaded using loading="lazy" attribute or IntersectionObserver.
* This module will fill its parent so the parent should have set dimensions or use an [aspect-ratio box](https://css-tricks.com/aspect-ratio-boxes).
* Supports multiple sources with corresponding breakpoints.
* Srcset is optimized with the sizes attribute.
* The `sources` parameter can receive Shopify, Accentuate or static image urls.
* The picture-resize snippet or Vue script will generate an array of resized images to be used with srcset.
* Note that static image urls will not have auto-resized images delivered via a CDN. Multiple sizes could be inputed as separate sources.
* Supports SVG.

## Usage
```
{%- render 'picture',
  class: '',
  bind_dynamic_props: false,
  sources: sources,
  breakpoints: '(max-width: 444px)|(max-width: 767px)|(min-width: 768px)',
  width: 100,
  width_s: 50,
  width_m: 50,
  width_l: 33,
  alt: image_alt,
  object_fit: 'cover',
  loader: true
-%}
```

## Parameters
This module accepts the following arguments:
* `class` (type: string): Additional classes
* `bind_dynamic_props` (type: boolean, default: false): Dynamically bind the `src` and `alt` attributes to an expression
* `sources` (type: string or array): Image src or Vue variable name when inside Vue app. Value can be an image url string or an array of image urls (separated by a pipe "|" when written in string form). Value can be filename only when used without Vue. Multiple images should be listed mobile first and correspond with breakpoints values.
* `breakpoints` (type: string): Media query breakpoint, multiple breakpoints should be separated by a pipe "|" and be listed mobile first. Note: Browser will use the first media value that is true.
* `width` (type: number, default: 100): Approximate width of image at mobile breakpoint in vw. Used by srcset to determine optimal image size.
* `width_s` (type: number, default: 100): Approximate width of image at tablet breakpoint in vw. Used by srcset to determine optimal image size.
* `width_m` (type: number, default: 100): Approximate width of image at large tablet breakpoint in vw. Used by srcset to determine optimal image size.
* `width_l` (type: number, default: 100): Approximate width of image at large desktop breakpoint in vw. Used by srcset to determine optimal image size.
* `alt`  (type: string): Image alt text or Vue variable name when inside Vue app.
* `object_fit` (type: string, default: 'cover'): Object fit style ('cover', 'contain')
* `loader` (type: boolean, default: true): Toggles loader animation

## Changelog
### v1.0.0 - 2020-04-14
* Initial release

### v1.0.1 - 2020-04-15
* Fix Vue-related bugs

### v1.0.2 - 2020-04-16
* Update picture variables

### v1.0.3 - 2020-04-20
* Inline picture-resize in picture module

### v1.0.4 - 2020-05-21
* Update picture whitespace
