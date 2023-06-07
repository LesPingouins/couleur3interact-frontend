<template>
  <div class="inputchat-container">
    <label class="inputchat-label">{{ label }}</label>
    <input class="text-input" v-model="inputValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "InputChat",
  props: {
    label: {
      type: String,
      required: true,
    },
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
input {
  padding: 5px;
  border: 2px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 4px;
}
.inputchat-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
</style>
