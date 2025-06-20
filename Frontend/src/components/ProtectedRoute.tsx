import React, { useEffect, useState } from 'react';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { Navigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};

function ProtectedRoute({ children }: Props) {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        console.log('Verificando autorização...');
        authenticate().catch(() => setIsAuthorized(false));
    }, []);


    const authenticate = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            setIsAuthorized(false);
            return;
        }

        const decodedToken = jwtDecode(token);
        const tokenExpiration = decodedToken.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration && tokenExpiration < now) {
            console.log('Token expirado, tentando atualizar...');
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    }

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        try {
            console.log('Tentando atualizar o token com:', { refreshToken });
            const response = await api.post('api/token/refresh/', { 
                refresh: refreshToken, 
            });

            if (response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            setIsAuthorized(false);
            console.error('Error refreshing token:', error);
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;