<template>
  <div class="container">
    <the-loading :loading="loading" :error="error"></the-loading>

    <transition name="fade">
      <div v-show="!start" class="page page--center">
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
            <div class="page page--question" v-show="isCurrent(i)">
              <the-question
                :number="i"
                :question="question"
                :answers="answers"
                @right="rightResp()"
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
          :answers="answers"
          :results="quiz.results"
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
</template>

<script>
  import axios from 'axios'

  import TheLoading from '../../components/loading/'
  import TheIntro from '../../components/intro/'
  import TheQuestion from '../../components/question/'
  import TheProgress from '../../components/progress/'
  import TheResult from '../../components/result/'

  export default {
    name: 'TheQuizShow',

    components: {
      TheLoading,
      TheIntro,
      TheQuestion,
      TheProgress,
      TheResult
    },

    data() {
      return {
        loading: true,
        error: false,
        quiz: {},
        start: false,
        finish: false,
        current: 0,
        total: 0,
        points: 0,
        answers: []
      }
    },

    created() {
      // axios.get('https://api.myjson.com/' + this.$route.params.slug or .id)
      axios.get('https://api.myjson.com/bins/1ah5wc')
      .then(res => {
        this.quiz = res.data
        this.total = this.quiz.questions.length
        this.loading = false
      })
      .catch(error => {
        this.error = error
      })
    },

    methods: {
      remake () {
        this.finish = false
        this.start = true
        this.current = 0
        this.points = 0
        this.answers = []
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

      isCurrent (i) {
        return i == this.current
      },

      isFinish () {
        if (this.current == this.total) {
          this.finish = true
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
