import Vue from 'vue'
import Router from 'vue-router'

import quiz from '../feature/quiz/routes'

const routes = [
  ...quiz
]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

export default router
