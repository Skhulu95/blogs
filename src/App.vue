<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="green-5">
      <q-toolbar>


        <q-toolbar-title>
          Insta Blogs
        </q-toolbar-title>

       
        <q-btn label="Sign Up" color="primary" @click="signup = true" />
        <q-btn label="Login" color="primary" @click="login = true" />
        
      </q-toolbar>
    </q-header>


    <div>
      <q-dialog
          v-model="signup"
          full-height
        >
          <q-card style="width: 700px; max-width: 80vw;">
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
            hint="Name and surname"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            type="number"
            v-model="signUpFields.age"
            label="Your age *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real age'
            ]"
          />

          <q-input
            filled
            v-model="signUpFields.email"
            label="Your email *"
            hint="johnd@gmail.com"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="signUpFields.password"
            label="Your password *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-toggle v-model="signUpFields.accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>

        </div>
        </q-card>
      </q-dialog>

      <q-dialog
      v-model="login"
      full-height
    >
      <q-card style="width: 700px; max-width: 80vw;">
      <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="loginFields.email"
        label="Your email *"
        hint="jdoe@gmail.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="loginFields.password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <!-- <q-toggle v-model="loginFields.accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
      </q-card>
    </q-dialog>
      <router-view></router-view>
    </div>
    
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login'
import SignUp from './components/SignUp'

export default {
  name: 'LayoutDefault',

  components: {
    "Login":Login,
    "Signup":SignUp
  },
  data(){
     return { 
       name: null,
       age: null,
       email: null,
       password: null,
      //  modal: 
      signUpFields: {
        accept: false
      },
      loginFields: {
        accept: false
      },
       
    //   loggedIn: false
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
   methods: {
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
