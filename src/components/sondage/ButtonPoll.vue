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

<style scoped></style>
