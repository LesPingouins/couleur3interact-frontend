<template>
  <nav class="navbar d-flex justify-content-between">
    <div class="d-flex">
      <span class="material-symbols-outlined" @click="goToPreviousSurvey">
        arrow_circle_left
      </span>

      <div class="align-self-center">
        <span :class="{ 'nav-item': true }">{{ previousSurvey }}</span>
      </div>
    </div>
    <div class="d-flex">
      <span :class="{ 'nav-item': true, active: currentSurvey === 1 }"
        >Sondage{{ currentSurvey }}</span
      >
    </div>
    <div class="d-flex">
      <div class="align-self-center">
        <span :class="{ 'nav-item': true }">{{ nextSurvey }}</span>
      </div>
      <span class="material-symbols-outlined" @click="goToNextSurvey">
        arrow_circle_right
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentSurvey: 1,
    };
  },
  computed: {
    previousSurvey() {
      return this.currentSurvey > 1 ? `Sondage${this.currentSurvey - 1}` : "";
    },
    nextSurvey() {
      return this.currentSurvey < 3 ? `Sondage${this.currentSurvey + 1}` : "";
    },
  },
  methods: {
    goToPreviousSurvey() {
      if (this.currentSurvey > 1) {
        this.currentSurvey--;
      }
    },
    goToNextSurvey() {
      if (this.currentSurvey < 3) {
        this.currentSurvey++;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--white);
  color: var(--black);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25);
  font-family: var(--big-text);
  margin-bottom: 20px;
}
.material-symbols-outlined {
  border-radius: 99px;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  color: var(--blue);
}

.nav-item {
  cursor: pointer;
}
.nav-arrow {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.material-symbols-outlined:first-child {
  padding-right: 20px;
}

.material-symbols-outlined:last-child {
  padding-left: 20px;
}
</style>
