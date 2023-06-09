<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="loginBox">
        <ButtonBackChat />
        <TitleChat text="Se connecter" />
        <InputChat label="E-mail *" placeholder="Saisissez votre e-mail" />
        <InputChat
          label="Mot de passe *"
          placeholder="Saisissez votre mot de passe"
        />

        <div class="space d-flex justify-content-between">
          <CheckboxButton
            title="Se souvenir de moi"
            checkboxId="checkbox1"
            checkboxValue="option1"
          />
          <TextLinkChat
            linkText="Mot de passe oublié ?"
            link="https://www.example.com"
          />
        </div>
        <ButtonChat buttonText="Je me connecte!" />
        <div class="d-flex justify-content-center align-self-end">
          <TextChat class="textChat" text="Vous n'avez pas de compte ?" />
        </div>
        <div class="d-flex justify-content-center">
          <TextLinkChat
            linkText="Créer un compte"
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
import CheckboxButton from "../CheckboxButton.vue";
import TextLinkChat from "../TextLinkChat.vue";
import ButtonChat from "../ButtonChat.vue";
import TextChat from "../TextChat.vue";

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    InputChat,
    CheckboxButton,
    TextLinkChat,
    ButtonChat,
    TextChat,
  },
};
</script>

<style scoped>
main {
  background: var(--red-gradient-op);
  height: 100%;
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

.space {
  padding-bottom: 10px;
}

.textChat {
  font-size: 16px;
  margin-top: 10px;
}
</style>
