<template>
<div class="q-layout q-layout--standard" style="min-height: 141px">
<Navbar />
    <router-view />
    </div>
    
  
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