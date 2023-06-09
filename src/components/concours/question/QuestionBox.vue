<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="position-relative">
      <div id="questionBox">
        <ButtonBackContest buttonText="Retour au choix de concours" />
        <TitleContest
          text="Tentez votre chance et gagnez 2 billets pour PALEO 2023"
        />
        <TextContest
          text="Pour participer, il suffit seulement de nous indiquer qui est votre artiste préféré de cette édition !"
        />
        <InputContest
          label="Votre artiste préféré *"
          placeholder="Saisissez votre artiste préféré"
        />
        <ButtonContest buttonText="Valider" />
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

export default {
  components: {
    ButtonContest,
    InputContest,
    TitleContest,
    ButtonBackContest,
    TextContest,
  },
};
</script>

<style scoped></style>
