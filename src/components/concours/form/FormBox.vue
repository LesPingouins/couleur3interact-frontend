<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="position-relative">
      <div id="formBox">
        <ButtonBackContest />
        <TitleContest text="Vos données personnelles" />
        <InputContest ref="lastname" label="Nom" placeholder="Nom..." />
        <InputContest ref="firstname" label="Prénom" placeholder="Prénom..." />
        <InputContest ref="address" label="Adresse" placeholder="Adresse..." />
        <div class="d-flex">
          <div class="flex-xl-shrink-1" style="width: 20%">
            <InputContest ref="address_code" label="NPA" placeholder="NPA..." />
          </div>
          <div class="w-100" style="padding-left: 2%">
            <InputContest ref="city" label="Ville" placeholder="Ville..." />
          </div>
        </div>
        <InputContest
          ref="phone"
          label="Téléphone"
          placeholder="Numéro de téléphone..."
        />
        <div class="d-flex justify-content-center">
          <ButtonContest
            @click="sendFormData()"
            class="ButtonContest"
            buttonText="Envoyer"
          />
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
import router from "../../../router";
import axios from "axios";
import store from "../../../store";

export default {
  components: {
    ButtonContest,
    InputContest,
    TitleContest,
    ButtonBackContest,
  },
  data() {
    return {
      answer: "",
      id: "",
    };
  },
  methods: {
    sendFormData() {
      router.push("/ConcoursQuestionConfirmation");
    },
  },
  mounted() {
    this.answer = router.currentRoute.value.params.answer;
    this.id = router.currentRoute.value.params.id;
  },
};
</script>

<style scoped>
.ButtonContest {
  width: 100%;
}
</style>
