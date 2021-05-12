import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Blog from '../views/Blog'
import NotFound from '../views/NotFound.vue'
import singleBlog from '../views/singleBlog'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'singleBlog',
    component: singleBlog
  },
  // catchall 404
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: NotFound
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
