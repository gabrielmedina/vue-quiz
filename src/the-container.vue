<template>
  <div class="app">
    <the-loading :loading="loading" :error="error"></the-loading>

    <div class="container">
      <transition name="fade">
        <div v-show="!start" class="page">
          <the-intro
            :logo="quiz.logo"
            :title="quiz.title"
            :description="quiz.description"
            :start="quiz.start"
            @start="start = true">
          </the-intro>
        </div>
      </transition>

      <transition name="fade">
        <ol v-show="start" class="questions">
          <li v-for="(question, i) in quiz.questions" :key="i" class="questions__item">
            <transition name="fade">
              <div class="page" v-show="isCurrent(i)">
                <the-question
                  :number="i"
                  :question="question"
                  @right="rightResp()"
                  @wrong="wrongResp()"
                  @next="nextQuestion(i)">
                </the-question>
              </div>
            </transition>
          </li>
        </ol>
      </transition>

      <transition name="fade">
        <div v-if="finish" class="page">
          <the-result
            :total="total"
            :points="points"
            :results="quiz.results"
            :feedback="quiz.feedback"
            :remake="quiz.remake"
            @remake="remake()">
          </the-result>
        </div>
      </transition>

      <transition name="fade">
        <the-progress
          v-if="start && !finish"
          :current="current"
          :total="total">
        </the-progress>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import TheIntro from './the-intro.vue'
import TheLoading from './components/loading/'
import TheQuestion from './components/question/'
import TheProgress from './components/progress/'
import TheResult from './components/result/'

export default {
  name: 'app',

  components: {
    TheIntro,
    TheLoading,
    TheQuestion,
    TheProgress,
    TheResult
  },

  data() {
    return {
      start: false,
      finish: false,
      current: 0,
      total: 0,
      points: 0,
      quiz: {},
      loading: true,
      error: false,
    }
  },

  methods: {
    remake () {
      this.finish = false
      this.start = true,
      this.current = 0,
      this.points = 0
    },

    nextQuestion (i) {
      if (!this.finish) {
        this.current = i + 1
        this.isFinish()
      }
    },

    rightResp () {
      this.points += 1;
    },

    wrongResp () {

    },

    isCurrent (i) {
      return i == this.current
    },

    isFinish () {
      if (this.current == this.total) {
        this.finish = true
      }
    }
  },

  created() {
    axios.get('https://api.myjson.com/bins/uml04')
      .then(res => {
        this.quiz = res.data
        this.total = this.quiz.questions.length
        this.loading = false
      })
      .catch(err => {
        this.error = err
      })
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;

    font-family: 'Avenir', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    padding: 0;
    background: #2ECC71;
    background-size: 100px;
  }

  ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .container {
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
  }

  .btn {
    box-sizing: border-box;
    border: 0;
    border-radius: 100px;
    background: #1E8449;

    color: #fff;
    font-family: inherit;
    font-size: 1em;
    font-weight: 600;
    padding: 15px 50px;
    text-transform: uppercase;

    cursor: pointer;
    outline: none;

    transition: .3s ease;

    &:hover {
      transform: scale(1.2);
    }

    &.btn--secondary {
      background: none;
      color: #1E8449;
      border: solid 2px #1E8449;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: .5s ease;
  }

  .fade-enter,
  .fade-leave {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-to {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    .btn {
      font-size: 1.1em;
      padding: 18px 60px;
    }
  }
</style>
