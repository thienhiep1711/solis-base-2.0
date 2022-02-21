<template>
  <slot />
  <styleguide-form />
  <styleguide-component />
</template>
<script>
import './styleguide.css'
import StyleguideForm from '../styleguide-form/styleguide-form.vue'
import StyleguideComponent from '../styleguide-component/styleguide-component.vue'

export default {
  name: 'StyleGuide',
  components: {
    StyleguideForm,
    StyleguideComponent
  }
}
</script>
