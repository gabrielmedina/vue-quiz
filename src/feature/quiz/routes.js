
const index = () => import('./')
const show = () => import('./show')

export default [
  {
    path: '/',
    name: 'quiz.index',
    component: index
  },
  {
    path: '/:slug',
    name: 'quiz.show',
    component: show
  }
]
