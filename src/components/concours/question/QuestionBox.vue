<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="position-relative">
      <div id="questionBox">
        <ButtonBackContest buttonText="Retour au choix de concours" />
        <TitleContest :text="this.contest.name_of" />
        <TextContest :text="this.contest.description" />
        <InputContest ref="answer" :label="this.contest.question" placeholder="Saisissez votre réponse..." />
        <div class="d-flex justify-content-center">
          <ButtonContest @click="sendForm()" buttonText="Valider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonContest from "../ButtonContest.vue";
import InputContest from "../InputContest.vue";
import TitleContest from "../TitleContest.vue";
import ButtonBackContest from "../ButtonBackContest.vue";
import TextContest from "../TextContest.vue";
import axios from "axios";
import router from "../../../router";

export default {
  components: {
    ButtonContest,
    InputContest,
    TitleContest,
    ButtonBackContest,
    TextContest,
  },
  data() {
    return {
      contest: {},
      id: null,
    }
  },
  methods: {
    getAContest() {
      this.id = router.currentRoute.value.query.id;

      axios.get(
        this.$store.state.backendUrl + "/contests/" + this.id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            this.contest = response.data[0];
            console.log(this.contest)
          }
        })
        .catch((error) => {
          console.log(error);
          this.ShowError = true;
          this.errorMgs = error.response.data.error;
        });
    },
    sendForm() {
      router.push({
        name: "ConcoursForm", //use name for router push
        params: {
          answer: this.$refs.answer.value,
          id: this.id,
        }
      });

    },
  },
  mounted() {
    this.getAContest();
  }
};
</script>

<style scoped></style>
