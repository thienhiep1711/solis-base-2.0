<template>
  <slot>
    <a
      :aria-label="label"
      :aria-pressed="isPressed"
      class="nav-trigger"
      href="#slideout-menu"
    >
      <slot>
        <div class="nav-trigger__inner">
          <span class="nav-trigger__bar nav-trigger__bar--top" />
          <span class="nav-trigger__bar nav-trigger__bar--middle" />
          <span class="nav-trigger__bar nav-trigger__bar--bottom" />
        </div>
      </slot>
    </a>
  </slot>
</template>
<script>
import './nav-trigger.css';

export default {
  name: "NavTrigger"
}
</script>
