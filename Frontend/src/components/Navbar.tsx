import "../styles/style.css";
import logo from "../images/logo-abaco.png"; 
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import api from "../api";
import { jwtDecode } from "jwt-decode";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user_id, setUserId] = useState<number | null>(null);
    const [userName, setUserName] = useState<string | null>(null);

    const location = useLocation();
    const curentPath = location.pathname;

    useEffect(() => {
        getCurrentUser();
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
        if (id !== null) {
            api
                .get(`api/usuarios/${id}`)
                .then((response) => {
                    setUserName(response.data.username);
                });
        }
    };

    const handleClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const logOut = () => {
        localStorage.clear();
        return <Navigate to="/login" />;
    }

    return (
        <>        
            <header className="topbar">
                <div className="topbar-left">
                    <Link to="/">
                        <img src={logo} alt="Logo Ábaco" className="logo-navbar" />
                    </Link>
                </div>
                { curentPath !== '/' ? (
                    <nav>
                        <Link to={'/'}><i className="bi bi-house-fill"></i> Início</Link>
                        <Link to={'/lista/equipamentos'}><i className="bi bi-list"></i> Lista de Equipamentos</Link>
                        <Link to={'/lista/usuarios'}><i className="bi bi-people-fill"></i> Usuários</Link>
                        <Link to={'/gerar-relatorio'}><i className="bi bi-file-earmark-text"></i> Gerar Relatórios</Link>
                    </nav>
                ): null}
                <div className="user" id="user-btn" onClick={handleClick}>
                    <i className="bi bi-person-circle"></i> {userName}
                </div>
            </header>

            <div className={isSidebarOpen ? 'side-panel active' : 'side-panel'} id="side-panel">
                <div className="side-panel-content">
                    <h2>Usuário: {userName}</h2>
                    <button id="disconnect-btn" onClick={logOut}>
                    <i className="bi bi-person-circle"></i>
                    <Link to="/login">Desconectar</Link>
                    <i className="bi bi-box-arrow-in-right"></i>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Navbar;