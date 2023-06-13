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
    }
  },
  computed: {
    backgroundStyle() {
      console.log(this.isItemsEnabled)
      console.log(this.backgroundColor);
      return `background: ${this.backgroundColor} `;
    },
  },
};
</script>

<style scoped>
button:hover {
  background: var(--white) !important;
  border: 2px solid var(--grey) !important;
  color: var(--grey) !important;
}
</style>
