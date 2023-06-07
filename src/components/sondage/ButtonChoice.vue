<template>
	<div class="d-flex justify-content-center">
		<button class="choice-btn">Faites un choix</button>
	</div>
</template>

<script>
export default {
	name: "ButtonChoice",
};
</script>

<style scoped>
.choice-btn {
	border-radius: 99px;
	background: linear-gradient(180deg, #003bff, #00feff);
	color: #ffffff;
	width: 50%;
	box-shadow: none;
	border: none;
}
.choice-btn:hover {
	background: #ffffff;
	color: var(--blue);
	border: 2px solid var(--blue);
}
</style>
