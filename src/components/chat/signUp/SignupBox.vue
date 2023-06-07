<template>
	<div id="signupBox">
		<ButtonBackChatVue />
		<TitleChat text="Créer un compte" />
		<InputChat
			label="Nom d'utilisateur *"
			placeholder="Saisissez votre nom d'utilisateur"
		/>
		<InputChat label="E-mail *" placeholder="Saisissez votre e-mail" />
		<InputChat
			label="Mot de passe *"
			placeholder="Saisissez votre mot de passe"
		/>
		<InputChat
			label="Confirmer le mot de passe *"
			placeholder="Saisissez votre mot de passe"
		/>

		<ButtonChat buttonText="Je crée mon compte" />
	</div>
</template>

<script>
import ButtonBackChatVue from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import InputChat from "../InputChat.vue";
import ButtonChat from "../ButtonChat.vue";

export default {
	components: {
		ButtonBackChatVue,
		TitleChat,
		InputChat,
		ButtonChat,
	},
};
</script>

<style scoped></style>
