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
.chat-btn {
  border-radius: 99px;
  background: var(--red-gradient);
  color: #ffffff;
  width: 100%;
  border: none;
}
.chat-btn:hover {
  background: #ffffff;
  color: var(--red);
  border: 2px solid var(--red);
}
</style>
