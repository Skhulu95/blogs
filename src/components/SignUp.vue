<template>
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
        hint="johnd@gmail.com"
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
      </q-card>
    </q-dialog>
</template>

<script>
export default {
    data (){
    return {
      name: null,
      age: null,
      email: null,
      password: null,
      signup: true,
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
    }
  }
}
</script>

<style>

</style>