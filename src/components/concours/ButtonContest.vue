<template>
  <button class="contest-btn">
    <span class="text-btn">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonContest",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.contest-btn {
  border-radius: 99px;
  background: var(--green-gradient);
  color: var(--white);
  width: 100%;
  border: none;
}
.contest-btn:hover {
  background: var(--white);
  color: var(--green);
  border: 2px solid var(--green);
}
</style>
