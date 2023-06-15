<template>
  <div class="col-12">
    <div class="position-relative">
      <div id="chatBox" class="chat-messages p-4">
        <div v-for="message in messages" ref="messageContainers" class="pb-2">
          <div class="flex-shrink-1 message-box rounded">
            <i class="chatHour">{{ message.time }}&nbsp;</i>
            <strong v-bind:class="{ 'color-red': checkIsUser(message.username) }" class="userChat">
              {{ message.username }}:
            </strong>
            <strong class="messageChat"> {{ message.message }} </strong>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow-0border-top inputMessage">
      <div class="input-group">
        <input type="text" @keyup.enter="onSubmit" v-model="message" class="form-control" placeholder="Écrire" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import router from "../router";
import store from "../store";

export default {
  props: ["chat_id"],
  setup() { },
  created: function () { },
  data() {
    return {
      messages: [],
      chat: [],
      message: "",
      username: "",
      isSendingForm: false,
      users: [],
    };
  },
  methods: {
    getTime() {
      return moment().format("HH:mm");
    },
    checkIsUser(userToCheck) {
      return userToCheck === store.state.username;
    },

    scrollToLastMessage() {
      this.$nextTick(() => {
        let items = this.$refs.messageContainers;
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

    async onSubmit() {
      if (this.message !== "") {
        if (this.$store.state.username !== "") {
          this.isSendingForm = true;

          axios
            .post(
              this.$store.state.backendUrl + "/chat",
              {
                message: this.message,
                username: this.username,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              if (response.status === 200) {
                this.isSendingForm = false;
                this.message = "";
              }
            });
        } else {
          router.push("ChoixConnexion");
        }
      }
    },

    //to subscribe to the chat websocket channel
    async startWebSocket() {
      Echo.channel("chat").listen("MessageSent", (e) => {
        e.time = moment().format("HH:mm");
        this.messages.push(e);
        this.scrollToLastMessage();
      });
    },
  },
  mounted() {
    this.startWebSocket();
    this.username = store.state.username;
  },
};
</script>
<style scoped>
.form-control {
  background-color: none;
  border: 2px solid var(--black);
}

input {
  border-radius: 99px !important;
  border: 3px var(--black) solid !important;
  box-shadow: none !important;
  padding-left: 21px !important;
  width: 100% !important;
  background-color: var(--white) !important;
  color: var(--black) !important;
}

.color-red {
  color: var(--red) !important;
}

.inputMessage {
  position: absolute !important;
  width: 100% !important;
  top: 0px !important;
  margin-top: 73vh !important;
}

button {
  opacity: 0%;
}

::placeholder {
  color: var(--black) !important;
}

::placeholder .form-control:focus {
  border: 2px solid var(--black);
  box-shadow: none;
}

.chatHour {
  font-family: var(--medium-text);
  color: var(--black);
}

.userChat {
  font-family: var(--medium-text);
  color: var(--black);
}

.messageChat {
  font-family: var(--chat-message);
  color: var(--black);
}

.col-12 {
  height: 76vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  background: var(--white);
}
</style>
