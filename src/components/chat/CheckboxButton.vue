<template>
  <div class="checkbox-btn">
    <label :for="checkboxId">
      <input
        type="checkbox"
        :id="checkboxId"
        :value="checkboxValue"
        v-model="isChecked"
        class="checkbox-round"
      />
      <span>{{ title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckboxButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    checkboxId: {
      type: String,
      required: true,
    },
    checkboxValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style scoped>
.checkbox-round {
  border: 2px solid var(--black) !important;
  width: 1.3em !important;
  height: 1.3em !important;
  background-color: var(--white) !important;
  border-radius: 50% !important;
  vertical-align: middle !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  outline: none !important;
  cursor: pointer !important;
  margin-right: 10px !important;
}

.checkbox-round:checked {
  background: var(--red-gradient) !important;
}
span {
  font-family: var(--small-text) !important;
  color: var(--black) !important;
}
</style>
