<template>
	<div class="popup">
		<div class="header" @click="togglePopup">
			<i :class="chevronClass"></i>
			<div class="time">
				<span class="material-symbols-outlined"> hourglass_empty </span>
				{{ timeLeft }}
				<p>secondes restantes</p>
			</div>
			<TitleChat text="Quel est votre style de musique favori ?" />
		</div>
		<div class="content" :class="{ expanded: isExpanded }">
			<TextChat text="SONDAGE" />
			<ButtonPopup buttonText="Non merci" />
			<ButtonPopup buttonText="Je participe" />
		</div>
	</div>
</template>

<script>
import TitleChat from "./TitleChat.vue";
import TextChat from "./TextChat.vue";
import ButtonPopup from "./ButtonPopup.vue";

export default {
	name: "Popup",

	components: { TitleChat, TextChat, ButtonPopup },

	data() {
		return {
			isExpanded: false,
		};
	},
	props: {
		timeLeft: {
			type: Number,
			required: true,
		},
	},
	computed: {
		chevronClass() {
			return this.isExpanded ? "fa fa-chevron-up" : "fa fa-chevron-down";
		},
	},
	methods: {
		togglePopup() {
			this.isExpanded = !this.isExpanded;
		},
	},
};
</script>

<style scoped>
.content {
	display: none;
	transition: max-height 0.3s ease;
	overflow: hidden;
	max-height: 0;
}

.content.expanded {
	display: block;
	max-height: 500px;
	/* Adjust the max-height value as needed */
}

p {
	font-family: var(--main-titles);
}
</style>
