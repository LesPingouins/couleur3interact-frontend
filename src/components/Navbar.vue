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
      <div class="active-indicator"></div>
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
.nav-item {
  width: 30%;
  text-align: center;
  z-index: 1;
}

.navbar {
  background: var(--red-gradient);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) inset;
  font-family: var(--main-titles);
  position: relative;
  /* Ajoutez cette ligne pour positionner correctement le carré blanc */
}

.active {
  color: var(--red) !important;
}

.active-indicator {
  position: absolute;
  bottom: 8px; /* Ajustez la position verticale du carré blanc selon vos préférences */
  left: 0;
  width: 30%;
  height: 40px; /* Ajustez la hauteur du carré blanc selon vos préférences */
  text-align: center;
  background: var(--white);
  transition: transform 0.3s ease; /* Ajoutez une transition pour un mouvement fluide */
  border: none !important;
  background-color: var(--white) !important;
  text-align: center !important;
  border-radius: var(--bs-border-radius-pill) !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) !important;
}

.nav-item:nth-child(1).active ~ .active-indicator {
  transform: translateX(3.3333%); /* Déplacez le carré vers l'élément 'Chat' */
  width: 30% !important;
  color: red !important;
}

.nav-item:nth-child(2).active ~ .active-indicator {
  transform: translateX(
    115.3333%
  ); /* Déplacez le carré vers l'élément 'Concours' */
  width: 30% !important;
}

.nav-item:nth-child(3).active ~ .active-indicator {
  transform: translateX(230%); /* Déplacez le carré vers l'élément 'Sondage' */
  width: 30% !important;
}
</style>
