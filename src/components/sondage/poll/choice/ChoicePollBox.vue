<template>
  <div v-if="is_predefined" class="col-12">
    <div class="container-fluid">
      <div id="pollBox row">
        <QuestionText :texte="poll.question" />
        <div class="choixSondage row d-flex justify-content-between">
          <div v-for="(answer, index) in answers" class="active col-6">
            <ChoicePoll
              :key="index"
              @click="selectThis(index)"
              :class="{
                active: index === activeItem,
                blurry: index !== activeItem && this.activeItem !== null,
              }"
              :buttonText="answer.name_of"
              class="col-12 choix"
              backgroundImage="src/assets/images/sondage/TextButtonFixed-1.svg"
            />
          </div>
        </div>
        <ButtonChoice
          :background-color="this.color"
          :isItemsEnabled="this.isActive"
          :class="{ 'active-button': this.activeItem !== null }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonChoice from "../../ButtonChoice.vue";
import ButtonPoll from "../../ButtonPoll.vue";
import QuestionText from "../../QuestionText.vue";
import ChoicePoll from "../../ChoicePoll.vue";
import axios from "axios";

export default {
  name: "PollBox",
  components: { ButtonChoice, ButtonPoll, QuestionText, ChoicePoll },
  props: {
    is_predefined: {
      type: Boolean,
    },
    poll: {
      type: Object,
      default: "",
    },
  },
  data() {
    return {
      answers: [],
      isActive: false,
      activeItem: null,
      color: "grey",
    };
  },
  methods: {
    getChoicesFromAPoll() {
      axios
        .get(
          this.$store.state.backendUrl + "/polls/" + this.poll.id + "/answers",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.answers = response.data;
          }
        });
    },
    selectThis(index) {
      this.isActive = true;
      this.color = "var(--blue-gradient)";
      this.activeItem = index;
    },
  },
  watch: {
    poll: function () {
      this.getChoicesFromAPoll();
    },
  },
};
</script>

<style scoped>
.col-12 {
  padding-left: 5%;
  padding-right: 5%;
}

.choixSondage {
  margin-bottom: 20px;
}

.choix {
  transition: all 0.3s ease;
  margin: 2.5%;
  width: 95%;
}

.choix:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.active {
  filter: blur(0px);
}

.blurry {
  filter: blur(2px);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
}
</style>
