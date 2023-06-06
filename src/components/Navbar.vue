<template>
  <div class="navbar-background">
    <nav class="navbar rounded-pill">
      <div
        class="navbar-nav flex-row justify-content-around w-100 shadow-inner"
      >
        <div class="container"></div>
        <div class="tabs">
          <!-- <router-link
              class=""
              :class="$route.name == 'Chat' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Chat' }"
              >Chat
            ></router-link>

             <router-link
              class="nav-item nav-link text-white"
              :class="$route.name == 'Concours' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Concours' }"
              >Concours</router-link>
            
              <router-link
              class="nav-item nav-link text-white"
              :class="$route.name == 'Sondage' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Sondage' }"
              >Sondage</router-link
            >
          
          
          -->
          <router-link :class="$route.name == 'Chat' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Chat' }">
          <input type="radio" id="radio-1" name="tabs" checked /></router-link>
          <label class="tab" for="radio-1"><router-link :class="$route.name == 'Chat' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Chat' }">Chat</router-link></label>

              <router-link
            
              :class="$route.name == 'Concours' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Concours' }"
              >
          <input type="radio" id="radio-2" name="tabs" /></router-link>
          <label class="tab" for="radio-2"><router-link
              :class="$route.name == 'Concours' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Concours' }"
              >Concours</router-link></label>

          <input type="radio" id="radio-3" name="tabs" />
          <label class="tab" for="radio-3">Sondage</label>
          <span class="glider"></span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    logout() {
      //this.$store.commit("Logout");
      //this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
*,
*:after,
*:before {
  box-sizing: border-box;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  display: flex;
  position: relative;
  background-image: linear-gradient(180deg, #ff003a, #f130e9);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -70px;
  padding: 0.75rem;
  border-radius: 99px;
}
.tabs * {
  z-index: 2;
}

input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 400;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}
input[type="radio"]:checked + label {
  color: black;
}
input[id="radio-1"]:checked ~ .glider {
  transform: translateX(0);
}
input[id="radio-2"]:checked ~ .glider {
  transform: translateX(100%);
}
input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: white;
  color: white;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}
@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}

/* .navbar-background{
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 20px;
}
.navbar {
  background-image: linear-gradient(180deg, #ff003a, #f130e9);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) inset;
} */

/* .active {
  color: #f130e9 !important;
  border: none;
  background-color: var(--white) !important;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: var(--bs-border-radius-pill) !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
} */
</style>
