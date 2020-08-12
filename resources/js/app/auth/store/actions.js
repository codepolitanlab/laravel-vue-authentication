export const register = ({dispatch}, {payload, context}) => {
    return axios
        .post("/api/auth/register", payload)
        .then((result) => {
            console.log(result.data);
        }).catch((err) => {
            context.errors = err.response.data.errors;
        });
}

export const login = ({}, {payload, context}) => {
    return axios
        .post('/api/auth/login', payload)
        .then((result) => {
            console.log(result.data);
        }).catch((err) => {
            context.errors = err.response.data.errors;
        });
}
