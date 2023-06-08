<template>
  <div class="buttonbackcontest d-flex">
    <span class="material-symbols-outlined"> chevron_left </span>
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  name: "ButtonBackContest",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "Retour",
    },
  },
};
</script>

<style scoped>
.buttonbackcontest {
  background: none;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.material-symbols-outlined {
  color: var(--green);
}
</style>
