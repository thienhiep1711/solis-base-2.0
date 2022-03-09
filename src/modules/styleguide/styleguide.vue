<template>
  <slot />
  <styleguide-form />
</template>
<script>
import './styleguide.css'
import StyleguideForm from '../styleguide-form/styleguide-form.vue'

export default {
  name: 'StyleGuide',
  components: {
    StyleguideForm
  }
}
</script>
