# Shopify Base Theme

## Getting Started

1. Install [Shopify CLI](https://shopify.dev/themes/tools/cli)
2. Run `shopify login --store your-store-domain.myshopify.com`
3. Run `npm ci` to install dependencies
4. Run `npm start` to start local environment

## Deployment

Run `npm run deploy` to push your theme to the store. This theme will not be published just yet.

To publish the theme, run `shopify theme publish [THEME ID]`.

## Dev Note
1. Create a new section, we need:
   - Create a new `name.liquid` in the folder `sections/`
   - Create a new empty `section-name.js` in the folder `src/scripts/entries/`
```js
console.log('Loading section name')
```
   - Include the required parts (the same name with entry file name)
```liquid
{{ 'section-name.css' | asset_url | stylesheet_tag }}
<script src="{{ 'section-name.js' | asset_url }}"></script>
```
  - In the JS file, use 2 utils function `initComponent, initVueComponent` to init all required components
```js
initComponent(HeaderTopBar, 'header-top-bar')
initVueComponent(HeaderCart, 'HeaderCart', 'header-cart')
```

2. Create a new module, we need:
   - Create a new `name.liquid` in the folder `snippets/`
   - Create a new sub folder `module-name` in the folder `src/modules/`
   - Create a new `name.js` or `name.vue` in the folder `src/modules/module-name/`
   - Create a new `name.css` in the folder `src/modules/module-name/`
   - Require CSS into the JS file with `import './module-name.css'`

3. TODO: Create a bash script that can help to create module + section
