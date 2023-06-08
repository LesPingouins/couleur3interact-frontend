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
body {
  background: linear-gradient(
    180deg,
    rgba(0, 255, 109, 0.2),
    rgba(66, 212, 206, 0.2)
  );
}
main {
  background: linear-gradient(
    180deg,
    rgba(0, 255, 109, 0.2),
    rgba(66, 212, 206, 0.2)
  );
  padding: 5%;
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
</style>
