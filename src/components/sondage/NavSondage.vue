<template>
	<nav class="navbar">
		<div class="navbar-left">
			<button class="nav-arrow" @click="goToPreviousSurvey">
				<span class="material-symbols-outlined"> arrow_circle_left </span>
			</button>
			<span :class="{ 'nav-item': true }">{{ previousSurvey }}</span>
		</div>
		<div class="navbar-center">
			<span :class="{ 'nav-item': true, active: currentSurvey === 1 }"
				>Sondage{{ currentSurvey }}</span
			>
		</div>
		<div class="navbar-right">
			<span :class="{ 'nav-item': true }">{{ nextSurvey }}</span>
			<button class="nav-arrow" @click="goToNextSurvey">
				<span class="material-symbols-outlined"> arrow_circle_right </span>
			</button>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			currentSurvey: 1,
		};
	},
	computed: {
		previousSurvey() {
			return this.currentSurvey > 1 ? `Sondage${this.currentSurvey - 1}` : "";
		},
		nextSurvey() {
			return this.currentSurvey < 3 ? `Sondage${this.currentSurvey + 1}` : "";
		},
	},
	methods: {
		goToPreviousSurvey() {
			if (this.currentSurvey > 1) {
				this.currentSurvey--;
			}
		},
		goToNextSurvey() {
			if (this.currentSurvey < 3) {
				this.currentSurvey++;
			}
		},
	},
};
</script>

<style>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f0f0f0;
	padding: 10px;
}

.nav-item {
	margin: 0 10px;
	cursor: pointer;
}

.nav-arrow {
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
}
</style>
