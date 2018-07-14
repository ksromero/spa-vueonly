<template>
  <b-navbar type="dark" variant="primary" toggleable class="mb-3">
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-collapse is-nav id="nav_dropdown_collapse">
        <navLinks/>
    </b-collapse>
  </b-navbar>
</template>

<script>
import navLinks from './navLinks.vue';
export default {
  components: {
    navLinks
  },
};
</script>