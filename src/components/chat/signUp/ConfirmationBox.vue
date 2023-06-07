<template>
	<div id="confirmationBox">
		<ButtonBackChatVue />
		<TitleChat
			text="MaxLaMenace, votre compte à bien été crée! Nous vous souhaitons la Bienvenue sur"
		/>
		<!-- ajouter logo -->
		<ButtonChat buttonText="Commencer l'expérience interact !" />
	</div>
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

<style scoped></style>
