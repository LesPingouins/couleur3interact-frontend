<template>
  <h3 :class="role">
    {{ texte }}
  </h3>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  texte: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "question",
  },
});
</script>

<style scoped>
p {
  text-align: left;
  font-size: 30px;
}
</style>
