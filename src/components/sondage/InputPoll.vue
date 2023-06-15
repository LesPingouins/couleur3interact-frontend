<template>
  <div class="inputpoll-container">
    <input
      style="color: var(--black)"
      class="text-input"
      v-model="inputValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "InputPoll",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped>
.inputpoll-container {
  margin-bottom: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
</style>
