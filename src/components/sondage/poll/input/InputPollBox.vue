<template>
	<div class="col-12">
		<div class="container-fluid">
			<div id="pollBox d-flex">
				<QuestionText
					texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
				/>
			</div>

			<InputPoll placeholder="Saisissez votre genre de musique préféré" />

			<ButtonPoll buttonText="Valider" />
		</div>
	</div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import InputPoll from "../../InputPoll.vue";

export default {
	name: "PollBox",
	components: { ButtonPoll, QuestionText, InputPoll },
};
</script>

<style scoped></style>
