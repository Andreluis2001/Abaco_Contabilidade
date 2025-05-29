import api from '../api.js';

export async function login(username, password) {

    let loggedIn = false;

    try {
        const response = await api.post('token', {
            username: username,
            password: password
        });
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        loggedIn = true;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }

    return loggedIn;
}