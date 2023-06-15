<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="userBox">
        <ButtonBackChat />
        <div class="d-flex justify-content-center">
          <span class="material-symbols-outlined"> account_circle </span>
        </div>
        <div class="d-flex justify-content-center">
          <div class="modifyPicture">
            <label for="files" class="btn">Modifier la photo de profil</label>
            <input id="files" style="visibility: hidden" type="file" />
          </div>
        </div>

        <TitleChat text="Vos données personnelles" />

        <InputUser title="Nom" :value="this.user.lastname" />
        <InputUser title="Prénom" :value="this.user.firstname" />
        <InputUser title="E-mail" :value="this.user.email" />
        <InputUser title="Adresse" :value="this.user.address" />
        <InputUser title="NPA" :value="this.user.address_code" />
        <InputUser title="Ville" :value="this.user.city" />
        <InputUser title="Téléphone" :value="this.user.phone" />

        <TitleChat style="margin-top: 20px !important" text="Notifications" />
        <div class="d-flex toggleUser">
          <ToggleUser text="Concours" />
        </div>
        <div class="d-flex toggleUser">
          <ToggleUser text="Annonce" />
        </div>
        <div style="margin-bottom: 20px !important" class="d-flex toggleUser">
          <ToggleUser text="Sondage" />
        </div>
        <div class="d-flex justify-content-center">
          <TextLinkChat linkText="Déconnexion" @click="logout()" link="#" />
        </div>
        <div class="d-flex justify-content-center">
          <TextLinkChat linkText="Supprimer mon compte" link="#" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ButtonBackChat from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import InputChat from "../InputChat.vue";
import TextLinkChat from "../TextLinkChat.vue";
import InputUser from "../InputUser.vue";
import ToggleUser from "../ToggleUser.vue";
import store from "../../../store";
import router from "../../../router";
import axios from "axios";

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    InputChat,
    TextLinkChat,
    InputUser,
    ToggleUser,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getAUser() {
      axios
        .get(this.$store.state.backendUrl + "/users/" + this.$store.state.id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.user = response.data;
          }
        });
    },
    logout() {
      store.commit("logout");
      router.push("/");
    },
  },
  mounted() {
    this.getAUser();
  },
};
</script>

<style scoped>
main {
  background: var(--red-gradient-op);
}

.card {
  background-color: var(--white);
  border-radius: 22px;
  border: none;
  padding: 5% 5% 10% 5%;
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
.btn {
  text-align: center;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  text-decoration: underline !important;
  border: none !important;
  color: var(--black) !important;
}
.material-symbols-outlined {
  font-size: 100px;
  color: var(--black) !important;
}
</style>
