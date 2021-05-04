<template>
<div class="details">
<div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button id="delete">Delete Post</button>
    
  </div>
  <div v-else>
    <Spinner />
  </div>
</div>

  
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute } from 'vue-router'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(route.params.id)

    load()

    return { error, post }
  },
}
</script>

<style scoped>
h1,h2,h3,h4,h5,h6 {
  background-color: black;
}
  
  #delete {
  background-color: red;}
</style>