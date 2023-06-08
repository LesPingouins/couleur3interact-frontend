<template>
	<button class="poll-btn">
		<span class="text-btn">{{ buttonText }}</span>
	</button>
</template>

<script>
export default {
	name: "ButtonPoll",
	props: {
		buttonText: {
			type: String,
			required: true,
			default: "Valider le choix",
		},
	},
};
</script>

<style scoped>
.poll-btn {
	border-radius: 99px;
	background: linear-gradient(180deg, #003bff, #00feff);
	color: #ffffff;
	width: 50%;
	box-shadow: none;
	border: none;
}
.poll-btn:hover {
	background: #ffffff;
	color: var(--blue);
	border: 2px solid var(--blue);
}
</style>
