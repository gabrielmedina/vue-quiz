import Vue from 'vue'
import router from './router'
import TheContainer from './the-container.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(TheContainer)
}).$mount('#app')
