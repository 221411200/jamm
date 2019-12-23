<template>
	<v-row>
		<v-col cols="12">
			<h1>Nuevo colaborador</h1>
		</v-col>

		<v-col cols="12">
			<template>
				<v-stepper v-model="e1">
					<v-stepper-header>
						<v-stepper-step :complete="e1 > 1" step="1"
							>Datos generales</v-stepper-step
						>

						<v-divider></v-divider>

						<v-stepper-step :complete="e1 > 2" step="2"
							>Actividades / Roles</v-stepper-step
						>

						<v-divider></v-divider>

						<v-stepper-step step="3">IDSE</v-stepper-step>
					</v-stepper-header>

					<v-stepper-items>
						<v-stepper-content step="1">
							<template>
								<v-stepper v-model="e6" vertical>
									<v-stepper-step :complete="e6 > 1" step="1">
										Información personal
										<small
											>Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Quibusdam.</small
										>
									</v-stepper-step>

									<v-stepper-content step="1">
										<v-card color="lighten-1" class="pa-2">
											<!-- Informacion personal del colaborador -->
											<ColaboradorInformacionPersonal></ColaboradorInformacionPersonal>
										</v-card>
										<!-- <v-btn color="primary" @click="e6 = 2"
											>Continue</v-btn
										>
										<v-btn text>Cancel</v-btn> -->
									</v-stepper-content>

									<v-stepper-step :complete="e6 > 2" step="2"
										>Dirección
										<small
											>Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Id?</small
										>
									</v-stepper-step>

									<v-stepper-content step="2">
										<v-card color="lighten-1" class="mb-12">
											<v-form class="pa-5">
												<v-row>
													<v-col
														cols="4"
														xs="12"
														md="4"
														class="d-flex justify-center align-center"
													>
														<v-select
															v-model="select"
															:items="estados"
															:rules="[
																v =>
																	!!v ||
																	'Campo requirido'
															]"
															label="Estado"
															outlined
															required
														></v-select>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="4"
														class="d-flex justify-center align-center"
													>
														<v-select
															v-model="select"
															:items="items"
															:rules="[
																v =>
																	!!v ||
																	'Campo requirido'
															]"
															label="Municipio"
															outlined
															required
														></v-select>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="4"
														class="d-flex justify-center align-center"
													>
														<v-select
															v-model="select"
															:items="items"
															:rules="[
																v =>
																	!!v ||
																	'Campo requirido'
															]"
															label="Localidad"
															outlined
															required
														></v-select>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="6"
													>
														<v-text-field
															label="Calle"
															outlined
														></v-text-field>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="2"
													>
														<v-text-field
															label="Número exterior"
															outlined
														></v-text-field>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="2"
													>
														<v-text-field
															label="Número interior"
															outlined
														></v-text-field>
													</v-col>

													<v-col
														cols="4"
														xs="12"
														md="2"
													>
														<v-text-field
															label="Código postal"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
											</v-form>
										</v-card>
										<!-- <v-btn color="primary" @click="e6 = 3"
											>Continue</v-btn
										>
										<v-btn text>Cancel</v-btn> -->
									</v-stepper-content>

									<v-stepper-step :complete="e6 > 3" step="3"
										>Contactos
										<small
											>Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Molestias.</small
										>
									</v-stepper-step>

									<v-stepper-content step="3">
										<v-card color="lighten-1" class="mb-12">
											<v-form class="pa-5">
												<v-row>
													<v-col cols="12">
														<template>
															<v-simple-table
																height="300px"
															>
																<template
																	v-slot:default
																>
																	<thead>
																		<tr>
																			<th
																				class="text-left"
																			>
																				Name
																			</th>
																			<th
																				class="text-left"
																			>
																				Parentesco
																			</th>
																			<th
																				class="text-left"
																			>
																				Teléfono
																			</th>
																			<th
																				class="text-left"
																			>
																				Dirección
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<v-text-field
																					small
																					label="Nombre completo"
																					outlined
																					:value="
																						formContact.name
																					"
																					required
																				></v-text-field>
																			</td>
																			<td>
																				<v-text-field
																					small
																					label="Parentesco"
																					outlined
																					:value="
																						formContact.parentesco
																					"
																				></v-text-field>
																			</td>
																			<td>
																				<v-text-field
																					small
																					label="Teléfono"
																					outlined
																					:value="
																						formContact.telefono
																					"
																				></v-text-field>
																			</td>
																			<td>
																				<v-text-field
																					small
																					label="Dirección"
																					outlined
																					:value="
																						formContact.direccion
																					"
																				></v-text-field>
																			</td>
																			<td
																				class="d-flex justify-center align-center"
																			>
																				<v-btn
																					class="ma-2"
																					outlined
																					small
																					fab
																					color="indigo"
																					@click="
																						contactAdd
																					"
																				>
																					<v-icon
																						>mdi-plus</v-icon
																					>
																				</v-btn>
																			</td>
																		</tr>

																		<tr
																			v-for="(contact,
																			index,
																			key) in contacts"
																		>
																			<td>
																				{{
																					key
																				}}
																			</td>
																			<td>
																				<v-text-field
																					small
																					label="Dirección"
																					outlined
																					value="contact.name"
																				></v-text-field>
																			</td>
																			<td>
																				{{
																					contact.parentesco
																				}}
																			</td>
																			<td>
																				{{
																					contact.telefono
																				}}
																			</td>
																			<td>
																				{{
																					contact.direccion
																				}}
																			</td>
																			<td>
																				<v-btn
																					class="ma-2"
																					outlined
																					small
																					fab
																					color="danger"
																					@click="
																						contactRemove(
																							index
																						)
																					"
																				>
																					<v-icon
																						>mdi-minus</v-icon
																					>
																				</v-btn>
																			</td>
																		</tr>
																	</tbody>
																</template>
															</v-simple-table>
														</template>
													</v-col>
												</v-row>
											</v-form>
										</v-card>
										<!-- <v-btn color="primary" @click="e6 = 4"
											>Continue</v-btn
										>
										<v-btn text>Cancel</v-btn> -->
									</v-stepper-content>
								</v-stepper>
							</template>

							<!-- 							<v-btn color="primary" @click="e1 = 2">
								Continue
							</v-btn>

							<v-btn text>Cancel</v-btn> -->
						</v-stepper-content>
					</v-stepper-items>
				</v-stepper>
			</template>
		</v-col>
	</v-row>
</template>

<script>
import ColaboradorInformacionPersonal from "@/components/Colaborador/ColaboradorInformacionPersonal.vue";
export default {
	components: {
		ColaboradorInformacionPersonal
	},
	data() {
		return {
			e1: 0,
			e6: 1,
			formContact: {
				name: "test",
				parentesco: "test",
				telefono: "test",
				direccion: "test"
			},
			contacts: [],
			estados: []
		};
	},
	methods: {
		contactAdd() {
			this.contacts.push(this.formContact);
		},
		contactRemove(index) {
			this.contacts.splice(index, 1);
		}
	}
};
</script>

<style lang="css" scoped>
div {
	background-color: transparent !important;
	outline: 0;
	border: 0;
	box-shadow: none;
}
</style>
