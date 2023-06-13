import { createStore } from "vuex";

const store = createStore({
  state: {
    username: "",
    id: "",
    email: "",
    image: "",
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    stateLoaded: false,
  },
  mutations: {
    //getting saved data from the web storage
    async initialiseStore(state) {
      if (localStorage.getItem("username")) {
        state.username = localStorage.getItem("username");
      }
      if (localStorage.getItem("id")) {
        state.image = localStorage.getItem("id");
      }
      if (localStorage.getItem("email")) {
        state.image = localStorage.getItem("email");
      }
      if (localStorage.getItem("image")) {
        state.image = localStorage.getItem("image");
      }
      state.stateLoaded = true;
      return true;
    },

    //saving the login data from the login request
    saveLogin(state, LoginData) {
      state.username = LoginData.username;
      state.image = LoginData.image;
      state.email = LoginData.email;
      state.id = LoginData.id;
      localStorage.setItem("username", LoginData.username);
      localStorage.setItem("image", LoginData.image);
      localStorage.setItem("id", LoginData.id);
      localStorage.setItem("email", LoginData.email);
    },

    //remove all the data from web storage and store for logging out
    Logout(state) {
      state.username = "";
      state.image = "";
      state.email = "";
      state.id = "";
      localStorage.removeItem("username");
      localStorage.removeItem("image");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
    },
  },
  actions: {},
  modules: {},
});

export default store;
