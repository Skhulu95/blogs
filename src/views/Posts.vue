<!-- /src/pages/Posts.vue -->
<template>
  <q-layout>
  
    <div class="post">
    <h1> POSTS </h1>
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
  </q-layout>
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
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>