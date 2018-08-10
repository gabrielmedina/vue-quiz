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
        <button @click="answer(i)" class="alternatives__btn">
          {{ alternative }}
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'TheQuestion',

    props: [
      'number',
      'question'
    ],

    methods: {
      answer (resp) {
        if (resp == this.question.answer) {
          this.$emit('right')
        } else {
          this.$emit('wrong')
        }

        window.scroll({
          top: 0,
          behavior: 'smooth'
        })

        this.$emit('next')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .question {
    padding: 100px 20px;
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
    width: calc(100% + 40px);
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
    background: #fff;

    color: #27AE60;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    text-align: left;

    transition: .3s ease;

    cursor: pointer;
    outline: none;

    &:hover {
      color: #27AE60;
      background: #fff;

      &:before {
        border-color: #27AE60;
        background: #27AE60;
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
      border: solid 2px #27AE60;

      transition: .3s ease;
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
      color: rgba(#111, .8);
      font-size: 1.1em;
      padding: 12px 16px;
      background: rgba(#111, .07);

      &:hover {
        transform: scale(1.05);
      }

      &:before {
        top: 7px;
        border: solid 2px rgba(#111, .7);
      }
    }
  }
</style>
