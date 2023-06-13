<template>
  <div class="inputcontest-container">
    <label class="inputcontest-label">{{ label }}</label>
    <input class="text-input" v-model="value" :placeholder="placeholder" />
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
      value: "",
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

.inputcontest-label {
  font-family: var(--medium-text);
}

.text-input {
  font-family: var(--medium-text);
}
</style>
