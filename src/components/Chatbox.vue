<template>
  <div class="col-12">
    <div class="position-relative">
      <div id="chatBox" class="chat-messages p-4">
        <div v-for="message in messages" ref="messsageContainers" class="pb-4">
          <div class="flex-shrink-1 message-box rounded">
            {{ message }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow-0border-top">
      <div class="input-group">
        <input
          type="text"
          v-model="message"
          class="form-control"
          placeholder="Écrire"
        />
       
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
    this.messages.push("test");
    this.messages.push("test2");
    this.messages.push("test2");  
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
    this.messages.push("test2");
   
  },
};
</script>
<style scoped>

.form-control{
  background-color: none;
  border: 2px solid #1E1E1E;
  border-radius: 22px;

}
button{
  opacity: 0%;
}
.form-control:focus{
  border: 2px solid #1E1E1E;
  box-shadow: none;
}
.col-12{

}

</style>
