<template>
  <button class="anonymous-btn">Rester anonyme</button>
</template>

<script>
export default {
  name: "ButtonAnonymous",
};
</script>

<style scoped>
.anonymous-btn {
  border-radius: 99px;
  background: var(--white);
  color: var(--black);
  border: 2px solid var(--black);
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;
}
.anonymous-btn:hover {
  background: var(--black);
  color: var(--white);
  border: 2px solid var(--black);
}
</style>
