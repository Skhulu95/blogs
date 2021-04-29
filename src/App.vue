<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="green-5">
      <q-toolbar>
        <q-toolbar-title>
          Insta Blogs
        </q-toolbar-title>
        <q-btn color="primary"><router-link to="/">Home</router-link></q-btn>
        <q-btn color="primary"><router-link :to="{ name: 'About' }">About</router-link></q-btn>
        <q-btn color="primary"><router-link :to="{ name: 'Blog' }">Blog</router-link></q-btn>
        <q-btn color="primary"><router-link :to="{ name: 'SignUp' }">SignUp</router-link></q-btn>
        <q-btn color="primary"><router-link :to="{ name: 'Login' }">Login</router-link></q-btn>  
      </q-toolbar>
      <button @click="redirect">Redirect</button>
      <button @click="back">Go back</button>
      <button @click="forward">Go forward</button>
    </q-header>
    <router-view/>
  </q-layout>
</template>

<script>
// import { ref } from 'vue'
// import Login from './components/Login'
// import SignUp from './components/SignUp'

export default {
   methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>

.q-btn a.router-link-exact-active {
  color: white;
}
.q-btn {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>