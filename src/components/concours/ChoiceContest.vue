<template>
  <button class="choicecontest-btn" :style="backgroundStyle">
    <div class="background-btn"></div>
    <span class="text-btn">{{ buttonText }}</span>
  </button>
</template>

<script>
export default {
  name: "ChoiceContest",
  data() {
    return {
      randomNumberBackground: 1
    };

  },
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundStyle() {
      return `background-image: url('src/assets/images/concours/TextButtonFixed-${this.randomNumberBackground}.svg')`;
    },
  },
  mounted() {
    this.randomNumberBackground = Math.floor(Math.random() * 4) + 1
  }
};
</script>

<style scoped>
.choicecontest-btn {
  border-radius: 20px 20px 20px 20px;
  height: 125px;
  width: 100%;
  color: #ffffff;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
}

span {
  color: var(--black);
  font-size: 20px;
}
</style>
