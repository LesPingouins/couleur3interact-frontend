<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<NavPoll @print-poll="printPoll" />
				<img src="" alt="" />
				<ChoicePollBox :is_predefined=this.poll.is_predefined :poll=this.poll />
				<InputPollBox :is_predefined=this.poll.is_predefined :poll=this.poll />
			</div>
		</div>
	</div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollBox from "../components/sondage/poll/choice/ChoicePollBox.vue";
import InputPollBox from "../components/sondage/poll/input/InputPollBox.vue";
import axios from "axios";

export default {
	components: { NavPoll, ChoicePollBox, InputPollBox },
	data() {
		return {
			poll: 3,
		};
	},
	methods: {

		printPoll(id) {
			axios.get(
				this.$store.state.backendUrl + "/polls/" + id,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
				.then((response) => {
					console.log(response)
					if (response.status === 200) {
						this.poll = response.data[0]
					}
				})
				.catch((error) => {
					console.log(error);
					this.ShowError = true;
					this.errorMgs = error.response.data.error;
				});
		}
	}

};
</script>

<style scoped>
.container-fluid {
	background: linear-gradient(180deg,
			rgba(0, 59, 255, 0.2),
			rgba(0, 254, 255, 0.2));
	padding-bottom: 5%;
}

.row>* {
	padding-right: 0px;
	padding-left: 0px;
}
</style>
