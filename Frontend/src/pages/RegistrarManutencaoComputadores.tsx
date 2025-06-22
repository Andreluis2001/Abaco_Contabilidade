import FormaRegistroManutencaoComputador from "../components/FormaRegistroManutencaoComputador";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import { useNavigate, useParams } from "react-router-dom";

function RegistrarManutencaoComputadores() {
  const navigate = useNavigate();

  const url_params = useParams();
  const numeroDePatrimonio = url_params.numeroDePatrimonio ?? "";

  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main>
            <h1>Registro de Manutenção</h1>
            <FormaRegistroManutencaoComputador
              numero_de_patrimonio={numeroDePatrimonio}
            />
            <br />
            <button type="button" onClick={() => navigate(-1)}>
              ← Voltar
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

export default RegistrarManutencaoComputadores;
