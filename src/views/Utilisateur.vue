<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <UserBox />
      </div>
    </div>
  </div>
</template>

<script>
import UserBox from "../components/chat/user/UserBox.vue";
export default {
  components: { UserBox },
};
</script>

<style scoped>
.container-fluid {
  background: var(--red-gradient-op);
  padding-bottom: 5%;
  padding-top: 5%;
}
</style>
