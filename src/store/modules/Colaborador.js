import axios from "axios";

const state = {
	colaboradorCreating: false,
	colaboradores: [
		{
			name: "Jose"
		}
	]
};

const getters = {};

const actions = {
	async colaboradorAdd({ commit }, items) {
		const response = await axios.post(
			"http://127.0.0.1:8001/api/v1/colaborador",
			{ data: items }
		);

		response.data.data.forEach(item => {
			commit("colaboradorNew", item);

			commit.()
		});
	}
};

const mutations = {
	colaboradorNew: (state, item) => {
		state.colaboradores.push(item);
	},
	creatingUpdate: (state, val) => {
		state.creating = val;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
