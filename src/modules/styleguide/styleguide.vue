<template>
  <div class="style-guide">
    <styleguide-colors></styleguide-colors>
    <styleguide-typography></styleguide-typography>
  </div>
</template>

<script>
import './styleguide.css'
import StyleguideColors from './styleguide-colors.vue'
import StyleguideTypography from './styleguide-typography.vue'

export default {
  name: "Styleguide",
  components: {
    StyleguideColors,
    StyleguideTypography
  }
}
</script>
