import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Create from '../views/Create.vue'
import Details from '../views/Details.vue'
import NotFound from '../views/NotFound.vue'
import Posts from '../views/Posts'
import User from '../components/User.vue'

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
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
