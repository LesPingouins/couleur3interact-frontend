<template>
	<div class="inputchat-container">
		<label class="inputchat-label">{{ label }}</label>
		<input class="text-input" v-model="inputValue" :placeholder="placeholder" />
	</div>
</template>

<script>
export default {
	name: "InputChat",
	props: {
		label: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			inputValue: "",
		};
	},
};
</script>

<style scoped>
.inputchat-container {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
}
</style>
