<template>
	<v-form ref="form" v-model="valid" lazy-validation @submit:prevent>
		<v-row>
			<v-col cols="4" xs="12" md="4">
				<v-text-field
					label="Nombres"
					outlined
					v-model="colaborador.nombre"
					required
					:disabled="disabled"
					:counter="25"
					:rules="reglas.nombre"
				></v-text-field>
			</v-col>

			<v-col cols="4" xs="12" md="4">
				<v-text-field
					label="Apellido materno"
					:disabled="disabled"
					outlined
					v-model="colaborador.apellido_materno"
				></v-text-field>
			</v-col>

			<v-col cols="4" xs="12" md="4">
				<v-text-field
					label="Apellido paterno"
					:disabled="disabled"
					outlined
					v-model="colaborador.apellido_paterno"
				></v-text-field>
			</v-col>

			<v-col cols="4" xs="12" md="4">
				<v-text-field
					label="Fecha de nacimiento"
					:disabled="disabled"
					outlined
					v-model="colaborador.fecha_nacimiento"
				></v-text-field>
			</v-col>

			<v-col cols="4" xs="12" md="4">
				<v-text-field
					label="CURP"
					:disabled="disabled"
					outlined
					v-model="colaborador.curp"
				></v-text-field>
			</v-col>

			<v-col
				cols="4"
				xs="12"
				md="4"
				class="d-flex justify-center align-center"
			>
				<v-radio label="Masculino" value="1"></v-radio>
				<v-radio label="Femenino" value="2"></v-radio>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" class="d-flex justify-end">
				<v-btn color="primary" outlined @click="submit()">Salvar</v-btn>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
// VUEX
import { mapActions } from "vuex";

import { mapWaitingActions } from "vue-wait";

export default {
	name: "ColaboradorInformacionPersonal",

	data() {
		return {
			valid: true,
			disabled: false,
			request: {
				method: "POST",
				url: "http://127.0.0.1:8001/api/v1/colaborador"
			},
			colaborador: {
				nombre: "Test",
				apellido_materno: "Test",
				apellido_paterno: "Test",
				fecha_nacimiento: "1996-10-01",
				curp: "Test",
				sexo: "Test"
			},
			reglas: {
				nombre: [
					v => !!v || "campo requerido.",
					v => (v && v.length <= 25) || "Maximo 25 caracteres."
				]
			}
		};
	},
	methods: {
		...mapActions(["colaboradorStore"]),
		// ...mapWaitingActions("colaborador", {
		// 	colaboradorStore: "colaborador store"
		// }),
		submit: function() {
			if (this.$refs.form.validate()) {
				this.colaboradorStore([this.colaborador]);
			}
		},
		validate() {
			return this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		}
	},
	computed() {}
};
</script>

<style lang="css" scoped></style>
