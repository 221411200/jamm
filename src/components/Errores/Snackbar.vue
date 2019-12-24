<template>
	<div class="text-center ma-2">
		<!-- <v-btn dark @click="snackbar = true">Open Snackbar</v-btn> -->
		<v-snackbar
			v-model="snackbar"
			bottom
			left
			:timeout="timeout"
			vertical="true"
		>
			{{ text }}
			<v-btn color="pink" text @click="snackbar = true">
				Cerrar
			</v-btn>
		</v-snackbar>
	</div>
</template>

<script>
export default {
	data: () => ({
		snackbar: false,
		timeout: 0,
		text:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur labore earum iste enim odio. Officiis ex atque voluptates necessitatibus itaque inventore quod, numquam quis dolorem repellendus minima enim fugit cumque!"
	})
};
</script>

<style lang="css" scoped></style>
