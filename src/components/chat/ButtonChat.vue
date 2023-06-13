<template>
  <button class="chat-btn">
    <span class="text-btn">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonChat",
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
}
</style>
