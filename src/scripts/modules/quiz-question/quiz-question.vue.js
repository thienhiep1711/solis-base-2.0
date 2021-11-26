import Vue from 'vue'
// import qs from 'query-string'
import { handleize, style, unstyle } from 'lib/util'
// import nano from 'nanoajax'
// import jsonp from 'jsonp'

import 'modules/checkbox/checkbox.vue'
import 'modules/text-input/text-input.vue'

Vue.component('quiz-question', {
  template: `
  <div class="quiz-question f fdc jcc">
    <div class="quiz-question__outer">
      <div class="quiz-question__inner relative f fdc">
        <form class="quiz-question__form" @submit.prevent="submitAnswer">
          <transition name="fade">
            <h1 class="h3 quiz-question__text mb1" v-if="ready">{{ updatedQuestion }}</h1>
          </transition>

          <transition
            name="fade"
            v-if="question.type === 'input'"
            :css="false"
            @before-enter="staggeredFadeBeforeEnter"
            @enter="staggeredFadeEnter"
          >
            <text-input :id="question.key" class="mt1 mb1 text-input--center" :type="question.key === 'email' ? 'email' : 'text'" :label="question.placeholder" data-index="1" v-show="ready" v-model="answer"></text-input>
          </transition>

          <transition-group
            class="quiz-question__options f fw jcc"
            name="staggered-fade"
            tag="div"
            v-if="question.type === 'multiple-select'"
            :css="false"
            @before-enter="staggeredFadeBeforeEnter"
            @enter="staggeredFadeEnter"
          >
            <label v-for="(option, index) in question.options" class="quiz-question__option relative f" :for="option.title" :key="option.title" :data-index="index + 1" v-show="ready">
              <img :src="option.image_url" class="quiz-question__option__image" :alt="option.title">
              <input type="checkbox" :id="option.title" class="quiz-question__option__checkbox absolute fit" :value="option.value" v-model="answer">
              <span class="quiz-question__option__text">{{ option.title }}</span>
            </label>
          </transition-group>

          <transition-group
            class="quiz-question__options f fw jcc"
            name="staggered-fade"
            tag="div"
            v-if="question.type === 'single-select'"
            :css="false"
            @before-enter="staggeredFadeBeforeEnter"
            @enter="staggeredFadeEnter"
          >
            <label v-for="(option, index) in question.options" class="quiz-question__option relative f jcc aic" :for="option.title" :key="option.title" :data-index="index + 1" v-show="ready">
              <img :src="option.image_url" class="quiz-question__option__image" :alt="option.title">
              <input type="radio" :id="option.title" class="quiz-question__option__radio absolute fit" name="currentQuestion" :value="option.value" v-model="answer">
              <span class="quiz-question__option__text absolute fit-l fit-r fit-b px1">{{ option.title }}</span>
            </label>
          </transition-group>

          <transition
            name="fade"
            :css="false"
            @before-enter="staggeredFadeBeforeEnter"
            @enter="staggeredFadeEnter"
          >
            <div class="quiz-question__submit-wrapper" :data-index="optionsLength + 1" v-if="ready">
              <button type="submit" class="quiz-question__submit btn btn--primary" :disabled="blank">{{ buttonText }}</button>
            </div>
          </transition>
        </form>

        <transition
          name="fade"
          :css="false"
          @before-enter="staggeredFadeBeforeEnter"
          @enter="staggeredFadeEnter"
        >
          <div class="quiz-question__tip outer"  :data-index="optionsLength + 2" v-if="question.tip && ready">
            {{ question.tip }}
          </div>
        </transition>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      answer: this.savedAnswer || [],
      ready: false,
      optionsLength: 1,
      newsletterChecked: false
    }
  },
  props: [
    'name',
    'question',
    'savedAnswer',
    'buttonText',
    'newsletterUrl'
  ],
  mounted () {
    this.ready = true
    if (this.question.options) {
      this.optionsLength = this.question.options.length
    }
  },
  computed: {
    blank () {
      return this.answer.length === 0
    },
    answerString () {
      if (typeof this.answer === 'object') {
        return this.answer.join(',')
      } else {
        return this.answer
      }
    },
    updatedQuestion () {
      return this.name ? this.question.text.replace('[name]', this.name) : this.question.text
    }
  },
  methods: {
    submitAnswer () {
      this.$emit('answer', {
        questionKey: this.question.key,
        answer: (
          this.question.key !== 'email'
            ? this.answerString
            : this.newsletterChecked
              ? this.answerString
              : null
        )
      })

      this.answer = null
    },
    staggeredFadeBeforeEnter (el) {
      el.style.opacity = 0
    },
    staggeredFadeEnter (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        style(el, 'opacity', 1)

        done()
      }, delay)
    },
    toggleNewsletter (e) {
      this.newsletterChecked = e.value
    }
  }
})
