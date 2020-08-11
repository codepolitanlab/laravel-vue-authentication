import Vue from "vue";
import VueRouter from "vue-router";

import auth from "../app/auth/router";
import home from "../app/home/router";

const routes = [...auth, ...home];

console.log(routes);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
