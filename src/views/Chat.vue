<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div class="row g-0">
        <Popup
          v-if="isEventON"
          :event="this.event"
          class="popup d-flex justify-content-center"
          timeLeft="25"
        />
        <ChatBox @renderChat="renderChat" />
      </div>
    </div>
  </main>
</template>
<script>
import ChatBox from "../components/ChatBox.vue";
import Popup from "../components/chat/Popup.vue";
import axios from "axios";

export default {
  components: { ChatBox, Popup },
  data() {
    return {
      isEventON: false,
      chatId: null,
      startChat: false,
      event: null,
    };
  },
  methods: {
    /*
     * To open a new chat
     *we pass this method to ChatSidebar component
     */
    renderChat() {
      this.startChat = true;
      //console.log(Echo.channel("poll").listen("PollSent"))
    },
    async startListenPollEvent() {
      Echo.channel("poll").listen("PollSent", (e) => {
        this.isEventON = true;
      });
    },

    getActiveEvent() {
      axios
        .get(this.$store.state.backendUrl + "/event/active")
        .then((response) => {
          if (response.status === 200) {
            this.isEventON = true;
            this.event = response.data;
          } else this.isEventON = false;
        })
        .catch((error) => {});
    },
  },
  mounted() {
    this.startListenPollEvent();
    this.getActiveEvent();
  },
};
</script>
<style scoped>
main {
  background: var(--red-gradient-op);
  padding-top: 0px !important;
}

.card {
  background: var(--white);
  border-radius: 0px 0px 22px 22px;
  border: none;
  padding: 0px;
}

.container-fluid {
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25) inset;
}

.popup {
  position: absolute;
  z-index: 9;
}
</style>
