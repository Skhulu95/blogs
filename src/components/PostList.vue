<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
    </div>
  </div>
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
.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: black;
    max-width: 400px;
}
.post h3::before {
    background: rgb(69, 69, 255);
}
</style>