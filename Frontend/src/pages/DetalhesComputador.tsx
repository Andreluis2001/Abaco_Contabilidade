import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { Form, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesComputadorComponent from "../components/DetalhesComputadorComponent";
import FormaRegistroManutencao from "../components/FormaRegistroManutencao";

type props = {};

function DetalhesComputador({}: props) {

    const [computador, setComputador] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    const url_params = useParams();
    const numeroDePatrimonio = url_params.numero_de_patrimonio ?? "";

    const navigate = useNavigate();

    useEffect(() => {
        if (numeroDePatrimonio) {
            getEquipamentoDetails();
        }
    }, []);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

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
                <button className="btn btn-success" onClick={toggleModal}>Registrar Manutenção</button>
                {isOpen && (
                    <FormaRegistroManutencao />
                )}
            </div>
        </>
    );
}

export default DetalhesComputador;