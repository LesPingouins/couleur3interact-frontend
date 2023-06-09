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
  border: 2px solid var(--black);
  width: 1.3em;
  height: 1.3em;
  background-color: var(--white);
  border-radius: 50%;
  vertical-align: middle;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
}

.checkbox-round:checked {
  background: var(--red-gradient);
}
</style>
