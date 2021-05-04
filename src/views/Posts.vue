<!-- /src/views/Posts.vue -->
<template>
    <div class="post">
    <h1 class="all-blogs-title"> POSTS</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <!-- <TagCloud :posts="posts" /> -->
    </div>
    <div v-else>
      Loading...
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

import getPosts from '../composables/getPosts'

import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Posts',
  components: { PostList, Spinner },
  setup() { 
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>

<style scoped>
  
</style>