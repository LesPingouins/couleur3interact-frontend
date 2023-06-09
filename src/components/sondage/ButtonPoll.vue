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
.poll-btn {
  border-radius: 99px;
  background: var(--blue-gradient);
  color: var(--white);
  width: 100%;
  box-shadow: none;
  border: none;
}
.poll-btn:hover {
  background: var(--white);
  color: var(--blue);
  border: 2px solid var(--blue);
}
</style>
