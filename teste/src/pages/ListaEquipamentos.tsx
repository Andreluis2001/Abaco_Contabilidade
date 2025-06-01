import Navbar from "../components/Navbar";
import Equipamento from "../components/Equipamento";
import Computador from "../components/Computador";
import { useState, useEffect} from "react";
import api from "../api";
import "../styles/style.css";

type Props = {};

function ListaEquipamentos({}: Props) {
  const [equipamentos, setEquipamentos] = useState<any[]>([]);
  const [computadores, setComputadores] = useState<any[]>([]);

  useEffect(() => {
    getComputadores();
    getEquipamentos();
  }, []);

  const getEquipamentos = async () => {
    api
      .get("api/equipamentos")
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar equipamentos:", error);
      });
  }

  const getComputadores = async () => {
    api
      .get("api/computadores")
      .then((response) => {
        setComputadores(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar computadores:", error);
      });
  }


  return (
    <>
      <div className="content">
        <Navbar />
        <div className="container">
          <main className="lista-container">
            <h1 className="lista-titulo">Lista de Equipamentos</h1>

            <div className="barra-pesquisa">
              <input
                type="text"
                id="barra-pesquisa"
                placeholder="Pesquisar equipamentos..."
                onInput={() => {}}
              />
            </div>

            <table className="tabela-equipamentos">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      id="selecionar-todos"
                      onClick={() => {}}
                    />
                  </th>
                  <th>Equipamento</th>
                  <th>Modelo</th>
                  <th>Aquisição</th>
                  <th>Garantia</th>
                  <th>Nº Patrimônio</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {computadores.map((computador: any) => (
                  <Computador computador={computador} key={computador.numero_de_patrimonio}/>
                ))}
                {equipamentos.map((equipamento: any) => (
                  <Equipamento equip={equipamento} key={equipamento.numero_de_patrimonio} />
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
}

export default ListaEquipamentos;
