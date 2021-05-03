<template>
<div class="dropdown">
    <q-btn-dropdown color="secondary" label="Categories">
      <q-list>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Sports</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Garden Life</q-item-label>
          </q-item-section>
        </q-item>

         <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Technology</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
<div class="blog-container">
   <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
        <!-- <q-btn flat round color="red" icon="favourite" /> -->
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>
</div>

<div class="blog-container">
   <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        hello there
        {{ lorem }}
      </q-card-section>
      <div class="readmorebtn">
      <q-btn color="secondary" label="Read" />
      </div>
    </q-card>
  </div>
</div>
</template>

<script>

export default {
 methods: {
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}
</script>


<style>
.dropdown{
  padding-top: 60px;
  padding-bottom: 1em;
}
.category{
  display: flex;
  flex-flow: column;
}
.blog-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5em;
  background: #69696917 ;
}
.readmorebtn{
  padding-bottom: 8px;
  text-align: end;
}
.my-card{
  width:330px;
  height: auto;
}
</style>
