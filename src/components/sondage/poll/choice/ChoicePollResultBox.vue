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
        <br />
        <div class="d-flex justify-content-center">
          <ButtonPoll buttonText="Prochain sondage" />
        </div>
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

<style scoped>
.container-fluid {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
