<template>
  <div v-if="this.isPopupShow" class="popup">
    <div class="header" @click="togglePopup">
      <div class="d-flex time">
        <span class="material-symbols-outlined"> hourglass_empty </span>
        <p>{{ this.counter }} {{ label }}</p>
        <i :class="chevronClass"></i>
      </div>
      <TitleChat :text=event.question />
      <div class="content" :class="{ expanded: isExpanded }">
        <TextChat :text="this.event.type_id === 1 ? 'Sondage' : 'Concours'" />
        <ButtonPopup class="annuler" buttonText="Non merci" />
        <ButtonPopup class="valider" @click="goTo()" buttonText="Je participe" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleChat from "./TitleChat.vue";
import TextChat from "./TextChat.vue";
import ButtonPopup from "./ButtonPopup.vue";
import router from "../../router";
import axios from "axios";


export default {
  name: "Popup",
  components: { TitleChat, TextChat, ButtonPopup },
  data() {
    return {
      counter: "",
      label: "",
      isExpanded: false,
      interval: null,
      isPopupShow: true,
    };
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
    timeLeft: {
      type: Number,
      required: true,
    },
  },
  computed: {
    chevronClass() {
      return this.isExpanded ? "fa fa-chevron-up" : "fa fa-chevron-down";
    },
  },
  methods: {
    togglePopup() {
      this.isExpanded = !this.isExpanded;
    },
    setTimer() {
      let date2 = new Date(this.event.created_at);
      date2.setSeconds(date2.getSeconds() + this.event.duration)

      let date1 = new Date();

      let distance = (date2.getTime() - date1.getTime());

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (seconds !== 0) {
        this.counter = seconds;
        this.label = " secondes restantes"
      }
      if (minutes !== 0) {
        this.counter = minutes;
        this.label = " minutes restantes"
      }
      if (hours !== 0) {
        this.counter = hours;
        this.label = " heures restantes"
      }
      if (days !== 0) {
        this.counter = days;
        this.label = " jours restants"
      }

      if (date1 > date2) {
        this.counter = ""
        this.label = "Expiré"
        this.isPopupShow = false;

        axios
          .post(import.meta.env.VITE_BACKEND_URL + "/polls/" + this.event.id + "/inactive")
          .then(function (response) {
            if (response.status === 200) {
              console.log(response)
            }
          })

        this.stopInterval(this.interval);
      }
    },
    goTo() {
      router.push("Sondage/?id=" + this.event.id)
    },
    stopInterval(id) {
      clearInterval(id)
    }
  },
  mounted() {
    this.interval = setInterval(() => { this.setTimer() }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  color: var(--red);
}

i {
  color: var(--red);
  margin-left: 5px;
  font-size: 20px;
  /* cursor: pointer; */
}

.header {
  padding: 20px;
  border: 4px solid var(--red);
  border-radius: 20px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
}

.content {
  display: none;
  transition: max-height 0.8s ease;
  overflow: hidden;
  max-height: 0;
}

.content.expanded {
  display: block;
  max-height: 500px;

  /* Adjust the max-height value as needed */
}

p {
  font-family: var(--medium-text) !important;
}

.annuler {
  width: 47.5%;
  background: var(--white) !important;
  border: 3px solid var(--black) !important;
  color: var(--red) !important;
  font-family: var(--big-text) !important;
  margin-right: 2.5%;
}

.annuler:hover {
  color: var(--white) !important;
  background: var(--red-gradient) !important;
}

.valider {
  width: 47.5%;
  background: var(--black) !important;
  border: 3px solid var(--black) !important;
  color: var(--white) !important;
  margin-left: 2.5%;
}

.valider:hover {
  color: var(--black) !important;
  background: var(--white) !important;
}
</style>
