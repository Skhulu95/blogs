<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <!-- <div class="col-4"> -->
        Ratio: 16/9
        <q-img class="blog-img"
          src="https://placeimg.com/500/300/nature"
          :ratio="16/9"
        />
      <!-- </div> -->
    </div>
  </div>

  <div class="singleBlog-container">
      <div class="blog-title">
          <h3>Title</h3>
      </div>
      <div class="tags">
          <p>#test</p>
      </div>
      <div class="blog-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores dolorum eligendi ipsa animi ad rem mollitia veritatis atque harum.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.blog-img{
    width: 100vw;
    height: 20vw;
};
.singleBlog-container{
    display: block;
};
.blog-title{
    font-size: 30px;
}

</style>