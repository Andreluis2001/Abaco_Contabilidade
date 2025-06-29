import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import api from '../api';
import { Navigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
}

function AdminOnlyRoute({children}: Props) {

    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        getCurrentUser().catch(() => setIsAdmin(false));
    }, []);

    const getCurrentUser_id = async (): Promise<number | null> => {
        const token = localStorage.getItem('access');

        if (token) {
            try {
                const decodedToken: any = jwtDecode(token);
                setUserId(decodedToken.user_id);
                return decodedToken.user_id;
            } catch (error) {
                console.error("Erro ao decodificar o token:", error);
                return null;
            }
        } else {
            console.error("Token não encontrado no localStorage.");
            return null;
        }
    }

    const getCurrentUser = async () => {
        const id = await getCurrentUser_id();
        let cargo: string | null = null;
        if (id !== null) {
            api.get(`api/usuarios/${id}`)
                .then((response) => {
                    cargo = response.data.role;
                    if (cargo === 'admin') {
                        setIsAdmin(true);
                    }
                    else {
                        setIsAdmin(false);
                    }
                }
            );
        }
    };

    return isAdmin ? children : <Navigate to="/" />;
}

export default AdminOnlyRoute;