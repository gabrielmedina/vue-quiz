<template>
  <div class="quiz">
    <the-loading :loading="loading" :error="error"></the-loading>

    <div class="container">
      <h1 class="quiz__logo">Quiz</h1>

      <ul class="quiz__list">
        <li v-for="(quiz, i) in quiz" :key="i" class="quiz__item">
          <router-link :to="{ name: 'quiz.show', params: { slug: quiz.slug } }" class="quiz__link">
            <h1 class="quiz__title">{{ quiz.title }}</h1>
            <p class="quiz__text">{{ quiz.description }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import TheLoading from '../../components/loading/'

  export default {
    name: 'TheQuiz',

    components: {
      TheLoading,
    },

    data() {
      return {
        loading: true,
        error: false,
        quiz: [],
      }
    },

    created() {
      axios.get('https://api.myjson.com/bins/lgyho')
      .then(res => {
        this.quiz = res.data
        this.loading = false
      })
      .catch(error => {
        this.error = error
      })
    }
  }
</script>

<style lang="scss" scoped>
  .quiz {

  }

  .quiz__logo {
    margin: 0;

    padding: 40px 0;

    color: #222;
    text-align: center;
  }

  .quiz__list {

  }

  .quiz__item {
    margin-bottom: 20px;
  }

  .quiz__link {
    display: block;
    padding: 30px;
    background: rgba(#186A3B, .15);
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
  }

  .quiz__title {
    margin: 0 0 15px;

    color: #222;
    font-size: 1.3em;
    line-height: 1.3;
  }

  .quiz__text {
    margin: 0;

    color: #145A32;
    font-size: 1em;
    line-height: 1.4;
  }

  @media screen and (min-width: 768px) {
    .quiz__link {
      padding: 60px;
      transition: .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .quiz__title {
      font-size: 1.8em;
      line-height: 1.2;
    }

    .quiz__text {
      font-size: 1.1em;
    }
  }
</style>
