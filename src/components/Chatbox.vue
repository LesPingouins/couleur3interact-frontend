<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="position-relative">
      <div id="chatBox" class="chat-messages p-4">
        <div v-for="message in messages" ref="messsageContainers" class="pb-4">
          <div class="flex-shrink-1 message-box rounded py-2 px-3 mx-2">
            {{ message }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow-0 py-3 px-4 border-top">
      <div class="input-group">
        <input
          type="text"
          v-model="message"
          class="form-control"
          placeholder="Type your message"
        />
        <button
          class="btn btn-primary"
          :class="{ isSendingForm: disabled }"
          @click="onSubmit"
        >
          <i class="bi bi-send"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["chat_id"],
  setup() {},
  created: function () {},
  data() {
    return {
      messages: [],
      chat: [],
      message: "",
      isSendingForm: false,
      users: [],
    };
  },
  methods: {
    // to auto-scroll to the new received  message
    scrollToLastMessage() {
      this.$nextTick(() => {
        let items = this.$refs.messsageContainers;
        let last = items[items.length - 1];
        if (items.length > 0) {
          last.scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: "smooth",
            alignToTop: false,
          });
        }
      });
    },

    // to send new message
    async onSubmit() {
      this.isSendingForm = true;
      axios
        .post(
          this.$store.state.backendUrl + "/chat/send-text-message",
          { message: this.message },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.isSendingForm = false;
          this.message = "";
        })
        .catch((error) => {
          console.log(error);
          /*  this.ShowError=true;
            this.errorMgs = error.response.data.error;*/
          this.isSendingForm = false;
        });
    },

    //to subscribe to the chat websocket channel
    async startWebSocket() {
      console.log("startWebSocket");
      Echo.channel("chat").listen("MessageSent", (e) => {
        this.messages.push(e.message);
        this.scrollToLastMessage();
      });
    },
  },
  watch: {
    // call the method if the chat_id changes in chat.vue
    /*chat_id: {
        handler: "getData",
        immediate: true, // runs immediately with mount() instead of calling method on mount hook
      },*/
  },
  mounted() {
    this.startWebSocket();
  },
};
</script>
