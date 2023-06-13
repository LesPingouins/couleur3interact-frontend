<template>
  <button class="chat-btn">
    <router-link
        class="nav-item nav-link"
        :to="{ name:  link  }"
        >{{ buttonText }}</router-link
      >
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
