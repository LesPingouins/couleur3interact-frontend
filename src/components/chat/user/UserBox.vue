<template>
  <main class="container-fluid">
    <div class="card chat-card">
      <div id="userBox">
        <ButtonBackChat />
      </div>
    </div>
  </main>
</template>

<script>
import ButtonBackChat from "../ButtonBackChat.vue";
import TitleChat from "../TitleChat.vue";
import InputChat from "../InputChat.vue";
import ButtonChat from "../ButtonChat.vue";

export default {
  components: {
    ButtonBackChat,
    TitleChat,
    InputChat,
    ButtonChat,
  },
};
</script>

<style scoped></style>
