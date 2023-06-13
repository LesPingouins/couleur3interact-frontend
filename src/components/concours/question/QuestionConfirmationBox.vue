<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="position-relative">
      <div id="questionConfirmationBox">
        <ButtonBackContest />
        <TitleContest text="Merci de votre inscription au concours !" />
        <br />
        <TitleContest
          text="Vous avez reçu un mail de confirmation sur votre boîte mail privé."
        />
        <br />
        <TitleContest
          text="Le gagnant du concours recevra toutes les infos nécessaires par mail le jour du tirage !"
        />
        <br />
        <ButtonContest buttonText="Retourner au chat" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonContest from "../ButtonContest.vue";
import TitleContest from "../TitleContest.vue";
import ButtonBackContest from "../ButtonBackContest.vue";

export default {
  components: {
    ButtonContest,
    TitleContest,
    ButtonBackContest,
  },
};
</script>

<style scoped></style>
