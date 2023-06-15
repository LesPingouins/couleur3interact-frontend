<template>
  <div class="d-flex justify-content-between navbar align-items-center">
    <div @click="prevItem" class="d-flex">
      <span class="material-symbols-outlined">arrow_circle_left</span>
    </div>
    <div class="item">
      <p id="item1" @click="getAPoll($event)" v-show="this.showItem" :data-index="prevIndex">
        Sondage {{ prevIndex + 1 }}
      </p>
    </div>
    <div class="item active">
      <p id="item2" @click="getAPoll($event)" v-show="this.showActiveItem" :data-index="activeIndex">
        Sondage {{ activeIndex + 1 }}
      </p>
    </div>
    <div class="item">
      <p id="item3" @click="getAPoll($event)" v-show="this.showItem" :data-index="nextIndex">
        Sondage {{ nextIndex + 1 }}
      </p>
    </div>
    <div @click="nextItem" class="d-flex">
      <span class="material-symbols-outlined"> arrow_circle_right </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

export default {
  data() {
    return {
      currentSurvey: 1,
      polls: [],
      activeIndex: 0, // Indice de l'élément actif
      nextIndex: 1,
      prevIndex: null,
      idPoll: null,
      itemsPerPage: 3,
      showItem: true,
      showActiveItem: true,
    };
  },
  methods: {
    getPolls() {
      axios
        .get(this.$store.state.backendUrl + "/polls", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.polls = response.data;
            this.$emit("printPoll", this.polls[0].id);
            this.prevIndex = response.data.length - 1;
            if (response.data.length <= 1) this.showItem = false;
            if (response.data.length == 0) this.showActiveItem = false;
          }
        });
    },
    prevItem() {
      if (this.polls.length >= 3) {
        this.nextIndex =
          (this.nextIndex - 1 + this.polls.length) % this.polls.length;
        this.activeIndex = this.prevIndex;
        this.prevIndex =
          (this.prevIndex - 1 + this.polls.length) % this.polls.length;
      } else if (this.polls.length === 2) {
        if (this.activeIndex === 0) {
          this.nextIndex = 0;
          this.prevIndex = 0;
          this.activeIndex = 1;
        } else {
          this.nextIndex = 1;
          this.prevIndex = 1;
          this.activeIndex = 0;
        }
      }

      // Mettre à jour les index en fonction de l'élément actif
      this.prevIndex =
        (this.activeIndex - 1 + this.polls.length) % this.polls.length;
      this.nextIndex = (this.activeIndex + 1) % this.polls.length;

      this.$emit("printPoll", this.polls[this.prevIndex].id);
    },
    nextItem() {
      if (this.polls.length >= 3) {
        this.prevIndex = this.activeIndex;
        this.activeIndex = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % this.polls.length;
      } else if (this.polls.length === 2) {
        if (this.activeIndex === 1) {
          this.nextIndex = 1;
          this.prevIndex = 1;
          this.activeIndex = 0;
        } else {
          this.nextIndex = 0;
          this.prevIndex = 0;
          this.activeIndex = 1;
        }
      }
      this.prevIndex =
        (this.activeIndex - 1 + this.polls.length) % this.polls.length;
      this.nextIndex = (this.activeIndex + 1) % this.polls.length;

      this.$emit("printPoll", this.polls[this.nextIndex].id);
    },
    getAPoll(event) {
      const clickedIndex = parseInt(event.target.dataset.index);
      this.activeIndex = clickedIndex;
      this.prevIndex =
        (clickedIndex - 1 + this.polls.length) % this.polls.length;
      this.nextIndex = (clickedIndex + 1) % this.polls.length;

      this.$emit("printPoll", this.polls[event.target.dataset.index].id);
    },
    fetchPoll(pollId) {
      axios.get(this.$store.state.backendUrl + "/polls/" + pollId, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
  mounted() {
    this.getPolls();
  },
};
</script>

<style scoped>
.navbar {
  background: var(--white);
  color: var(--black);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 5%;
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25);
  font-family: var(--small-text) !important;
  font-size: 12px;
  margin-bottom: 20px;
}

.active {
  color: var(--blue);
  font-family: var(--big-text) !important;
  font-size: 16px;
  text-decoration: var(--blue) wavy underline;
}

p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.material-symbols-outlined {
  cursor: pointer;
  font-size: 30px;
}

.material-symbols-outlined:hover {
  color: var(--blue);
}

.item {
  cursor: pointer;
}

#item3 {
  margin-left: 50px;
}

#item1 {
  margin-right: 50px;
}
</style>
