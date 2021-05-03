<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />
    <router-view />
  </q-layout>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar }  

}
</script>

<style>
.q-btn a.router-link-exact-active {
  color: white;
}
</style>