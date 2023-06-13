<template>
	<button class="choicepoll-btn" :style="backgroundStyle">
		<div class="background-btn"></div>
		<h3>
			{{ buttonText }}
		</h3>
	</button>
</template>

<script>
export default {
	name: "ChoicePoll",
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
.choicepoll-btn {
	border-radius: 20px 20px 20px 20px !important;
	height: 100px;
	width: 100%;
	color: var(--white);
	border: none;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
}

h3 {
	color: var(--white) !important;
	text-decoration-line: underline;
	text-decoration-style: wavy;
	text-decoration-color: var(--white);
}
</style>
