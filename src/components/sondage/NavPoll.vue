<template>
	<nav class="navbar d-flex justify-content-between">


		<!--
			<span class="material-symbols-outlined" @click="goToPreviousSurvey"> arrow_circle_left </span>
		<div v-for="poll in this.polls" class="d-flex">
			<div class="align-self-center">
				<span :class="{ 'nav-item': true, active: currentSurvey === 1 }">Sondage{{ poll.id }}</span>
			</div>
		</div>


		<div class="d-flex">
			<div class="align-self-center">
				<span :class="{ 'nav-item': true }">{{ previousSurvey }}</span>
			</div>
		</div>
		<div class="d-flex">
			<div class="align-self-center">
				<span :class="{ 'nav-item': true, active: currentSurvey === 1 }">Sondage{{ currentSurvey }}</span>
			</div>
		</div>
		<div class="d-flex">
			<div class="align-self-center">
				<span :class="{ 'nav-item': true }">{{ nextSurvey }}</span>
			</div>
		</div>
		<span class="material-symbols-outlined" @click="goToNextSurvey"> arrow_circle_right </span>
		-->
		<div>
			<div class="nav-bar">
				<button @click="prevItem">Précédent</button>
				<button @click="nextItem">Suivant</button>
			</div>
			<div class="item-container">

				<div class="item">
					<p id="item1" @click="getAPoll($event)" v-show="this.showItem" :data-index=prevIndex>
						Sondage {{ prevIndex + 1 }}</p>
				</div>
				<div class="item active">
					<p id="item2" @click="getAPoll($event)" v-show="this.showActiveItem" :data-index=activeIndex>
						Sondage {{ activeIndex + 1 }}</p>
				</div>
				<div class="item">
					<p id="item3" @click="getAPoll($event)" v-show="this.showItem" :data-index=nextIndex>
						Sondage {{ nextIndex + 1 }}</p>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import axios from "axios";

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

export default {
	data() {
		return {
			currentSurvey: 1,
			polls: [],
			activeIndex: 0, // Indice de l'élément actif
			nextIndex: 1,
			prevIndex: null,
			idPoll: null,
			itemsPerPage: 3,
			showItem: true,
			showActiveItem: true,
		};
	},
	methods: {
		getPolls() {
			axios.get(
				this.$store.state.backendUrl + "/polls",
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
				.then((response) => {
					console.log(response.data);
					if (response.status === 200) {
						this.polls = response.data;
						this.prevIndex = response.data.length - 1;
						if (response.data.length <= 1) this.showItem = false;
						if (response.data.length == 0) this.showActiveItem = false;
					}
				})
				.catch((error) => {
					console.log(error);
					this.ShowError = true;
					this.errorMgs = error.response.data.error;
				});
		},
		prevItem() {

			console.log(test);
			console.log(this.activeIndex);
		},
		nextItem() {
			console.log(this.prevIndex + "-" + this.activeIndex + "-" + this.nextIndex);
			console.log(this.polls.length);
			if (this.polls.length >= 3) {
				if (this.activeIndex === this.polls.length - 1) {
					this.nextIndex = this.nextIndex + 1;
					this.prevIndex = this.activeIndex;
					this.activeIndex = 0;
					console.log("e1")
				} else if (this.nextIndex === this.polls.length - 1) {
					this.prevIndex = this.activeIndex;
					this.activeIndex = this.nextIndex;
					this.nextIndex = 0;
					console.log("e2")

				} else if (this.prevIndex === this.polls.length - 1) {
					this.activeIndex = this.nextIndex;
					this.nextIndex = this.nextIndex + 1;
					this.prevIndex = 0;
					console.log("e3")
				}
				else {
					this.nextIndex++;
					this.activeIndex++;
					this.prevIndex++;
					console.log("e4")
				}
			} else if (this.polls.length === 2) {
				if (this.activeIndex === 1) {
					this.nextIndex = 1;
					this.prevIndex = 1;
					this.activeIndex = 0;
				} else {
					this.nextIndex = 0;
					this.prevIndex = 0;
					this.activeIndex = 1;
				}
			}
		},
		getAPoll(event) {
			this.$emit('printPoll', this.polls[event.target.dataset.index].id)
		}
	},
	mounted() {
		this.getPolls();
	}
};
</script>

<style scoped>
.navbar {
	background-color: #FFFFFF;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 2%;
	padding-bottom: 2%;
	box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.25);
}

.material-symbols-outlined {
	border-radius: 99px;
	cursor: pointer;
}

.material-symbols-outlined:hover {
	color: var(--blue);
}

.nav-item {
	cursor: pointer;
}

.nav-arrow {
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
}

.material-symbols-outlined:first-child {
	padding-right: 20px;
}

.material-symbols-outlined:last-child {
	padding-left: 20px;
}

.nav-bar {
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
}

.item-container {
	display: flex;
	justify-content: space-between;
	overflow-x: scroll;
	scroll-behavior: smooth;
	padding-bottom: 10px;
	scrollbar-width: none;
	/* Supprime la barre de défilement */
	-ms-overflow-style: none;
	/* Supprime la barre de défilement (IE and Edge) */
}

.item-container::-webkit-scrollbar {
	display: none;
	/* Supprime la barre de défilement (Chrome, Safari, Opera) */
}

.item {
	flex: 0 0 calc(100% / 3);
	padding: 10px;
}
</style>
