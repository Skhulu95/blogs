<template>

<div class="para-contain">
  <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">

        <q-parallax style="width: 100vw"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <h1 class="text-white">Welcome</h1>
          <h4 class="text-white">insta bloggers</h4>
        </q-parallax>

      </div>
  </div>
</div>

  <section class="all-blogs">
    <h2 class="all-blogs-title">
      Latest blogs
    </h2>
    <div class="blogs">
      <div class="content-card">
        <img src="https://t4.ftcdn.net/jpg/02/28/17/93/360_F_228179370_8hfaZdNhOTCbqgkZgYQgiYveQXLCDTnC.jpg" alt="logo" style="width: 345px ;height:300px">
        <h6>Coffee rush</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid voluptate distinctio, eligendi voluptas repellat hic dignissimos! Modi maxime autem sequi vel non amet exercitationem ratione, odio commodi, asperiores velit sunt eveniet! At in culpa nobis voluptate alias quaerat fuga.</p>
      </div>

      <div class="content-card">
        <img src="https://t4.ftcdn.net/jpg/02/28/17/93/360_F_228179370_8hfaZdNhOTCbqgkZgYQgiYveQXLCDTnC.jpg" alt="logo" style="width: 345px ;height:300px">
        <h6>Coffee rush</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid voluptate distinctio, eligendi voluptas repellat hic dignissimos! Modi maxime autem sequi vel non amet exercitationem ratione, odio commodi, asperiores velit sunt eveniet! At in culpa nobis voluptate alias quaerat fuga.</p>
      </div>

      <div class="content-card">
        <img src="https://t4.ftcdn.net/jpg/02/28/17/93/360_F_228179370_8hfaZdNhOTCbqgkZgYQgiYveQXLCDTnC.jpg" alt="logo" style="width: 345px ;height:300px">
        <h6>Coffee rush</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid voluptate distinctio, eligendi voluptas repellat hic dignissimos! Modi maxime autem sequi vel non amet exercitationem ratione, odio commodi, asperiores velit sunt eveniet! At in culpa nobis voluptate alias quaerat fuga.</p>
      </div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
body{
  background: #79797925;
}
.para-contain{
  padding-top: 64px;
 }
.all-blogs{
  display: block;
  background:lightblue;
  width: 97.6%;
  padding: 5px auto;
  margin-left: 15px;
}
.all-blogs-title{
  display: flex;
  justify-content: center;
  margin: 12px;
  padding: 5px;
  font-size: 3em;
}
.blogs{
  background: #d8e2e2b0;
  height: fit-content;
  padding:1em;
  margin:10px auto;
  /* take out */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.blogs .content-card{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 33.33%;
  box-shadow: darkslategray;
  border:2px solid darkslategray;
}
.blogs .content img{
  justify-content: center;
  text-align: center;
  justify-items: center;
}

</style>