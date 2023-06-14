<template>
  <button class="contest-btn">
    <span class="text-btn">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonContest",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  width: 100% !important;
  margin-bottom: 10px !important;
  background: var(--green-gradient) !important;
  border: 3px solid var(--green) !important;
}
button:hover {
  color: var(--green);
  background: var(--white) !important;
  border: 3px solid var(--green) !important;
}
</style>
