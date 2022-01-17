<template>
  <div class="style-guide">
    <styleguide-colors></styleguide-colors>
  </div>
</template>

<script>
import './styleguide.css'
import StyleguideColors from './styleguide-colors.vue'

export default {
  name: "Styleguide",
  components: {
    StyleguideColors
  }
}
</script>
