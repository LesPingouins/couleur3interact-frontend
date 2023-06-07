<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<NavSondage />
				<img src="" alt="">
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

<style scoped>
.container-fluid{
background: linear-gradient(180deg, rgba(0, 59, 255, 0.2), rgba(0, 254, 255, 0.2));
padding-bottom: 5%;
}
.row>*{
	padding-right: 0px;
	padding-left: 0px;
}
</style>
