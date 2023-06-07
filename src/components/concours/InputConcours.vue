<template>
	<div class="inputconcours-container">
		<label class="inputconcours-label">{{ label }}</label>
		<input class="text-input" v-model="inputValue" :placeholder="placeholder" />
	</div>
</template>

<script>
export default {
	name: "InputConcours",
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
.inputconcours-container {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
}
</style>
