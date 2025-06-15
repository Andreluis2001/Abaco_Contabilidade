import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesEquipamentoComponent from "../components/DetalhesEquipamentoComponent";

type props = {};

function DetalhesEquipamento({}: props) {

    const [equipamento, setEquipamento] = useState<any>(null);

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
            .get(`api/equipamentos/${numeroDePatrimonio}`)
            .then((response) => {
                setEquipamento(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do equipamento:", error);
            });
    };

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja excluir este equipamento?')) {
            api
                .delete(`api/equipamentos/${numeroDePatrimonio}/`)
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
                <DetalhesEquipamentoComponent equipamento={equipamento}/>
                <div className="action-buttons">
                    <Link  
                        to={`/detalhes/equipamento/editar/${numeroDePatrimonio}`}
                        state={{ equipamento }}
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

export default DetalhesEquipamento;