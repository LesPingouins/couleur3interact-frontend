<template>
	<div class="col-12">
		<div class="container-fluid">
			<div id="pollBox d-flex">
				<QuestionText
					texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
				/>
			</div>

			<ul class="cloud">
				<InputPollResult text="Drill" textColor="#FF003A" textSize="90px" />
				<InputPollResult text="Hip Hop" textColor="#003BFF" textSize="30px" />
				<InputPollResult text="DrumNBass" textColor="#00FF6D" textSize="40px" />
				<InputPollResult text="House" textColor="#F130E9" textSize="20px" />
				<InputPollResult text="Jazz" textColor="#00FF6D" textSize="60px" />
				<InputPollResult text="Techno" textColor="#F130E9" textSize="60px" />
			</ul>

			<ButtonPoll buttonText="Prochain sondage" />
		</div>
	</div>
</template>

<script>
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import InputPollResult from "../../InputPollResult.vue";

export default {
	name: "PollBox",
	components: { ButtonPoll, QuestionText, InputPollResult },
};
</script>

<style scoped>
ul.cloud {
	list-style: none;
	padding-left: 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	line-height: 2.75rem;
	width: 450px;
}
</style>
