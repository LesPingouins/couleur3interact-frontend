<template>
	<div id="choiceLoginBox">
		<ButtonBackChatVue />
		<TitleChat text="Il faut vous connecter si vous voulez utiliser le chat !" />
		<TextChat text="Vous avez déjà un compte ?" />
		<ButtonChat buttonText="Se connecter" />
		<ButtonAnonymous />
		<TextChat text="Vous êtes un·e nouvel·le utilisateur·trice ?" />
		<ButtonChat buttonText="Créer un compte" />
	</div>
</template>

<script>
import ButtonBackChatVue from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import ButtonChat from "../ButtonChat.vue";
import TextChat from "../TextChat.vue";
import ButtonAnonymous from "../ButtonAnonymous.vue";

export default {
	components: {
		ButtonBackChatVue,
		TitleChat,
		ButtonChat,
		TextChat,
		ButtonAnonymous,
	},
};
</script>

<style scoped></style>
