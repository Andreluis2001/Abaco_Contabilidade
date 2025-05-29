import api from '../api.js';

export async function refreshToken(){

    let refreshed = false;

    try {
        const response = await api.post('token/refresh', {
            refresh: localStorage.getItem('refresh')
        });
        if (response.status == 200){
            localStorage.setItem('access', response.data.access);
            refreshed = true;
        }
    } catch (error) {
        console.error('Refresh token error:', error);
        throw error;
    }

    return refreshed;
}