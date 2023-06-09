<template>
  <div class="container-fluid d-flex justify-content-between">
    <router-link
      class="nav-link"
      :class="$route.name == 'ChoixConnexion' ? 'active' : ''"
      aria-current="page"
      :to="{ name: 'ChoixConnexion' }"
    >
      <div class="d-flex justify-content-between align-self-center">
        <span class="material-symbols-outlined"> account_circle </span>
        <div class="d-flex connect align-self-center">
          <b>Me connecter</b>
        </div>
      </div></router-link
    >

    <div class="nav-item nav-link d-flex align-self-center">
      <ButtonDarkMode />
    </div>
  </div>
</template>

<script>
import ButtonDarkMode from "../components/ButtonDarkMode.vue";
export default {
  name: "AppHeader",
  components: { ButtonDarkMode },
  data() {},
  methods: {},
};
</script>

<style scoped>
.container-fluid {
  background-color: var(--white);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
}

.material-symbols-outlined {
  font-size: 40px;
  padding-right: 10px;
}
.connect {
  font-size: 20px;
}
</style>
