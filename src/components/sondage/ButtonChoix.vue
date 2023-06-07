<template>
	<div class="d-flex justify-content-center">
	<button class="choix-btn ">Faites un choix</button>
</div>
</template>

<script>
export default {
	name: "ButtonChoix",
};
</script>

<style scoped>
	.choix-btn {
		border-radius: 99px;
		background: linear-gradient(180deg, #003BFF, #00FEFF);
		color: #FFFFFF;
		width: 50%;
		box-shadow: none;
		border: none;
		
		
	}
	.choix-btn:hover{
		background: #FFFFFF;
		color : var(--blue);
		border : 2px solid var(--blue);
		
}


</style>
