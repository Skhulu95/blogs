<template>
  <q-card class="my-card">
  <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <q-img
        src="https://colmanandcompany.com/blog/wp-content/uploads/2014/04/blog-word-cloud1.jpg"
        basic
      >
        <div class="absolute-bottom text-h6">
          {{ post.title }}
        </div>
      </q-img>
  </router-link>

      <q-card-section>
        <p>{{ snippet }}</p>
        <h6><span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span></h6>
      </q-card-section>
    </q-card>
    <br />
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })

    return { snippet }
  }
}
</script>

<style>
.my-card {
   width: 100%;
  max-width: 250px;
}
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .blogs{
  background: #d8e2e2b0;
  height: fit-content;
  padding:1em;
  margin:10px auto;
  /* take out */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.blogs .content-card{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 33%;
  box-shadow: darkslategray;
  border:2px solid darkslategray;
}
.blogs .content img{
  justify-content: center;
  text-align: center;
  justify-items: center;
}
</style>
