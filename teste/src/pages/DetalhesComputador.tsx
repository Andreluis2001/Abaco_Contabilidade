import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { useParams } from "react-router-dom";
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
            </div>
        </>
    );
}

export default DetalhesComputador;