<template>
	<div class="toggle-switch-container">
		<div class="switch-container">
			<p>{{ text }}</p>
			<label class="switch">
				<input type="checkbox" v-model="isChecked" @click="toggleSwitch" />
				<span class="slider round"></span>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "ToggleUser",
	data() {
		return { isChecked: false };
	},
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	methods: {
		toggleSwitch() {
			this.isChecked = !this.isChecked;
			console.log(this.isChecked);
			return this.isChecked;
		},
	},
};
</script>

<style scoped>
.toggle-switch-container {
	display: flex;
	align-items: center;
}

.switch-container {
	display: flex;
	align-items: center;
}

.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: white;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: orangered;
}

input:focus + .slider {
	box-shadow: 0 0 1px orangered;
}

input:checked + .slider:before {
	transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
