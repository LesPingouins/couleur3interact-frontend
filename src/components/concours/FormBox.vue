<template>
	<div class="col-12 col-lg-7 col-xl-9">
		<div class="position-relative">
			<div id="formBox">
				<ButtonBackContest />
				<TitleContest text="Vos données personelles" />
				<InputContest label="Nom" placeholder="Saisissez votre nom" />
				<InputContest label="Prénom" placeholder="Saisissez votre prénom" />
				<InputContest label="Adresse" placeholder="Saisissez votre adresse" />
				<InputContest label="NPA" placeholder="Saisissez votre NPA" />
				<InputContest label="Ville" placeholder="Saisissez votre ville" />
				<InputContest label="E-mail" placeholder="Saisissez votre e-mail" />
				<ButtonContest buttonText="Envoyer" />
			</div>
		</div>
	</div>
</template>

<script>
import ButtonContest from "./ButtonContest.vue";
import InputContest from "./InputContest.vue";
import TitleContest from "./TitleContest.vue";
import ButtonBackContest from "./ButtonBackContest.vue";

export default {
	components: {
		ButtonContest,
		InputContest,
		TitleContest,
		ButtonBackContest,
	},
};
</script>

<style scoped></style>
