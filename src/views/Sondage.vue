<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavPoll @print-poll="printPoll" />
        <ChoicePollBox
          v-if="this.isPollsShow"
          :is_predefined="this.poll.is_predefined"
          :poll="this.poll"
        />
        <InputPollBox
          v-if="this.isPollsShow"
          :is_predefined="this.poll.is_predefined"
          :poll="this.poll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollBox from "../components/sondage/poll/choice/ChoicePollBox.vue";
import InputPollBox from "../components/sondage/poll/input/InputPollBox.vue";
import axios from "axios";
import router from "../router";

export default {
  components: { NavPoll, ChoicePollBox, InputPollBox },
  data() {
    return {
      poll: 3,
      isPollsShow: false,
    };
  },
  methods: {
    printPoll(id) {
      axios
        .get(this.$store.state.backendUrl + "/polls/" + id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.isPollsShow = true;
            this.poll = response.data[0];
          }
        });
    },
    disablePollsInactives() {
      axios
        .post(this.$store.state.backendUrl + "/polls/disable", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .catch((response) => {
          if (response.error === 418) {
          }
        });
    },
  },
  mounted() {
    if (router.currentRoute.value.query.id) {
      this.printPoll(router.currentRoute.value.query.id);
    }
    this.disablePollsInactives();
  },
};
</script>

<style scoped>
.container-fluid {
  background: var(--blue-gradient-op);
  padding-bottom: 5%;
}
</style>
