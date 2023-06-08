<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<NavPoll />
				<ChoicePollResultBox />
			</div>
		</div>
	</div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollResultBox from "../components/sondage/poll/choice/ChoicePollResultBox.vue";

export default {
	components: { NavPoll, ChoicePollResultBox },
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
