<template>
  <div @click="goBack()" class="buttonbackchat d-flex">
    <span class="material-symbols-outlined"> chevron_left </span>
    <p>Retour</p>
  </div>
</template>

<script>
export default {
  name: "ButtonBackChat",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.buttonbackchat {
  background: none;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: var(--medium-text);
  color: var(--black);
}

.material-symbols-outlined {
  color: var(--red);
  font-size: 50px;
}

p {
  padding-top: 12px;
}
</style>
