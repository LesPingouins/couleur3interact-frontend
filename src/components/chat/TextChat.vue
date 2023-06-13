<template>
  <h3 :class="role">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: "TextChat",
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

<style scoped></style>
