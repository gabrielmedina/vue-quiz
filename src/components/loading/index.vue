<template>
  <transition name="loading">
    <div v-show="loading" class="loading">
      <span v-if="error" class="loading__text">Ops! This is strange, sorry!</span>
      <span v-else class="loading__spinner"></span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'TheLoading',

    props: [
      'loading',
      'error'
    ]
  }
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #2ECC71;
  }

  .loading__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loading__text {
    color: #fff;
    font-size: 1.8em;
  }

  .loading__spinner {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 4px;
    border-radius: 20px;
    background: rgba(#fff, .2);

    &:after {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 40px;
      height: 4px;
      border-radius: 20px;
      background: rgba(#fff, .5);

      animation: move 1s ease-in-out alternate infinite;
    }
  }

  .loading-enter,
  .loading-leave-active {
    opacity: 0;
    transform: scale(1.2);
  }

  .loading-enter-active,
  .loading-leave-active {
    transition: .5s ease;
  }

  @keyframes move {
    0% { left: 0; }
    50% { background: #fff; }
    100% { left: calc(100% - 40px); }
  }
</style>
