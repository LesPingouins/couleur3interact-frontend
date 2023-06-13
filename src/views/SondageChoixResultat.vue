<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavPoll />
        <ChoicePollResultBox />
      </div>
    </div>
  </div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollResultBox from "../components/sondage/poll/choice/ChoicePollResultBox.vue";

export default {
  components: { NavPoll, ChoicePollResultBox },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
