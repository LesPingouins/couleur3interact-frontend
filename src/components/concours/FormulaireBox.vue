<template>
	<div class="col-12 col-lg-7 col-xl-9">
		<div class="position-relative">
			<div id="formulaireBox">
				<ButtonRetour />
				<TitreConcours texte="Vos données personelles" />
				<InputConcours label="Nom" placeholder="Saisissez votre nom" />
				<InputConcours label="Prénom" placeholder="Saisissez votre prénom" />
				<InputConcours label="Adresse" placeholder="Saisissez votre adresse" />
				<InputConcours label="NPA" placeholder="Saisissez votre NPA" />
				<InputConcours label="Ville" placeholder="Saisissez votre ville" />
				<InputConcours label="E-mail" placeholder="Saisissez votre e-mail" />
				<ButtonConcours buttonText="Envoyer" />
			</div>
		</div>
	</div>
</template>

<script>
import ButtonConcours from "./ButtonConcours.vue";
import InputConcours from "./InputConcours.vue";
import TitreConcours from "./TitreConcours.vue";
import ButtonRetour from "./ButtonRetour.vue";

export default {
	components: { ButtonConcours, InputConcours, TitreConcours, ButtonRetour },
};
</script>

<style scoped></style>
