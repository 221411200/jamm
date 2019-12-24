import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import VueWait from "vue-wait";
Vue.use(VueWait); // add VueWait as Vue plugin

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	wait: new VueWait({
		useVuex: true, // You must pass this option `true` to use Vuex
		vuexModuleName: "vuex-example-module" // It's optional, `wait` by default.
	}),
	render: h => h(App)
}).$mount("#app");
