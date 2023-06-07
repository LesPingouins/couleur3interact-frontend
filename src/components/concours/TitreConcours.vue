<template>
	<p :class="role">
		{{ texte }}
	</p>
</template>

<script>
export default {
	name: "TitreConcours",
	props: {
		texte: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: false,
			default: "titre",
		},
	},
};
</script>

<style scoped></style>
