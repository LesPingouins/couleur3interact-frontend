<template>
  <div>
    <AppHeader />
    <Navbar class="navbar" />
    <router-view />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { AppHeader, Navbar },
};
</script>
<style scoped>
.navbar {
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  z-index: 2;
}
</style>
