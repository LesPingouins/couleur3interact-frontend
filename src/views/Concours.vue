<template>
  <main class="container-fluid">
    <div>
      <LabelNewContest class="labelNewContest" />
      <ChoiceContest
        buttonText="Gagnez 2 billets pour Paléo 2023"
        backgroundImage="src/assets/images/concours/TextButtonFixed-1.svg"
      />
    </div>
    <LabelNewContest class="labelNewContest" />
    <ChoiceContest
      buttonText="Gagnez une nuit dans hôtel 5 étoiles pour 2 !"
      backgroundImage="src/assets/images/concours/TextButtonFixed-2.svg"
    />
    <LabelNewContest class="labelNewContest" />
    <ChoiceContest
      buttonText="Gagnez 1 bon pour spa & soins à Lavey les bains"
      backgroundImage="src/assets/images/concours/TextButtonFixed-3.svg"
    />
    <LabelNewContest class="labelNewContest" />
    <ChoiceContest
      buttonText="Gagnez un lecteur de vinyl dernier cri !"
      backgroundImage="src/assets/images/concours/TextButtonFixed-4.svg"
    />
  </main>
</template>

<script>
import ChoiceContest from "../components/concours/ChoiceContest.vue";
import LabelNewContest from "../components/concours/LabelNewContest.vue";

export default {
  components: { ChoiceContest, LabelNewContest },
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
