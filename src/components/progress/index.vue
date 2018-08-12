<template>
  <div class="progress">
    <div class="progress__bar" :style="{ width: percentage() + '%' }"></div>
    <div class="progress__text">{{ this.currentQuestion }} de {{ total }}</div>
  </div>
</template>

<script>
  export default {
    name: 'TheProgress',

    props: [
      'current',
      'total'
    ],

    methods: {
      percentage () {
        return this.currentQuestion < this.total ? ((100 / this.total) * this.currentQuestion) : 100
      }
    },

    computed: {
      currentQuestion () {
        return this.current + 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .progress {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);

    box-sizing: border-box;
    max-width: 280px;
    width: 100%;
    border-radius: 100px;
    padding: 4px;
    background: rgba(#186A3B, .1);
  }

  .progress__bar {
    height: 15px;
    border-radius: 100px;
    background: rgba(#186A3B, .2);

    transition: .5s ease;
  }

  .progress__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: rgba(#111, .6);
    font-size: .8em;
    font-weight: 500;

    cursor: default;
  }

  @media screen and (min-width: 768px) {
    .progress {
      max-width: 400px;
    }
  }
</style>
