<template>
  <div v-if="!is_predefined" class="col-12">
    <div class="container-fluid">
      <div id="pollBox d-flex">
        <QuestionText :texte="poll.question" />
      </div>

      <InputPoll placeholder="Entrez ici votre réponse..." />
      <div class="d-flex justify-content-center">
        <ButtonPoll class="ButtonPoll" buttonText="Valider" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import InputPoll from "../../InputPoll.vue";

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
