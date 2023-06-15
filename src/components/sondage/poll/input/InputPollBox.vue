<template>
  <div v-if="!is_predefined" class="col-12">
    <div class="container-fluid">
      <div id="pollBox d-flex">
        <QuestionText :texte="poll.question" />
      </div>

      <InputPoll ref="answer" placeholder="Entrez ici votre réponse..." />
      <div class="d-flex justify-content-center">
        <ButtonPoll
          @click="sendPoll()"
          class="ButtonPoll"
          buttonText="Valider"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import InputPoll from "../../InputPoll.vue";
import router from "../../../../router";
import axios from "axios";
import store from "../../../../store";

export default {
  name: "PollBox",
  props: {
    is_predefined: {
      type: Boolean,
    },
    poll: {
      type: Object,
      default: "",
    },
  },
  methods: {
    sendPoll() {
      if (this.$refs.answer.inputValue) {
        const pollId = this.poll.id;
        axios
          .post(
            import.meta.env.VITE_BACKEND_URL + "/polls/" + pollId + "/answers",
            {
              answer: this.$refs.answer.inputValue,
              user_id: store.state.id,
              event_id: pollId,
            }
          )
          .then(function (response) {
            if (response.status === 201) {
              router.push("/SondageInputResultat/" + pollId);
            }
          });
      }
    },
  },
  components: { ButtonPoll, QuestionText, InputPoll },
};
</script>

<style scoped>
.ButtonPoll {
  width: 100% !important;
}
.col-12 {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
