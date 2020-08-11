import Vue from "vue";
import Vuex from "vuex";
import auth from "../app/auth/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth
    }
});
