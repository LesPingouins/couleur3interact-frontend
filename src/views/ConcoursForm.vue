<template>
  <main class="container-fluid">
    <div class="col">
      <FormBox />
    </div>
  </main>
</template>

<script>
import FormBox from "../components/concours/form/FormBox.vue";

export default {
  components: { FormBox },
};
</script>

<style scoped>
main {
  background: var(--green-gradient-op);
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
</style>
