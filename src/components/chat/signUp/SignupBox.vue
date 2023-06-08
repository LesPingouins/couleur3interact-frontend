<template>
	<main class="container-fluid">
		<div class="card chat-card">
			<div id="signupBox">
				<ButtonBackChat />
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
		</div>
	</main>
</template>

<script>
import ButtonBackChat from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import InputChat from "../InputChat.vue";
import ButtonChat from "../ButtonChat.vue";

export default {
	components: {
		ButtonBackChat,
		TitleChat,
		InputChat,
		ButtonChat,
	},
};
</script>

<style scoped>
body {
	background: linear-gradient(
		180deg,
		rgba(255, 0, 58, 0.2),
		rgba(241, 48, 233, 0.2)
	);
}
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
</style>
