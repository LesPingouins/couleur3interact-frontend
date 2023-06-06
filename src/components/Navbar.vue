<template>
  <nav class="navbar navbar-expand-lg navbar-light rounded-pill">
    <div class="navbar-nav flex-row justify-content-around w-100 shadow-inner">
      <router-link
        class="nav-item nav-link text-white"
        :class="$route.name == 'Chat' ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Chat' }"
        >Chat</router-link
      >

      <router-link
        class="nav-item nav-link text-white"
        :class="$route.name == 'Concours' ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Concours' }"
        >Concours</router-link
      >

      <router-link
        class="nav-item nav-link text-white"
        :class="$route.name == 'Sondage' ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Sondage' }"
        >Sondage</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    logout() {
      //this.$store.commit("Logout");
      //this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(180deg, #ff003a, #f130e9);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) inset;
}

.active {
  color: #f130e9 !important;
  border: none;
  background-color: var(--white) !important;
  
  padding-left: 1em;
  padding-right: 1em;
  border-radius: var(--bs-border-radius-pill) !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
