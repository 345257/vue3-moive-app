import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './HomePage'
import MoviePage from './MoviePage'
import AboutPage from './AboutPage'

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(), 
  // pages
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
    }
  ]
})