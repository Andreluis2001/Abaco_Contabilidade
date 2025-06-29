import Navbar from "../components/Navbar";
import Equipamento from "../components/Equipamento";
import Computador from "../components/Computador";
import { useState, useEffect} from "react";
import api from "../api";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

function ListaEquipamentos({}: Props) {
  const [equipamentos, setEquipamentos] = useState<any[]>([]);
  const [computadores, setComputadores] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getComputadores();
    getEquipamentos();
  }, []);

  const getEquipamentos = async () => {
    api
      .get(`api/equipamentos/?search=${searchQuery}`)
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar equipamentos:", error);
      });
  }

  const getComputadores = async () => {
    api
      .get(`api/computadores/?search=${searchQuery}`)
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
            <main className="lista-container" style={{ maxWidth: "1200px", width: "100%" }}>
            <h1 className="lista-titulo">Lista de Equipamentos</h1>
            <Link to="/cadastro/equipamentos" className="btn">
                <button className="btn-add"><i className="bi bi-person-plus-fill"></i> Novo Equipamento</button>
            </Link>
            <br />
            <br />
            <div className="barra-pesquisa">
              <input 
                type="text" 
                id="barra-pesquisa" 
                placeholder="Pesquisar equipamento..."
                value ={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => {
                                getComputadores();
                                getEquipamentos();
                              }}>
                  Buscar
              </button>
            </div>
            <table className="tabela-equipamentos">
              <thead>
                <tr>
                  <th>Status</th>
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
            <button className="btn-delete" onClick={() => navigate("/")}>
                <i className="bi bi-arrow-left"></i> Voltar
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

export default ListaEquipamentos;
