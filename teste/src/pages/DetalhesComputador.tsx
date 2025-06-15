import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesComputadorComponent from "../components/DetalhesComputadorComponent";

type props = {};

function DetalhesComputador({}: props) {

    const [computador, setComputador] = useState<any>(null);

    const url_params = useParams();
    const numeroDePatrimonio = url_params.numero_de_patrimonio ?? "";

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
                        <div className="btn-edit">
                            <i className="bi bi-pencil-square"></i> Editar Equipamento
                        </div>
                    </Link>
                    <button className="btn-delete">
                        <i className="bi bi-trash"></i> Excluir Equipamento
                    </button>
                </div>
            </div>
        </>
    );
}

export default DetalhesComputador;