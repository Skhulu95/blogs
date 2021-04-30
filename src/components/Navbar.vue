<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://www.clipartmax.com/png/middle/174-1749158_insta-instagram-instagramlogo-logo-rainbow-blue-purple-%D0%BA%D0%B0%D0%B2%D0%B0%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.png">
          </q-avatar>
          INSTA BLOG
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab :to="{ name: 'About' }" label="About" />
        <q-route-tab :to="{ name: 'Blog' }" label="Blog" />
        
        <br />
      </q-tabs>
      <q-tabs align="right">
        <q-route-tab :to="{ name: 'SignUp' }" label="Sign Up" />
        <q-route-tab :to="{ name: 'Login' }" label="Sign In" />
        
        <br />
      </q-tabs>
      
      <button @click="redirect">Redirect</button>
      <button @click="back">Go back</button>
      <button @click="forward">Go forward</button>
    </q-header>
    
   <!-- <q-page-container>
      <router-view />
       place QPageScroller at end of page 
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
    </q-page-container> -->

  </q-layout>
</template>

<script>
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

</style>