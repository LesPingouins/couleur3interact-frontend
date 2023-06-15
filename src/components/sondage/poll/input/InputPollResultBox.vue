<template>
  <div class="col-12">
    <div class="container-fluid">
      <div id="pollBox d-flex">
        <QuestionText
          texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
        />
      </div>

      <ul class="cloud">
        <li class="answer" v-for="(value, index) in this.answers">
          <InputPollResult
            :text="index"
            :textColor="randomColor()"
            :textSize="getWeightText(value)"
          />
        </li>
      </ul>

      <ButtonPoll
        @click="goBackToPolls()"
        class="buttonBack"
        buttonText="Revenir aux sondages"
      />
    </div>
  </div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import InputPollResult from "../../InputPollResult.vue";
import router from "../../../../router";
import axios from "axios";

export default {
  name: "PollBox",
  components: { ButtonPoll, QuestionText, InputPollResult },
  propos: ["idPoll"],
  data() {
    return {
      id: "",
      colors: [
        "#FF003A",
        "#003BFF",
        "#00FF6D",
        "#F130E9",
        "#00FF6D",
        "#F130E9",
      ],
      answers: [],
    };
  },
  methods: {
    goBackToPolls() {
      router.push("/Sondage");
    },
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    getWeightText(weight) {
      return Math.floor(weight * 1.2 + 60) + "px";
    },
    getResultsFromAPoll() {
      axios
        .get(
          this.$store.state.backendUrl + "/polls/" + this.id + "/answers/same",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.answers = response.data.answers;
          }
        });
    },
  },
  mounted() {
    this.id = router.currentRoute.value.params.id;
    this.getResultsFromAPoll();
  },
};
</script>

<style scoped>
ul.cloud {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.75rem;
  width: 450px;
}
.answer {
  margin-right: 1rem;
}
</style>
