<template>
  <nav
    class="navbar navbar-expand-lg navbar-light rounded-pill"
    :style="{ background: navbarBackgroundColor, color: textColor }"
  >
    <div class="navbar-nav flex-row justify-content-around w-100 shadow-inner">
      <router-link
        class="nav-item nav-link text-white"
        @click="changeActiveElement(1)"
        :class="activeElement1 === true ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Chat' }"
        >Chat</router-link
      >

      <router-link
        class="nav-item nav-link text-white"
        @click="changeActiveElement(2)"
        :class="activeElement2 === true ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Concours' }"
        >Concours</router-link
      >

      <router-link
        class="nav-item nav-link text-white"
        @click="changeActiveElement(3)"
        :class="activeElement3 === true ? 'active' : ''"
        aria-current="page"
        :to="{ name: 'Sondage' }"
        >Sondage</router-link
      >
      <div class="active-indicator"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      notifications: [],
      activeElement1: true,
      activeElement2: false,
      activeElement3: false,
      navbarBackgroundColor: "var(--red-gradient)",
      textColor: "var(--red)",
    };
  },
  methods: {
    changeActiveElement(id) {
      if (id === 1) {
        this.activeElement1 = true;
        this.activeElement2 = false;
        this.activeElement3 = false;
        this.navbarBackgroundColor = "var(--red-gradient)";
        this.textColor = "var(--red)";
      } else if (id === 2) {
        this.activeElement1 = false;
        this.activeElement2 = true;
        this.activeElement3 = false;
        this.navbarBackgroundColor = "var(--green-gradient)";
        this.textColor = "var(--green)";
      } else {
        this.activeElement1 = false;
        this.activeElement2 = false;
        this.activeElement3 = true;
        this.navbarBackgroundColor = "var(--blue-gradient)";
        this.textColor = "var(--blue)";
      }
    },
  },
};
</script>

<style scoped>
.nav-item {
  width: 30%;
  text-align: center;
  z-index: 1;
}

.navbar {
  background: var(--red-gradient);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) inset;
  font-family: var(--main-titles);
  position: relative;
}

.active {
  color: var(--black) !important;
}

.active-indicator {
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 30%;
  height: 40px;
  text-align: center;
  background: var(--white);
  transition: transform 0.3s ease;
  border: none !important;
  background-color: var(--white) !important;
  text-align: center !important;
  border-radius: var(--bs-border-radius-pill) !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) !important;
}

.nav-item:nth-child(1).active ~ .active-indicator {
  transform: translateX(3.3333%);
  width: 30% !important;
}

.nav-item:nth-child(2).active ~ .active-indicator {
  transform: translateX(115.3333%);
  width: 30% !important;
}

.nav-item:nth-child(3).active ~ .active-indicator {
  transform: translateX(230%);
  width: 30% !important;
}
</style>
