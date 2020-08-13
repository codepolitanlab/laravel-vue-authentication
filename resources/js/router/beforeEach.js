import store from "../store";

const beforeEach = (to, from, next) => {
    store.dispatch("auth/checkTokenExists")
        .then(() => {
            if (to.meta.guest) {
                next({ name: "home" })
                return;
            }
            next();
        }).catch(() => {
            if (to.meta.authenticated) {
                next({ name: "login" })
                return;
            }
            next();
        });
}

export default beforeEach;
