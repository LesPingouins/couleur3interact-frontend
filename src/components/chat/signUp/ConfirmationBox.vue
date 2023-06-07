<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="confirmationBox">
        <ButtonBackChatVue />
        <TitleChat
          text="MaxLaMenace, votre compte à bien été crée! Nous vous souhaitons la Bienvenue sur"
        />
        <img
          src="/src/assets/images/logo/logo_color-noir-rts-couleur3-horizontal.svg"
          alt=""
        />
        <ButtonChat buttonText="Commencer l'expérience interact !" />
      </div>
    </div>
  </main>
</template>

<script>
import ButtonBackChatVue from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import ButtonChat from "../ButtonChat.vue";

export default {
  components: {
    ButtonBackChatVue,
    TitleChat,
    ButtonChat,
  },
};
</script>

<style scoped>
main {
  background: linear-gradient(
    180deg,
    rgba(255, 0, 58, 0.2),
    rgba(241, 48, 233, 0.2)
  );
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
  height: 100%;
}
.card {
  background-color: #ffffff;
  border-radius: 22px;
  border: none;
  padding: 5% 5% 10% 5%;
}
.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
img {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>
