import "../styles/style.css";
import logo from "../images/logo-abaco.png"; 
import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

type Props = {

}

function Navbar({ }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const location = useLocation();
    const curentPath = location.pathname;

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
                        <Link to={'/lista/equipamentos'}><i className="bi bi-list"></i> Lista de Equipamentos</Link>
                        <Link to={'/lista/usuarios'}><i className="bi bi-people-fill"></i> Usuários</Link>
                    </nav>
                ): null}
                <div className="user" id="user-btn" onClick={handleClick}>
                    <i className="bi bi-person-circle"></i> Matheus
                </div>
            </header>

            <div className={isSidebarOpen ? 'side-panel active' : 'side-panel'} id="side-panel">
                <div className="side-panel-content">
                    <h2>Usuário: Matheus</h2>
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