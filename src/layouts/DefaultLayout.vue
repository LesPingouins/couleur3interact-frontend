<template>
  <div>
    <AppHeader />
    <Navbar />
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
