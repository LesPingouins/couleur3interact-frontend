<template>
  <div class="inputcontest-container">
    <label class="inputcontest-label">{{ label }}</label>
    <input class="text-input" v-model="inputValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "InputContest",
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
.inputcontest-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
  border: 2px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 4px;
}
</style>
