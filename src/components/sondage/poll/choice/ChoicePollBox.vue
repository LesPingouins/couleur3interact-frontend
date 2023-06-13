<template >
	<div v-if="is_predefined" class="col-12">
		<div class="container-fluid">
			<div id="pollBox row">
				<QuestionText :texte=poll.question />
				<div class="choixSondage row d-flex justify-content-between">
					<div v-for="(answer, index) in answers" class="active choix col-6 mt-2">
						<ChoicePoll :buttonText="answer.name_of" class="col-12"
							backgroundImage="src/assets/images/sondage/TextButtonFixed-1.svg" />
					</div>


				</div>
				<ButtonChoice />
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
		}
	},
	data() {
		return {
			answers: [],

		};
	},
	methods: {
		getChoicesFromAPoll() {
			axios.get(
				this.$store.state.backendUrl + "/polls/" + this.poll.id + "/answers",
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((response) => {
				if (response.status === 200) {
					this.answers = response.data
				}
			}).catch((error) => {
				console.log(error);
				this.ShowError = true;
				this.errorMgs = error.response.data.error;
			});
		}
	},
	watch: {
		poll: function () {
			console.log("test");
			this.getChoicesFromAPoll();
		}

	}

};
</script>

<style scoped>
.container-fluid {
	padding-left: 5%;
	padding-right: 5%;
}

.choixSondage {
	margin-bottom: 20px;
}

.choix {
	transition: all 0.3s ease;
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
