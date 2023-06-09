<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavPoll />
        <img src="" alt="" />
        <ChoicePollBox />
      </div>
    </div>
  </div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollBox from "../components/sondage/poll/choice/ChoicePollBox.vue";

export default {
  components: { NavPoll, ChoicePollBox },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
