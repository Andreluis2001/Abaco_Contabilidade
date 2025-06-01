import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

type Props = {};

function LoginForm({}: Props) {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log('Tentando fazer login com:', { username, password });
            const response = await api.post('api/token/', {username, password});
            if (response.status === 200) {
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                console.log('Login bem-sucedido:', response.data);
                navigate('/');
            } else {
                alert('Login falhou. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label-input">
                <i className="fa-regular fa-envelope login-icon-modify"></i>
                <input 
                type="text" 
                placeholder="E-mail" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <label className="login-label-input">
                <i className="fa-solid fa-lock login-icon-modify"></i>
                <input 
                type="password" 
                placeholder="Senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit" className="login-btn login-btn-second" id="btn-entrar">Entrar</button>
        </form>
    )
}

export default LoginForm;