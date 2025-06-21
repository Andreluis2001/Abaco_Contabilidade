import FormaRegistroManutencao from "../components/FormaRegistroManutencao";
import Navbar from "../components/Navbar";
import '../styles/style.css';
import { useNavigate, useParams } from "react-router-dom";

function RegistrarManutencaoEquipamentos() {
    const navigate = useNavigate();

    const url_params = useParams();
    const numeroDePatrimonio = url_params.numero_de_patrimonio ?? "";

    return (
        <>
        <div className="content">
            <Navbar />

            <div className="container">
            <main>
                <h1>Registro de Manutenção</h1>
                    <FormaRegistroManutencao tipo={"equipamento"} numero_de_patrimonio={numeroDePatrimonio} />
                <br />
                <button type="button" onClick={() => navigate(-1)}>← Voltar</button>
            </main>
            </div>
        </div>
        </>
    );
}

export default RegistrarManutencaoEquipamentos;