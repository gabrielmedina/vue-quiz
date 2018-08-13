<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TheContainer'
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
    box-sizing: border-box;
    max-width: 700px;
    width: 100%;
    padding: 0 25px;
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
