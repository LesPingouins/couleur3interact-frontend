<template>
  <div class="d-flex justify-content-center">
    <button class="choice-btn" :style="backgroundStyle">Faites un choix</button>
  </div>
</template>

<script>
export default {
  name: "ButtonChoice",
  props: {
    backgroundColor: {
      type: String,
    },
    isItemsEnabled: {
      type: Boolean,
    },
  },
  computed: {
    backgroundStyle() {
      return `background: ${this.backgroundColor} `;
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px !important;
  background: var(--grey-darker) !important;
  border: 3px solid var(--grey-darker) !important;
}
button:hover {
  color: var(--grey-darker);
  background: var(--white) !important;
  border: 3px solid var(--grey-darker) !important;
}
</style>
