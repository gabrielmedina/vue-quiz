<template>
  <div class="result">
    <header class="result__header">
      <h1 class="result__title">{{ result.title }}</h1>
      <p class="result__text">{{ result.text }}</p>

      <div class="result__options">
        <button class="btn btn--secondary" @click="$emit('remake')">{{ remake }}</button>
      </div>
    </header>

    <ol class="questions">
      <li v-for="(question, i) in answers" :key="i" class="questions__item">
        <the-question
          :number="i"
          :question="question"
          :onlyview="true">
        </the-question>
      </li>
    </ol>
  </div>
</template>

<script>
  import TheQuestion from '../../components/question/'

  export default {
    name: 'TheResult',

    components: {
      TheQuestion
    },

    props: [
      'total',
      'points',
      'answers',
      'results',
      'remake'
    ],

    computed: {
      result () {
        return this.results[this.points == 0 ? this.points : this.points - 1]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .result {
    text-align: center;
    padding: 100px 0;
  }

  .result__header {
    margin-bottom: 20px;
  }

  .result__title {
    margin: 0;

    color: #222;
    font-size: 3em;
    line-height: 1.3;
    text-align: center;
  }

  .result__text {
    margin: 0 0 30px;

    color: #145A32;
    font-size: 1.2em;
    line-height: 1.3;
  }

  .result__options {
    margin: 0 auto;
    max-width: 350px;
    display: flex;
    flex-direction: column;

    .btn + .btn {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .result__title {
      font-size: 5em;
    }

    .result__text {
      font-size: 1.4em;
    }
  }
</style>
