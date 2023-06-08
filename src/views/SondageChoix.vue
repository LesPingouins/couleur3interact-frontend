<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<NavPoll />
				<ChoicePollBox />
			</div>
		</div>
	</div>
</template>

<script>
import NavPoll from "../components/sondage/NavPoll.vue";
import ChoicePollBox from "../components/sondage/poll/choice/ChoicePollBox.vue";

export default {
	components: { NavPoll, ChoicePollBox },
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
