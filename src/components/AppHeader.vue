<template>
  <div class="container mb-3">
    <div class="row">
      <router-link
        class="nav-item nav-link col-10"
        :class="$route.name == 'Chat' ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Chat' }"
      >
        <div class="row align-items-center">
          <span class="material-symbols-outlined col-1" style="font-size: 2em">
            account_circle
          </span>
          <b class="col-5">Me connecter</b>
        </div></router-link
      >
      <div class="col-2">
        <ButtonDarkMode />
      </div>
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

<style scoped></style>
