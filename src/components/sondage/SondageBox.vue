<template>
	<div class="col-12 col-lg-7 col-xl-9">
		<div class="position-relative">
			<div id="sondageBox">
				<QuestionText
					texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
				/>
				<ChoixSondage buttonText="Techno" backgroundImage="path/to/image.jpg" />
				<ChoixSondage buttonText="House" backgroundImage="path/to/image.jpg" />
				<ChoixSondage buttonText="Drill" backgroundImage="path/to/image.jpg" />
				<ChoixSondage buttonText="Jazz" backgroundImage="path/to/image.jpg" />

				<ButtonChoix />
			</div>
		</div>
	</div>
</template>

<script>
import ButtonChoix from "./ButtonChoix.vue";
import ButtonSondage from "./ButtonSondage.vue";
import QuestionText from "./QuestionText.vue";
import ChoixSondage from "./ChoixSondage.vue";

export default {
	name: "SondageBox",
	components: { ButtonChoix, ButtonSondage, QuestionText, ChoixSondage },
};
</script>

<style scoped></style>
