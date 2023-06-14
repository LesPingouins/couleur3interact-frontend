<template>
  <button class="poll-btn">
    <span class="text-btn">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonPoll",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "Valider le choix",
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px !important;
  background: var(--blue-gradient) !important;
  border: 3px solid var(--blue) !important;
}
button:hover {
  color: var(--blue);
  background: var(--white) !important;
  border: 3px solid var(--blue) !important;
}
</style>
