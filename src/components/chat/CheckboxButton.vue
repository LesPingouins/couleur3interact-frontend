<template>
	<div class="checkbox-btn">
		<label :for="checkboxId">
			<input
				type="checkbox"
				:id="checkboxId"
				:value="checkboxValue"
				v-model="isChecked"
			/>
			<span>{{ title }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: "CheckboxButton",
	props: {
		title: {
			type: String,
			required: true,
		},
		checkboxId: {
			type: String,
			required: true,
		},
		checkboxValue: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isChecked: false,
		};
	},
};
</script>

<style scoped></style>
