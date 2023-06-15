<template>
  <div class="input-container">
    <div class="input-info">
      <p class="title">{{ title }}</p>
      <p v-if="!isEditing" @click="toggleEditing" class="input-value">
        {{ value }}
      </p>
      <input
        placeholder="test"
        v-if="isEditing"
        v-model="editedValue"
        @keydown.enter="saveValue"
        ref="input"
        :readonly="!isEditing"
      />
    </div>
    <div class="edit-icon" @click="toggleEditing">
      <i class="fa" :class="isEditing ? 'fa-check' : 'fa-pencil'"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditableInput",
  data() {
    return {
      isEditing: false,
      editedValue: "",
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleEditing() {
      if (!this.isEditing) {
        this.isEditing = true;
        this.editedValue = this.value;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else {
        this.isEditing = false;
      }
    },
    saveValue() {
      if (this.editedValue.trim() !== "") {
        this.$emit("update:value", this.editedValue);
      }
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 5px !important;
  color: var(--black);
}

.input-container {
  display: flex;
  align-items: center;
}

.input-info {
  display: flex;
  align-items: center;
}

.input-info p {
  margin: 0;
  padding-right: 10px;
  cursor: pointer;
}

.input-value {
  color: var(--black);
  width: 45vw;
  border-bottom: 2px solid var(--red);
  margin-bottom: 15px !important;
}

.edit-icon {
  cursor: pointer;
}

.fa-pencil {
  padding-left: 5px;
  padding-bottom: 10px;
  color: var(--red);
}

.fa-check {
  color: green;
}
.title {
  font-family: var(--medium-text);
  width: 20vw;
  color: var(--black);
  margin-top: 20px;
}
</style>
