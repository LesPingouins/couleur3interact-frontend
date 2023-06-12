<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="userBox">
        <ButtonBackChat />
        <span class="material-symbols-outlined"> account_circle </span>
        <div class="modifyPicture">
          <label for="files" class="btn">Modifier la photo de profil</label>
          <input id="files" style="visibility: hidden" type="file" />
        </div>
        <TitleChat text="Vos données personnelles" />

        <InputUser title="Nom" value="Cuche" />
        <InputUser title="Prénom" value="Maxime" />
        <InputUser title="E-mail" value="max@max.com" />
        <InputUser title="Adresse" value="Rue des Parcs 123" />
        <InputUser title="NPA" value="2000" />
        <InputUser title="Ville" value="Neuchâtel" />
        <InputUser title="Téléphone" value="0791432547" />

        <TitleChat text="Notifications" />
        <ToggleUser text="Concours" />
        <ToggleUser text="Annonce" />
        <ToggleUser text="Sondage" />
        <TextLinkChat linkText="Déconnexion" link="https://www.example.com" />
        <TextLinkChat
          linkText="Supprimer mon compte"
          link="https://www.example.com"
        />
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

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    InputChat,
    TextLinkChat,
    InputUser,
    ToggleUser,
  },
};
</script>

<style scoped></style>
