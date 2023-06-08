<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<UserBox />
			</div>
		</div>
	</div>
</template>

<script>
import UserBox from "../components/chat/user/UserBox.vue";
export default {
	components: { UserBox },
};
</script>

<style scoped>
.container-fluid {
	background: linear-gradient(
		180deg,
		rgba(255, 92, 0, 1),
		rgba(255, 159, 129, 1)
	);
	padding-bottom: 5%;
	padding-top: 5%;
}
.row > * {
	padding-right: 0px;
	padding-left: 0px;
}
</style>
