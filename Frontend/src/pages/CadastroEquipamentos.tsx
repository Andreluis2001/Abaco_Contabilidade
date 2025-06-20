import Navbar from "../components/Navbar";
import FormaCadastroEquipamentos from "../components/FormaCadastroEquipamentos";
import '../styles/style.css';

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
          </main>
        </div>
      </div>
    </>
  );
}

export default CadastroEquipamentos;
