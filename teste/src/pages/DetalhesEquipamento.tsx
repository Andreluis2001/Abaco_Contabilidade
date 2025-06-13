import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';
import DetalhesEquipamentoComponent from '../components/DetalhesEquipamentoComponent';

type Props = {};

function DetalhesEquipamento({}: Props) {
    
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
            .get(`api/equipamentos/${numeroDePatrimonio}`)
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
            <div className="equipment-detail">
                <DetalhesEquipamentoComponent equip={equipamento}/>
            </div>
        </>
    );
}

export default DetalhesEquipamento