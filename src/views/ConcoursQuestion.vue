<template>
  <main class="container-fluid">
    <div class="col">
      <QuestionBox />
    </div>
  </main>
</template>

<script>
import QuestionBox from "../components/concours/question/QuestionBox.vue";

export default {
  components: { QuestionBox },
};
</script>

<style scoped>
main {
  background: var(--green-gradient-op);
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
</style>
