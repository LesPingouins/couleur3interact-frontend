<template>
	<main class="container-fluid">
		<div class="card chat-card">
			<div class="choiceLoginBox">
				<ButtonBackChat />
				<div class="d-flex">
					<TitleChat
						text="Il faut vous connecter si vous voulez utiliser le chat !"
						style="margin-bottom: 50px"
					/>
				</div>
				<div class="d-flex justify-content-leftr align-self-end">
					<TextChat text="Vous avez déjà un compte ?" />
				</div>
				<div class="d-flex justify-content-center">
					<ButtonChat link="Connexion" buttonText="Se connecter" />
				</div>
				<div class="d-flex justify-content-center"><ButtonAnonymous /></div>

				<div class="d-flex justify-content-left">
					<TextChat text="Vous êtes un·e nouvel·le utilisateur·trice ?" />
				</div>
				<div class="d-flex justify-content-center">
					<ButtonChat buttonText="Créer un compte" />
				</div>
			</div>
		</div>
	</main>
	<div class="background"></div>
</template>

<script>
import ButtonBackChat from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import ButtonChat from "../ButtonChat.vue";
import TextChat from "../TextChat.vue";
import ButtonAnonymous from "../ButtonAnonymous.vue";

export default {
	components: {
		ButtonBackChat,
		TitleChat,
		ButtonChat,
		TextChat,
		ButtonAnonymous,
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
