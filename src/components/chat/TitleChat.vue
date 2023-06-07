<template>
	<h1 :class="role">
		{{ text }}
	</h1>
</template>

<script>
export default {
	name: "TitleChat",
	props: {
		text: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: false,
			default: "title",
		},
	},
};
</script>

<style scoped></style>
