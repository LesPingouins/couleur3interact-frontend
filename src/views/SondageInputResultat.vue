<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavPoll />
        <InputPollResultBox />
      </div>
    </div>
  </div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import InputPollResultBox from "../components/sondage/poll/input/InputPollResultBox.vue";

export default {
  components: { NavPoll, InputPollResultBox },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
