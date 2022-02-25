<template>
  <div class="cart-item" v-if="value">
    <div class="cart-item__inner">
      <slot name="image">
        <a
          :href="value.url"
          class="image cart-item__col cart-item__col--image"
        >
          <sel-image
            :sources="[
              value.featured_image.url
            ]"
            :breakpoints="[
              '(max-width: 320px)',
            ]"
          />
        </a>
      </slot>
       <div class="cart-item__col cart-item__col--content">
        <div class="cart-item__header">
          <h4 class="cart-item__title">
            <a
              class="cart-item-title cart-item__title-link"
              :href="value.url"
            >
              {{ value.product_title }}
            </a>
          </h4>
          <button
            class="link cart-item__close"
            type="button"
          >
            {{ buttonRemoveText }}
          </button>
          <div class="cart-item__info">
            <!-- eslint-disable -->
            <p
              v-for="option in value.options_with_values"
              :key="option.name"
              class="cart-item__variant cart-item-variant"
              v-html="option.name + ': ' + option.value"
            />
            <!-- eslint-enable -->
          </div>
        </div>
        <price
          v-if="!isMobile || !isMiniCart"
          class="cart-item__price price--cart-item"
          :original-price="comparePrice"
          :price="value.price"
        />
        <div class="cart-item__properties">
          <div class="cart-item__property">
            <sel-number-control
              class="sel-number-control--small"
              v-model="quantity"
              :max="max"
            >
            </sel-number-control>
          </div>
          <price
            class="cart-item__total price--cart-item"
            :original-price="comparePrice"
            :price="value.line_price"
          />
          <button
            v-if="!isMiniCart"
            class="link cart-item__close cart-item__close--desktop"
            type="button"
            @click="remove"
          >
            {{ buttonRemoveText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './cart-item.css'

import { computed, ref, watch } from 'vue'
import Price from 'modules/price/price.vue'

export default {
  name: 'CartItem',
  components: {
    Price
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    lineIndex: {
      type: Number,
      default: null
    },
    buttonRemoveText: {
      type: String,
      default: 'Remove'
    },
    isMiniCart: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    let quantity = ref(props.value.quantity)

    const max = computed(() => props.value.inventory_quantity ? props.value.inventory_quantity : Number.MAX_VALUE)

    const comparePrice = computed(() => props.value.compare_at_price ? props.value.compare_at_price : 0)

    watch(quantity, (newValue) => {
      quantity = newValue
      console.log(newValue)
    })

    return {
      max,
      quantity,
      comparePrice
    }
  }
}
</script>
