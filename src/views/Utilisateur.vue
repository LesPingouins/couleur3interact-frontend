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
}
</style>
