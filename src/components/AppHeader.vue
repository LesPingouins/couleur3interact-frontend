<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    aria-label="Main navigation"
  >
    <div class="container-fluid">
      <router-link
        :to="{ name: 'Home' }"
        class="navbar-brand d-flex align-items-center"
      >
        <i class="bi bi-box2-heart h1 me-1"></i>
        <strong>VUE</strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'Home' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
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
