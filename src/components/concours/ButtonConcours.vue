<template>
	<button class="concours-btn">
		<span class="text-btn">{{ buttonText }}</span>
	</button>
</template>

<script>
export default {
	name: "ButtonConcours",
	props: {
		buttonText: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped></style>
