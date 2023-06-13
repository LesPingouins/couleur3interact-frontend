<template>
  <button class="chat-btn">
    <router-link class="nav-item nav-link" :to="{ name: link }">{{ buttonText
    }}</router-link>
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
    link: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
button {
  width: 100% !important;
  margin-bottom: 10px !important;
}
</style>
