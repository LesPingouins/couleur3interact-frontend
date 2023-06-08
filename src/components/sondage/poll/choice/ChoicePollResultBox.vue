<template>
	<div class="col-12">
		<div class="container-fluid">
			<div id="pollBox d-flex">
				<QuestionText
					texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
				/>

				<BarGraphResult
					name="Techno"
					percentage="30%"
					voteCount="120"
					color="linear-gradient(
		90deg,
		rgba(0, 255, 194, 1),
		rgba(233, 100, 255, 0.5156),
		rgba(219, 255, 0, 0)"
				/>
				<BarGraphResult name="Techno" percentage="40%" voteCount="120" />
				<BarGraphResult name="Techno" percentage="40%" voteCount="120" />
				<BarGraphResult name="Techno" percentage="40%" voteCount="120" />

				<ButtonPoll buttonText="Prochain sondage" />
			</div>
		</div>
	</div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import BarGraphResult from "../../BarGraphResult.vue";

export default {
	name: "PollBox",
	components: { ButtonPoll, QuestionText, BarGraphResult },
};
</script>

<style scoped></style>
