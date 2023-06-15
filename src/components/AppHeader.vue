<template>
  <div class="container-fluid d-flex justify-content-between">
    <div
      class="nav-link"
      @click="goTo()"
      :class="$route.name == 'ChoixConnexion' ? 'active' : ''"
    >
      <div class="d-flex justify-content-between align-self-center">
        <span class="material-symbols-outlined"> account_circle </span>
        <div class="d-flex connect align-self-center">
          <b>{{ this.username }}</b>
        </div>
      </div>
    </div>

    <div class="nav-item nav-link d-flex align-self-center">
      <ButtonDarkMode />
    </div>
  </div>
</template>

<script>
import ButtonDarkMode from "../components/ButtonDarkMode.vue";
import router from "../router";
import store from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      username:
        store.state.username !== "" ? store.state.username : "Me connecter",
    };
  },
  watch: {
    "$store.state.username": function (val) {
      if (store.state.username !== "") this.username = store.state.username;
      else this.username = "Me connecter";
    },
  },
  components: { ButtonDarkMode },
  methods: {
    goTo() {
      if (store.state.username !== "") {
        router.push("/Utilisateur");
      } else {
        router.push("/ChoixConnexion");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.container-fluid {
  background: var(--white);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
}

.material-symbols-outlined {
  font-size: 35px;
  padding-top: 5px;
  padding-right: 10px;
  color: var(--black);
  cursor: pointer;
}

.connect {
  font-size: var(--big-text);
  color: var(--black);
  cursor: pointer;
}
</style>
