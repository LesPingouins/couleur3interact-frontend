<template>
	<button class="sondage-btn">Valider le choix</button>
</template>

<script>
export default {
	name: "ButtonSondage",
};
</script>

<style scoped>
	.sondage-btn {
		border-radius: 99px;
		background: linear-gradient(180deg, #003BFF, #00FEFF);
		color: #FFFFFF;
		width: 50%;
		box-shadow: none;
		border: none;
		
		
	}
	.sondage-btn:hover{
		background: #FFFFFF;
		color : var(--blue);
		border : 2px solid var(--blue);
		
}</style>
