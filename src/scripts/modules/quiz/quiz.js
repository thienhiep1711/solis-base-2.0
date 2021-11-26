import Vue from 'vue'
import qs from 'query-string'
import { handleize } from 'lib/util'
import nano from 'nanoajax'
import Cookies from 'js-cookie'

import 'modules/quiz-question/quiz-question.vue'
import 'modules/product-card/product-card.vue'
import 'modules/picture/picture.vue'
import 'modules/color-selector/color-selector.vue'

export default el => new Vue({
  el,
  data () {
    const parsed = qs.parse(document.location.search)
    return {
      state: false,
      questions: [],
      currentQuestion: 0,
      progressIndex: 0,
      answers: parsed,
      query: false,
      tags: [],
      results: false,
      resultText: false,
      noResultText: false
    }
  },
  created () {
    this.questions = quizData.questions
    this.state = 'questions'
    this.resultText = quizData.resultText
    this.noResultText = quizData.noResultText
  },
  mounted () {
    if (Object.keys(this.answers).length > 0) {
      this.skipToResults()
    }
  },
  computed: {
    questionsState () {
      return this.state === 'questions'
    },
    loadingState () {
      return this.state === 'loading'
    },
    resultsState () {
      return this.state === 'results'
    },
    questionTitles () {
      return this.questions.reduce((titles, question) => {
        if (question.title.length > 0) {
          titles.push(question.title)
        }

        return titles
      }, [])
    },
    searchQuery () {
      return this.tags.map(arr => {
        return `(${arr.map(val => `tag:"${val}"`).join(' OR ')})`
      }).join(' AND ')
    },
    searchUrl () {
      return `${document.location.origin}/search?q=${this.searchQuery}&view=quiz-results-endpoint`
    },
    updatedResultText () {
      return this.resultText.includes('[name]') ? this.resultText.replace('[name]', this.answers.name) : this.resultText
    },
    answersStringified () {
      return JSON.stringify(this.answers)
    }
  },
  methods: {
    skipToQuestion (e) {
      if (parseInt(e.target.dataset.questionIndex) <= this.progressIndex) {
        this.currentQuestion = parseInt(e.target.dataset.questionIndex)
      }
    },
    handleAnswer (e) {
      this.answers[e.questionKey] = e.answer
      this.updateQuery()
      this.updateTags()

      if ((this.currentQuestion + 1) === this.questions.length) {
        this.state = 'loading'
        this.updateURL()
        this.handleResults(3000)
      } else {
        this.currentQuestion++
      }
    },
    updateQuery () {
      this.query = qs.stringify(this.answers)
    },
    updateTags () {
      this.tags = Object.keys(this.answers)
        .filter(key => key !== 'name' && key !== 'email')
        .map(key => {
          const values = this.answers[key].split(',')
          if (key === 'skin-type') {
            values.push('All')
          }

          return values.map(value => {
            return `${key}-${handleize(value)}`
          })
        })
    },
    handleResults (delay) {
      this.saveResults()

      nano.ajax({url: this.searchUrl}, (code, response) => {
        this.results = JSON.parse(response).results
      })

      setTimeout((delay) => {
        this.state = 'results'
      }, delay)
    },
    saveResults () {
      Cookies.set('quiz_answers', this.answersStringified)
    },
    skipToResults () {
      this.updateQuery()
      this.updateTags()
      this.state = 'loading'
      this.handleResults(1000)
    },
    updateURL () {
      let url = `${window.location}?${this.query}`
      window.history.pushState('', '', url)
    },
    retakeQuiz () {
      let url = window.location.href.split('?')[0]
      window.history.pushState('', '', url)

      let keys = Object.keys(this.answers)
      for (let key of keys) {
        if (key !== 'name') {
          this.answers[key] = ''
        }
      }

      this.tags = []
      this.query = false

      this.currentQuestion = 1

      this.state = 'questions'
      console.log(this.state)
    }
  }
})
