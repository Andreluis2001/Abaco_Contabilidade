import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesComputadorComponent from "../components/DetalhesComputadorComponent";

type props = {};

function DetalhesComputador({}: props) {

    const [computador, setComputador] = useState<any>(null);

    const url_params = useParams();
    const numeroDePatrimonio = url_params.numero_de_patrimonio ?? "";

    const navigate = useNavigate();

    useEffect(() => {
        if (numeroDePatrimonio) {
            getEquipamentoDetails();
        }
    }, []);

    const getEquipamentoDetails = async () => {
        api
            .get(`api/computadores/${numeroDePatrimonio}`)
            .then((response) => {
                setComputador(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do equipamento:", error);
            });
    };

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja excluir este equipamento?')) {
            api
                .delete(`api/computadores/${numeroDePatrimonio}/`)
                .then((response) => {
                    if (response.status !== 204) {
                        throw new Error('Erro ao excluir equipamento');
                    }
                    alert('Equipamento excluído com sucesso!');
                    navigate('/lista/equipamentos');
                })
                .catch(error => {
                    console.error('Erro ao excluir equipamento:', error);
                });
        }
    }

    return (
        <>
            <Navbar />
            <div className="equipment-detail">
                <DetalhesComputadorComponent computador={computador}/>
                <div className="action-buttons">
                    <button className="btn-delete" onClick={() => navigate(-1)}>
                        <i className="bi bi-arrow-left"></i> Voltar
                    </button>
                    <Link  
                        to={`/detalhes/computador/editar/${numeroDePatrimonio}`}
                        state={{ computador }}
                        >
                        <button className="btn-edit">
                            <i className="bi bi-pencil-square"></i> Editar Equipamento
                        </button>
                    </Link>
                    <button className="btn-delete" onClick={handleDelete}>
                        <i className="bi bi-trash"></i> Excluir Equipamento
                    </button>
                </div>
            </div>
        </>
    );
}

export default DetalhesComputador;