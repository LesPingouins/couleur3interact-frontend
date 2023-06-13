<template>
  <main class="container-fluid">
    <div v-for="contest in this.contests">
      <LabelNewContest class="labelNewContest" />
      <ChoiceContest :buttonText="contest.name_of" />
    </div>
  </main>
</template>

<script>
import ChoiceContest from "../components/concours/ChoiceContest.vue";
import LabelNewContest from "../components/concours/LabelNewContest.vue";
import axios from "axios";

export default {
  components: { ChoiceContest, LabelNewContest },
  data() {
    return {
      contests: [],
    };
  },
  methods: {
    getContests() {
      axios.get(
        this.$store.state.backendUrl + "/contests",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            this.contests = response.data;
            console.log(this.contests)
          }
        })
        .catch((error) => {
          console.log(error);
          this.ShowError = true;
          this.errorMgs = error.response.data.error;
        });
    },
  },
  mounted() {
    this.getContests();
  },
};
</script>

<style scoped>
body {
  background: linear-gradient(180deg,
      rgba(0, 255, 109, 0.2),
      rgba(66, 212, 206, 0.2));
}

main {
  background: linear-gradient(180deg,
      rgba(0, 255, 109, 0.2),
      rgba(66, 212, 206, 0.2));
  padding: 5%;
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}

.labelNewContest {
  position: absolute;
  clip: rect(0px, 100%, 100%, 20px);
  right: 40px;
}
</style>
