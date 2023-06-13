<template>
  <div class="popup">
    <div class="header" @click="togglePopup">
      <div class="d-flex time">
        <span class="material-symbols-outlined"> hourglass_empty </span>
        <p>{{ timeLeft }} secondes restantes</p>
        <i :class="chevronClass"></i>
      </div>
      <TitleChat text="Quel est votre style de musique favori ?" />
      <div class="content" :class="{ expanded: isExpanded }">
        <TextChat text="SONDAGE" />
        <ButtonPopup class="annuler" buttonText="Non merci" />
        <ButtonPopup class="valider" buttonText="Je participe" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleChat from "./TitleChat.vue";
import TextChat from "./TextChat.vue";
import ButtonPopup from "./ButtonPopup.vue";

export default {
  name: "Popup",

  components: { TitleChat, TextChat, ButtonPopup },

  data() {
    return {
      isExpanded: false,
    };
  },
  props: {
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
