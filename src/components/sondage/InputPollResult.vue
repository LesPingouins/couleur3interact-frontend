<template>
  <a :style="{ color: textColor, fontSize: textSize }">{{ text }}</a>
</template>

<script>
export default {
  name: "InputPollResult",
  props: {
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
    },
    textSize: {
      type: String,
      default: "16px",
    },
  },
};
</script>

<style scoped></style>
