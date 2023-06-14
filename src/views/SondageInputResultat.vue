<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <InputPollResultBox :id-poll="this.idPoll" />
      </div>
    </div>
  </div>
</template>

<script>
import InputPollResultBox from "../components/sondage/poll/input/InputPollResultBox.vue";

export default {
  components: { InputPollResultBox },
  data() {
    return {
      idPoll: null,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
