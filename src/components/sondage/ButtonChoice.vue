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
.choice-btn {
  border-radius: 99px;
  background: var(--blue-gradient);
  color: var(--white);
  width: 50%;
  box-shadow: none;
  border: none;
}
.choice-btn:hover {
  background: var(--white);
  color: var(--blue);
  border: 2px solid var(--blue);
}
</style>
