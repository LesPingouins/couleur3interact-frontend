<template>
  <div class="inputchat-container">
    <label class="inputchat-label">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      class="text-input"
      style="color: var(--black) !important"
      v-model="value"
      :placeholder="placeholder"
    />
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
    name: {
      type: String,
      required: true,
    },
    type: {
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
.inputchat-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-family: var(--medium-text);
  color: var(--black);
}
</style>
