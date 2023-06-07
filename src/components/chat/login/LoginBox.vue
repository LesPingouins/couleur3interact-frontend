<template>
	<div id="loginBox">
		<ButtonBackChatVue />
		<TitleChat text="Se connecter" />
		<InputChat label="E-mail *" placeholder="Saisissez votre e-mail" />
		<InputChat
			label="Mot de passe *"
			placeholder="Saisissez votre mot de passe"
		/>
		<CheckboxButton
			title="Se souvenir de moi"
			checkboxId="checkbox1"
			checkboxValue="option1"
		/>
		<TextLinkChat
			linkText="Mot de passe oublié ?"
			link="https://www.example.com"
		/>
		<ButtonChat buttonText="Je me connecte!" />
		<TextChat text="Vous n'avez pas de compte ?" />
		<TextLinkChat linkText="Créer un compte" link="https://www.example.com" />
	</div>
</template>

<script>
import ButtonBackChatVue from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import InputChat from "../InputChat.vue";
import CheckboxButton from "../CheckboxButton.vue";
import TextLinkChat from "../TextLinkChat.vue";
import ButtonChat from "../ButtonChat.vue";
import TextChat from "../TextChat.vue";

export default {
	components: {
		ButtonBackChatVue,
		TitleChat,
		InputChat,
		CheckboxButton,
		TextLinkChat,
		ButtonChat,
		TextChat,
	},
};
</script>

<style scoped></style>
