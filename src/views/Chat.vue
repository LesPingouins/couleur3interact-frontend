<template>
  <main class="container min-h-content mb-3 mt-1">
    <div class="card chat-card">
      <div class="row g-0">
        <ChatBox @renderChat="renderChat" />
      </div>
    </div>
  </main>
</template>
<script>
import ChatBox from "../components/ChatBox.vue";

export default {
  components: { ChatBox },
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
