<template>
  <div class="buttonbackchat d-flex">
    <span class="material-symbols-outlined"> chevron_left </span>
    <p>Retour</p>
  </div>
</template>

<script>
export default {
  name: "ButtonBackChat",
};
</script>

<style scoped>
.buttonbackchat {
  background: none;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: var(--medium-text);
}
.material-symbols-outlined {
  color: var(--red);
  font-size: 50px;
}
p {
  padding-top: 12px;
}
</style>
