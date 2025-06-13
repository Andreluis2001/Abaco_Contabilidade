import Navbar from "../components/Navbar";
import "../styles/detalhes.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import DetalhesComputadorComponent from "../components/DetalhesComputadorComponent";

type props = {};

function DetalhesEquipamentos({}: props) {

    const [equipamento, setEquipamento] = useState<any>(null);

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
                setEquipamento(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do equipamento:", error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="equipment-detail">
                    <main>
                        <DetalhesComputadorComponent equipamento={equipamento}/>
                    </main>
                </div>
            </div>
        </>
    );
}

export default DetalhesEquipamentos;