<template>
	<button class="choicecontest-btn" :style="backgroundStyle">
		<div class="background-btn"></div>
		<span class="text-btn">{{ buttonText }}</span>
	</button>
</template>

<script>
export default {
	name: "ChoiceContest",
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

<style scoped>
.choicecontest-btn {
	border-radius: 20px 20px 20px 20px;
	height: 100px;
	width: 100%;
	color: #ffffff;
	border: none;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
}
</style>
