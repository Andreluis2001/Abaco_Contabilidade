import Navbar from "../components/Navbar";
import '../styles/style.css';
import { Link } from "react-router-dom";
import FormaCadastroUsuarios from "../components/FormaCadastroUsuarios";

type Props = {};

function CadastroUsuarios({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container">
          <main>
            <h1>Cadastro de Usuário</h1>
            <FormaCadastroUsuarios />
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

export default CadastroUsuarios;
