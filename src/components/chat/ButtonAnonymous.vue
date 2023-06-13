<template>
  <button class="anonymous-btn">Rester anonyme</button>
</template>

<script>
export default {
  name: "ButtonAnonymous",
};
</script>

<style scoped>
button {
  width: 100% !important;
  margin-bottom: 50px !important;
  background: var(--white) !important;
  border: 3px solid var(--black) !important;
  color: var(--black) !important;
  border: 3px solid var(--black) !important;
}
button:hover {
  color: var(--white) !important;
  background: var(--black) !important;
  border: 3px solid var(--black) !important;
}
</style>
