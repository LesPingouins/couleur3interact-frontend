<template>
  <main class="container-fluid">
    <div class="col">
      <QuestionConfirmationBox />
    </div>
  </main>
</template>

<script>
import QuestionConfirmationBox from "../components/concours/question/QuestionConfirmationBox.vue";
export default {
  components: { QuestionConfirmationBox },
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
