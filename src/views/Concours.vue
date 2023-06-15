<template>
  <main class="container-fluid">
    <div v-for="contest in this.contests">
      <div @click="goToContest(contest.id)">
        <LabelNewContest class="labelNewContest" />
        <ChoiceContest :buttonText="contest.name_of" />
      </div>
    </div>
  </main>
</template>

<script>
import ChoiceContest from "../components/concours/ChoiceContest.vue";
import LabelNewContest from "../components/concours/LabelNewContest.vue";
import axios from "axios";
import router from "../router";

export default {
  components: { ChoiceContest, LabelNewContest },
  data() {
    return {
      contests: [],
    };
  },
  methods: {
    getContests() {
      axios
        .get(this.$store.state.backendUrl + "/contests", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.contests = response.data;
          }
        });
    },
    goToContest(id) {
      router.push("ConcoursQuestion/?id=" + id);
    },
  },
  mounted() {
    this.getContests();
  },
};
</script>

<style scoped>
main {
  background: var(--green-gradient-op);
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}

.labelNewContest {
  position: absolute;
  right: 4%;
}
</style>
