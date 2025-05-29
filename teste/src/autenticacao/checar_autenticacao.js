import {jwtDecode} from 'jwt-decode';
import { refreshToken } from './refreshToken';

export async function checkAuthentication() {
    const token = localStorage.getItem('access');
    let isAuthenticated = false;

    if (!token) {
        isAuthenticated = false;
        return isAuthenticated;
    }

    const decodedToken = jwtDecode(token);
    const tokenExpiration = decodedToken.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration && tokenExpiration < now) {
        try {
            let successRefresh = await refreshToken();
            if (successRefresh) {
                isAuthenticated = true;
            }
        } catch (error) {
            console.error('Failed to refresh token:', error);
            isAuthenticated = false;
        }
    }

    return isAuthenticated;
}