<template>
  <p :class="role">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "TextContest",
  props: {
    text: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "textcontest",
    },
  },
};
</script>

<style scoped>
p {
  font-family: var(--medium-text);
}
</style>
