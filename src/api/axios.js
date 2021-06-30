import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://agendame-mirage-js/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

const postLogin = params => {
    return instance.post(`/login`,
    params);
};
const postSignUp = params => {
    return instance.post(`/sign-up`,
    params);
};

export { postLogin, postSignUp }