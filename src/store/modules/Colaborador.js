import axios from "axios";

const state = {
	colaboradores: [
		{
			name: "Jose"
		}
	]
};

const getters = {};

const actions = {
	async colaboradorStore({ commit }, items) {
		const response = await axios.post(
			"http://127.0.0.1:8001/api/v1/colaborador",
			{ data: items }
		);

		response.data.data.forEach(item => {
			commit("colaboradorAdd", item);
		});
	}
};

const mutations = {
	colaboradorAdd: (state, item) => {
		state.colaboradores.push(item);
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
