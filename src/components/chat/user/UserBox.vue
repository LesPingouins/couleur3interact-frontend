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

        <InputUser title="Nom" value="Cuche" />
        <InputUser title="Prénom" value="Maxime" />
        <InputUser title="E-mail" value="max@max.com" />
        <InputUser title="Adresse" value="Rue des Parcs 123" />
        <InputUser title="NPA" value="2000" />
        <InputUser title="Ville" value="Neuchâtel" />
        <InputUser title="Téléphone" value="0791432547" />

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
          <TextLinkChat
            linkText="Supprimer mon compte"
            link="https://www.example.com"
          />
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

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    InputChat,
    TextLinkChat,
    InputUser,
    ToggleUser,
  },
  methods: {
    logout() {
      store.commit("logout");
      router.push("/");
    },
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
