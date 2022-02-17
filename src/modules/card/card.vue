<template>
  <div :class="['card', className]">
    <div class="card__inner">
      <div
        ref="image"
        class="card__image-wrapper"
      >
        <a
          v-if="ctaPrimaryUrl"
          class="card__image-link"
          :href="ctaPrimaryUrl"
          title="ctaPrimaryUrl"
        >
          <figure class="card__image">
            <sel-image
              :sources="[
                featuredImage
              ]"
              :breakpoints="[
                '(min-width: 320px)'
              ]"
              class=""
              data-x="0"
              data-y="0"
            ></sel-image>
          </figure>
        </a>
      </div>
      <slot name="before-content" />
      <div class="card__content">
        <div class="card__content-inner">
          <slot name="label" />
          <h3
            v-if="title"
            :class="['card__title', titleClass]"
          >
            <a
              v-if="ctaPrimaryUrl"
              class="card__title-link"
              :href="ctaPrimaryUrl"
            >
              {{ title }}
            </a>
            <template v-else>
              {{ title }}
            </template>
          </h3>
          <slot name="description" />
        </div>
        <slot name="ctas" />
      </div>
      <slot name="after-content" />
    </div>
  </div>
</template>
<script>

import './card.css'

export default {
  name: 'CardVue',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    ctaPrimaryUrl: {
      type: String,
      default: ''
    },
    featuredImage: {
      type: String,
      default: ''
    },
    secondImage: {
      type: String,
      default: ''
    },
    isSrcSet: {
      type: Boolean,
      default: true
    }
  }
}
</script>
