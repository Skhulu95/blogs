<!-- /src/layouts/User.vue -->
<template>
  <q-layout>
    ...
<h1>USER</h1>
    <!-- this is where the Pages are injected -->
    <Posts />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    ...
  </q-layout>
</template>