import Vue from "vue";
import VueRouter from "vue-router";
import beforeEach from "./beforeEach";

import auth from "../app/auth/router";
import home from "../app/home/router";
import dashboard from "../app/dashboard/router";

const routes = [...auth, ...home, ...dashboard];

console.log(routes);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach(beforeEach);

export default router;
