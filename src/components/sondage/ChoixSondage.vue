<template>
	<button class="choix-btn">
		<div class="background-btn" :style="backgroundStyle"></div>
		<span class="text-btn">{{ buttonText }}</span>
	</button>
</template>

<script>
export default {
	name: "ChoixSondage",
	props: {
		buttonText: {
			type: String,
			required: true,
		},
		backgroundImage: {
			type: String,
			required: true,
		},
	},
	computed: {
		backgroundStyle() {
			return `background-image: url('${this.backgroundImage}')`;
		},
	},
};
</script>

<style scoped></style>
