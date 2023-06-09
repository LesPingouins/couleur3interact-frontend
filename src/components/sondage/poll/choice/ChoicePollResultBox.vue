<template>
  <div class="col-12">
    <div class="container-fluid">
      <div id="pollBox d-flex">
        <QuestionText
          texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
        />

        <BarGraphResult
          name="Techno"
          percentage="30%"
          voteCount="120"
          color="var(--green-pink-gradient)"
        />
        <BarGraphResult
          name="Techno"
          percentage="40%"
          voteCount="120"
          color="var(--blue-pink-gradient)"
        />
        <BarGraphResult
          name="Techno"
          percentage="40%"
          voteCount="120"
          color="var(--red-pink-gradient)"
        />
        <BarGraphResult
          name="Techno"
          percentage="40%"
          voteCount="120"
          color="var(--yellow-pink-gradient)"
        />

        <ButtonPoll buttonText="Prochain sondage" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import BarGraphResult from "../../BarGraphResult.vue";

export default {
  name: "PollBox",
  components: { ButtonPoll, QuestionText, BarGraphResult },
};
</script>

<style scoped></style>
