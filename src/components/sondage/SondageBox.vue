<template>
	<div class="col-12">
		<div class="container-fluid">
			<div id="sondageBox d-flex">
				
				<QuestionText
					texte="Quel genre de musique préfériez vous entendre sur
				Couleur 3 ?"
				/>
		<div class="choixSondage d-flex justify-content-between">
				<ChoixSondage class="active choix" buttonText="Techno" backgroundImage="src/assets/images/sondage/TextButtonFixed-1.svg" />
				<ChoixSondage class="blurry choix" buttonText="House" backgroundImage="src/assets/images/sondage/TextButtonFixed-2.svg" />
			</div>
			<div class="choixSondage d-flex justify-content-between">
				<ChoixSondage class="blurry choix" buttonText="Drill" backgroundImage="src/assets/images/sondage/TextButtonFixed-3.svg" />
				<ChoixSondage class= "blurry choix" buttonText="Jazz" backgroundImage="src/assets/images/sondage/TextButtonFixed-4.svg" />
			</div>
			
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

<style scoped>

.container-fluid{
	padding-left: 5%;
	padding-right: 5%;
}
.choixSondage{
	margin-bottom: 20px;
}
.choix{
	transition: all 0.3s ease;
}
.choix:hover{
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.50);
}

.active{
	filter: blur(0px);
}
.blurry{
	filter: blur(2px);
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.50);
}
</style>
