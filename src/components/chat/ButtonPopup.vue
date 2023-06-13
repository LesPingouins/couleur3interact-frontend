<template>
  <button class="popup-btn">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "ButtonPopup",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
