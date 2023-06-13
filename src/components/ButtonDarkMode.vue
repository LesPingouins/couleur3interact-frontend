<template>
  <!-- eslint-disable -->
  <div id="darkmode" class="btn" @click="toggleDarkMode">
    <div class="btn__indicator">
      <div class="btn__icon-container">
        <i class="btn__icon fa-solid fa-sun"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      const body = document.querySelector("body");
      const icon = document.querySelector(".btn__icon");
      body.classList.toggle("darkmode");
      icon.classList.add("animated");

      if (body.classList.contains("darkmode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }

      setTimeout(() => {
        icon.classList.remove("animated");
      }, 500);
    },
  },
};

//DARK MODE
</script>

<style scoped>
/* -------------- BUTTON -------------- */
.btn {
  background-color: var(--light-color);
  width: 3em;
  height: 2em;
  border-radius: 10em;
  padding: 0 0.5em;

  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;
}

.btn__indicator {
  background-color: var(--white);
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.3s ease;
}

.btn__icon-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn__icon {
  color: var(--light-icon-color);
  font-size: 1rem;
}

/* -------------- ANIMATION ------------ */
.btn__icon.animated {
  animation: spin 0.5s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* -------------- DARKMODE -------------- */
body.darkmode {
  background-color: var(--dark-color);
}

.darkmode .btn {
  background-color: var(--dark-color);
}

.darkmode .btn__indicator {
  transform: translateX(0.6em);
  background-color: var(--white);
}

.darkmode .btn__icon {
  color: var(--dark-icon-color);
}
</style>
