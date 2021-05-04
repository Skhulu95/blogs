<template>
<q-layout>
<div class="post-list">
    <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
    </div>
  </div>
  
</q-layout>
  
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

// component imports

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('Mounted'))
    onUnmounted(() => console.log('Unmounted'))
    onUpdated(() => console.log('Updated'))
  }
}
</script>

<style>
</style>