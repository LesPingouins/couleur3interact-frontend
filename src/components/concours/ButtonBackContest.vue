<template>
  <div @click="goBack()" class="buttonbackcontest d-flex">
    <span class="material-symbols-outlined"> chevron_left </span>
    <p>{{ buttonText }}</p>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "ButtonBackContest",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "Retour",
    },
  },
  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style scoped>
.buttonbackcontest {
  background: none;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: var(--medium-text);
}

.material-symbols-outlined {
  color: var(--green);
  font-size: 50px;
}

p {
  padding-top: 12px;
}
</style>
