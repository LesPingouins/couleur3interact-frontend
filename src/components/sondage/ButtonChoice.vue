<template>
  <div class="d-flex justify-content-center">
    <button class="choice-btn">Faites un choix</button>
  </div>
</template>

<script>
export default {
  name: "ButtonChoice",
};
</script>

<style scoped>
button {
  background: var(--grey) !important;
}
button:hover {
  background: var(--white) !important;
  border: 2px solid var(--grey) !important;
  color: var(--grey) !important;
}
</style>
