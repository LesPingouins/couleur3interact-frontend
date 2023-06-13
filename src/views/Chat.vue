<template>
	<main class="container-fluid">
		<div class="card chat-card">
			<div class="row g-0">
				<Popup timeLeft=25 />
				<ChatBox @renderChat="renderChat" />
			</div>
		</div>
	</main>
</template>
<script>
import { deferredComputed } from "@vue/reactivity";
import ChatBox from "../components/ChatBox.vue";
import Popup from "../components/chat/Popup.vue";

export default {
	components: { ChatBox, Popup },
	data() {
		return {
			chatId: null,
			startChat: false,
		};
	},
	methods: {
		/*
		 * To open a new chat
		 *we pass this method to ChatSidebar component
		 */
		renderChat() {
			this.startChat = true;
		},
	},
};
</script>
<style scoped>
body {
	background: linear-gradient(180deg,
			rgba(255, 0, 58, 0.2),
			rgba(241, 48, 233, 0.2));
}

main {
	background: linear-gradient(180deg,
			rgba(255, 0, 58, 0.2),
			rgba(241, 48, 233, 0.2));
	padding-left: 5%;
	padding-right: 5%;
	padding-bottom: 5%;
}

.card {
	background-color: #ffffff;
	border-radius: 0px 0px 22px 22px;
	border: none;
	padding: 0px;
}

.container-fluid {
	box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}
</style>
