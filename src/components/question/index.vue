<template>
  <div class="question">
    <h1 class="question__title">
      {{ question.title }}
    </h1>

    <figure class="question__figure">
      <img :src="question.image" class="question__img">
    </figure>

    <ol class="alternatives">
      <li v-for="(alternative, i) in question.alternatives" :key="i" class="alternatives__item">
        <button v-if="onlyview"
          class="alternatives__btn"
          disabled="disabled"
          :class="{
            'alternatives__btn--right': i == question.answer,
            'alternatives__btn--choice': i == question.choice
          }"
          @click="answer(i)">
          {{ alternative }}
        </button>

        <button v-else @click="answer(i)" class="alternatives__btn">
          {{ alternative }}
        </button>
      </li>
    </ol>

    <div v-if="onlyview && question.explanation" class="question__explanation">
      {{ question.explanation }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheQuestion',

    props: [
      'number',
      'question',
      'answers',
      'onlyview'
    ],

    methods: {
      answer (choice) {
        if (choice == this.question.answer) {
          this.$emit('right')
        }

        window.scroll({
          top: 0,
          behavior: 'smooth'
        })

        this.answers.push({
          ...this.question,
          choice: choice
        })

        this.$emit('next')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .question {
    padding: 60px 0;
  }

  .question__title {
    margin: 0 0 25px;

    color: #222;
    font-size: 1.1em;
    line-height: 1.3;
    text-align: center;
  }

  .question__figure {

  }

  .question__img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% + 50px);
  }

  .question__explanation {
    margin-top: 40px;

    color: #222;
    font-size: 1.1em;

    padding: 20px;
    background: rgba(255,255,255,.1);
    border-radius: 6px;
    border: dashed 2px rgba(255,255,255,.2);
  }

  .alternatives {
    margin-top: 30px;
  }

  .alternatives__item {
    + .alternatives__item {
      margin-top: 10px;
    }
  }

  .alternatives__btn {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 10px 14px;
    border: 0;
    border-radius: 4px;
    background: rgba(#186A3B, .15);

    color: darken(#186A3B, 5%);
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    text-align: left;

    transition: .3s ease;

    outline: none;

    &:not([disabled]) {
      cursor: pointer;

      &:hover,
      &:focus {
        color: #27AE60;
        background: #fff;

        &:before {
          border-color: #27AE60;
          background: #27AE60;
        }
      }
    }

    &:before {
      content: '';

      position: relative;
      top: 6px;
      margin-right: 8px;

      display: block;
      width: 7px;
      height: 7px;
      border-radius: 100%;
      border: solid 2px darken(#186A3B, 5%);

      transition: .3s ease;
    }
  }

  .alternatives__btn--right {
    color: #27AE60;
    background: #fff;
    transform: scale(1.05);

    &:before {
      border-color: #27AE60;
      background: #27AE60;
    }
  }

  .alternatives__btn--choice {
    &:not(.alternatives__btn--right) {
      color: #fff;
      background: #CD6155;

      &:before {
        border-color: #fff;
        background: #fff;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .question__title {
      font-size: 1.4em;
      line-height: 1.25;
    }

    .question__figure {
      transition: .5s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .question__img {
      width: 120%;
      border-radius: 4px;
    }

    .alternatives__btn {
      font-size: 1.1em;
      padding: 12px 16px;

      &:not([disabled]) {
        &:hover,
        &:focus {
          transform: scale(1.05);
        }
      }

      &:before {
        top: 7px;
      }
    }
  }
</style>
