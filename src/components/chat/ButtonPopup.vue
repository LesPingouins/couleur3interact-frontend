<template>
	<button class="popup-btn">{{ buttonText }}</button>
</template>

<script>
export default {
	name: "ButtonPopup",
	props: {
		buttonText: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.popup-btn {
	border-radius: 99px;
	background: #ffffff;
	color: var(--black);
	border: 2px solid var(--black);
	width: 100%;
	margin-top: 10px;
	margin-bottom: 50px;
}
.popup-btn:hover {
	background: var(--black);
	color: #ffffff;
	border: 2px solid var(--black);
}
</style>
