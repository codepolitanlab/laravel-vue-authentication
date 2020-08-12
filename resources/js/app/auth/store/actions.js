import { setHttpToken } from "../../../helpers";

export const register = ({dispatch}, {payload, context}) => {
    return axios
        .post("/api/auth/register", payload)
        .then((result) => {
            dispatch("setToken", result.data.meta.token).then(() => {
                dispatch('fetchUser', result.data.data);
            });
        }).catch((err) => {
            context.errors = err.response.data.errors;
        });
}

export const login = ({dispatch}, {payload, context}) => {
    return axios
        .post('/api/auth/login', payload)
        .then((result) => {
            dispatch("setToken", result.data.meta.token).then(() => {
                dispatch('fetchUser', result.data.data);
            });
        }).catch((err) => {
            context.errors = err.response.data.errors;
        });
}

export const setToken = ({commit}, token) => {
    commit("setToken", token);
    setHttpToken(token);
}

export const fetchUser = ({commit}, user) => {
    commit("setAuthenticated", true);
    commit("setUserData", user);
}
