<template>
	<div class="container min-h-content py-5 text-center">
		<div class="row py-lg-5">
			<div class="col">
				<NavSondage />

				<SondageBox />
			</div>
		</div>
	</div>
</template>

<script>
import NavSondage from "../components/sondage/NavSondage.vue";
import SondageBox from "../components/sondage/SondageBox.vue";

export default {
	components: { NavSondage, SondageBox },
};
</script>

<style scoped></style>
