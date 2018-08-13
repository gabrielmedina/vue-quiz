<template>
  <header class="intro">
    <img :src="logo" class="intro__logo">
    <h1 class="intro__title">{{ title }}</h1>
    <p class="intro__text">{{ description }}</p>
    <button class="btn" @click="$emit('start')">{{ start }}</button>
  </header>
</template>

<script>
  export default {
    name: 'TheIntro',

    props: [
      'logo',
      'title',
      'description',
      'start'
    ]
  }
</script>

<style lang="scss">
  .intro {
    text-align: center;
  }

  .intro__logo {
    margin-bottom: 30px;
    width: 70px;
    height: 70px;
  }

  .intro__title {
    margin: 0 0 20px;

    color: #111;
    font-size: 1.8em;
    line-height: 1.1;
  }

  .intro__text {
    margin: 0 0 30px;

    color: #145A32;
    font-size: 1em;
  }

  @media screen and (min-width: 768px) {
    .intro {

    }

    .intro__logo {
      margin-bottom: 30px;
      width: 100px;
      height: 100px;
    }

    .intro__title {
      font-size: 2.6em;
    }

    .intro__text {
      margin-bottom: 40px;
      font-size: 1.2em;
    }
  }
</style>
