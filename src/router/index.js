import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "/src/layouts/DefaultLayout.vue";
import Chat from "/src/views/Chat.vue";
import Concours from "/src/views/Concours.vue";
import Sondage from "/src/views/Sondage.vue";
import Connexion from "/src/views/Connexion.vue";
import ChoixConnexion from "/src/views/ChoixConnexion.vue";
import Inscription from "/src/views/Inscription.vue";
import ConfirmationInscription from "/src/views/ConfirmationInscription.vue";
import ConcoursForm from "/src/views/ConcoursForm.vue";
import ConcoursQuestion from "/src/views/ConcoursQuestion.vue";
import ConcoursQuestionConfirmation from "/src/views/ConcoursQuestionConfirmation.vue";
import SondageChoix from "/src/views/SondageChoix.vue";
import SondageChoixResultat from "/src/views/SondageChoixResultat.vue";
import SondageInput from "/src/views/SondageInput.vue";
import SondageInputResultat from "/src/views/SondageInputResultat.vue";
import Utilisateur from "/src/views/Utilisateur.vue";
//import store from "../store";

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
        path: "/ConcoursForm",
        name: "ConcoursForm",
        component: ConcoursForm,
      },
      {
        path: "/ConcoursQuestion",
        name: "ConcoursQuestion",
        component: ConcoursQuestion,
      },
      {
        path: "/ConcoursQuestionConfirmation",
        name: "ConcoursQuestionConfirmation",
        component: ConcoursQuestionConfirmation,
      },
      {
        path: "/Sondage",
        name: "Sondage",
        component: Sondage,
      },
      {
        path: "/SondageChoix",
        name: "SondageChoix",
        component: SondageChoix,
      },
      {
        path: "/SondageChoixResultat",
        name: "SondageChoixResultat",
        component: SondageChoixResultat,
      },
      {
        path: "/SondageInput",
        name: "SondageInput",
        component: SondageInput,
      },
      {
        path: "/SondageInputResultat",
        name: "SondageInputResultat",
        component: SondageInputResultat,
      },
      {
        path: "/ChoixConnexion",
        name: "ChoixConnexion",
        component: ChoixConnexion,
      },
      {
        path: "/Connexion",
        name: "Connexion",
        component: Connexion,
      },
      {
        path: "/Inscription",
        name: "Inscription",
        component: Inscription,
      },
      {
        path: "/ConfirmationInscription",
        name: "ConfirmationInscription",
        component: ConfirmationInscription,
      },
      {
        path: "/Utilisateur",
        name: "Utilisateur",
        component: Utilisateur,
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
