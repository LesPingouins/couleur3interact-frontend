<template>
	<button class="contest-btn">
		<span class="text-btn">{{ buttonText }}</span>
	</button>
</template>

<script>
export default {
	name: "ButtonContest",
	props: {
		buttonText: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped></style>
