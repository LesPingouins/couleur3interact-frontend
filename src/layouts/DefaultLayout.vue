<template>
  <div class="container">
    <AppHeader class="appHeader" />
    <Navbar class="navbar" />
    <router-view class="routerView" />
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
  flex-grow: 0;
  z-index: 2;
}
.appHeader {
  flex-grow: 0;
}
.routerView {
  flex-grow: 1;
  overflow-y: auto;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Assure que le conteneur occupe toute la hauteur de l'écran */
}
</style>
