<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col">
        <NavPoll />

        <InputPollBox />
      </div>
    </div>
  </main>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import InputPollBox from "../components/sondage/poll/input/InputPollBox.vue";

export default {
  components: { NavPoll, InputPollBox },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
