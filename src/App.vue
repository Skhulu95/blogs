<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="green-5">
      <q-toolbar>
        <q-toolbar-title>
          Insta Blogs
        </q-toolbar-title>
        <q-btn color="primary"><router-link to="/">Home</router-link></q-btn>
        <!-- <q-btn color="primary"><router-link :to="{ name: 'About' }">About</router-link></q-btn> -->
        <q-btn color="primary"><router-link :to="{ name: 'Blog' }">Blogs</router-link></q-btn>
        <q-btn label="Sign Up" color="primary" @click="signup = true" />
        <q-btn label="Login" color="primary" @click="login = true" /> 
      </q-toolbar>
      <!-- <button @click="redirect">Redirect</button>
      <button @click="back">Go back</button>
      <button @click="forward">Go forward</button> -->
    </q-header>
    <router-view/>

    <!-- sign up form -->
<div class="q-pa-md q-gutter-sm">
   <q-dialog
      v-model="signup"
      full-height
    >
      <q-card class="column full-height" style="width: 300px">
       <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="John Doe"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="jdoe@gmail.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</div>

<!-- login in form -->
<q-dialog
      v-model="login"
    >
      <q-card style="width: 300px">
         <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script>
// import { ref } from 'vue'
// import Login from './components/Login'
// import SignUp from './components/SignUp'

export default {
  data () {
    return {
      signup: false,
      login: false,

      name: null,
      age: null,
      email: null,
      password: null,

      accept: false
    }
  },
   computed: {
    signup: {
      get(){
        return this.$store.state.signup
      },
      set(value){
        this.$store.commit("signUpModal", value)
      }
    },
     login: {
      get(){
        return this.$store.state.login
      },
      set(value){
        this.$store.commit("loginModal", value)
      }
    } 
  },
   methods:  {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
  onReset () {
      this.name = null
      this.age = null
      this.email = null
      this.password = null
      this.accept = false
    },
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
  text-decoration: none;
}
</style>