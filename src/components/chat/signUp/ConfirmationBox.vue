<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="confirmationBox">
        <ButtonBackChat />
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
import ButtonBackChat from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import ButtonChat from "../ButtonChat.vue";

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    ButtonChat,
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
img {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>
