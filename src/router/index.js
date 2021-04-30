import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Blog from '../views/Blog'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile'
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
    path: '/user',

    // we use /src/layouts/User component which is imported above
    component: User,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
      // Profile page
      {
        path: '/profile', // here it is, route /user/profile
        component: Profile // we reference /src/pages/Profile.vue imported above
      },

      // Posts page
      {
        path: 'posts', // here it is, route /user/posts
        component: Posts // we reference /src/pages/Posts.vue imported above
      }
    ]
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
