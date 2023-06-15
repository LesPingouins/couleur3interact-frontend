<template>
  <h2 :class="role">
    {{ text }}
  </h2>
</template>

<script>
export default {
  name: "TitleChat",
  props: {
    text: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "title",
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--black) !important;
}
</style>
