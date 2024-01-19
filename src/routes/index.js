import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './HomePage'
import MoviePage from './MoviePage'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'

export default createRouter({
  history: createWebHashHistory(), 
  scrollBehavior() {
    return { top: 0 }
  }, 
  routes: [
    {
      path: '/', 
      component: HomePage
    }, 
    {
      path: '/movie/:id', 
      component: MoviePage
    }, 
    {
      path: '/about', 
      component: AboutPage
    }, 
    {
      path: '/:notFound(.*)', 
      component: NotFoundPage
    }
  ]
})