<template>
<div id="app">
  <navComponent/>
    <div class="container">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
  import navComponent from './views/header/nav.vue';
  export default {
  components: {
   navComponent,
  },
};
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>
