import Navbar from "../components/Navbar";
import FormaCadastroEquipamentos from "../components/FormaCadastroEquipamentos";
import '../styles/style.css';
import { Link } from "react-router-dom";

type Props = {};

function CadastroEquipamentos({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main>
            <h1>Cadastro de Equipamentos</h1>
            <FormaCadastroEquipamentos />
            <br />
            <Link to="/lista/equipamentos" className="btn">
                <button type="button">← Voltar para Lista</button>
            </Link>
          </main>
        </div>
      </div>
    </>
  );
}

export default CadastroEquipamentos;
