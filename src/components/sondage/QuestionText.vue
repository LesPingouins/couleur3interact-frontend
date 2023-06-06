<template>
	<p :class="role">
		{{ texte }}
	</p>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
	texte: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: false,
		default: "question",
	},
});
</script>

<style scoped></style>
