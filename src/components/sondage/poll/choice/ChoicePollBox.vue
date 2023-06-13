<template>
  <div class="col-12">
    <div class="container-fluid">
      <div id="pollBox d-flex">
        <QuestionText
          texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
        />

        <div class="choixSondage d-flex justify-content-between">
          <ChoicePoll
            class="active choix"
            buttonText="Techno"
            backgroundImage="src/assets/images/sondage/TextButtonFixed-1.svg"
          />
          <ChoicePoll
            class="blurry choix"
            buttonText="House"
            backgroundImage="src/assets/images/sondage/TextButtonFixed-2.svg"
          />
        </div>
        <div class="choixSondage d-flex justify-content-between">
          <ChoicePoll
            class="blurry choix"
            buttonText="Drill"
            backgroundImage="src/assets/images/sondage/TextButtonFixed-3.svg"
          />
          <ChoicePoll
            class="blurry choix"
            buttonText="Jazz"
            backgroundImage="src/assets/images/sondage/TextButtonFixed-4.svg"
          />
        </div>

        <ButtonChoice />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonChoice from "../../ButtonChoice.vue";
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import ChoicePoll from "../../ChoicePoll.vue";

export default {
  name: "PollBox",
  components: { ButtonChoice, ButtonPoll, QuestionText, ChoicePoll },
};
</script>

<style scoped>
.container-fluid {
  padding-left: 5%;
  padding-right: 5%;
}
.choixSondage {
  margin-bottom: 20px;
}
.choix {
  transition: all 0.3s ease;
}
.choix:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.active {
  filter: blur(0px);
}
.blurry {
  filter: blur(2px);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
}
</style>
