<template>
  <div class="style-guide">
    <styleguide-colors></styleguide-colors>
    <styleguide-typography></styleguide-typography>
    <styleguide-button></styleguide-button>
  </div>
</template>

<script>
import './styleguide.css'
import StyleguideColors from './styleguide-colors.vue'
import StyleguideTypography from './styleguide-typography.vue'
import StyleguideButton from './styleguide-button.vue'

export default {
  name: "Styleguide",
  components: {
    StyleguideColors,
    StyleguideTypography,
    StyleguideButton
  }
}
</script>
