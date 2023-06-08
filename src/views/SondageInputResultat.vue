<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<NavPoll />
				<InputPollResultBox />
			</div>
		</div>
	</div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import InputPollResultBox from "../components/sondage/poll/input/InputPollResultBox.vue";

export default {
	components: { NavPoll, InputPollResultBox },
};
</script>

<style scoped>
.container-fluid {
	background: linear-gradient(
		180deg,
		rgba(0, 59, 255, 0.2),
		rgba(0, 254, 255, 0.2)
	);
	padding-bottom: 5%;
}
.row > * {
	padding-right: 0px;
	padding-left: 0px;
}
</style>
