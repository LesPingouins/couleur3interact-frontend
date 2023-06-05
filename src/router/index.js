import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "/src/layouts/DefaultLayout.vue";
import Chat from "/src/views/Chat.vue";
import Concours from "/src/views/Concours.vue";
import Sondage from "/src/views/Sondage.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Public",
    component: DefaultLayout,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Chat",
        component: Chat,
      },
      {
        path: "/Concours",
        name: "Concours",
        component: Concours,
      },
      {
        path: "/Sondage",
        name: "Sondage",
        component: Sondage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//if the user is not logged in, redirecting to login page
const except = ["Register"];
/*router.beforeEach((to, from, next) => {
  let token = store.state.token;
  console.log("router ==" + token);
  if (to.name !== "Login" && !token && !except.includes(to.name))
    next({ name: "Login" });
  else next();
});*/
export default router;
