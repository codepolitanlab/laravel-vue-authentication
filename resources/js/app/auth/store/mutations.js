import { isEmpty } from 'lodash';

export const setToken = (state, token) => {
    if (isEmpty(token)) {
        localStorage.removeItem('access_token');
        return;
    }
    localStorage.setItem('access_token', token);
}

export const setAuthenticated = (state, trueOrFalse) => {
    state.user.authenticated = trueOrFalse;
}

export const setUserData = (state, data) => {
    state.user.data = data;
}
