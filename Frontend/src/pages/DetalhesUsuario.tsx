import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesUsuarioComponent from "../components/DetalhesUsuarioComponent";

type Props = {};

function DetalhesUsuario({}: Props) {
    const [usuario, setUsuario] = useState<any>(null);

    const url_params = useParams();
    const usuarioId = url_params.id ?? "";

    const navigate = useNavigate();

    useEffect(() => {
        if (usuarioId) {
            getUsuarioDetails();
        }
    }, []);

    const getUsuarioDetails = async () => {
        api
            .get(`api/usuarios/${usuarioId}`)
            .then((response) => {
                setUsuario(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do usuário:", error);
            });
    };

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
            api
                .delete(`api/usuarios/${usuarioId}/`)
                .then((response) => {
                    if (response.status !== 204) {
                        throw new Error('Erro ao excluir usuário');
                    }
                    alert('Usuário excluído com sucesso!');
                    navigate('/lista/usuarios');
                })
                .catch(error => {
                    console.error('Erro ao excluir usuário:', error);
                });
        }
    }

    return (
        <>
            <Navbar />
            <div className="equipment-detail">
                <DetalhesUsuarioComponent usuario={usuario} />
                <div className="action-buttons">
                    <Link  
                        to={`/detalhes/usuario/editar/${usuarioId}`}
                        state={{ usuario }}
                    >
                        <button className="btn-edit">
                            <i className="bi bi-pencil-square"></i> Editar Usuário
                        </button>
                    </Link>
                    <button className="btn-delete" onClick={handleDelete}>
                        <i className="bi bi-trash"></i> Excluir Usuário
                    </button>
                </div>
            </div>
        </>
    );
}

export default DetalhesUsuario;