import Navbar from "../components/Navbar";
import { useState, useEffect} from "react";
import api from "../api";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Usuario from "../components/Usuario";

type Props = {};

function ListaUsuarios({}: Props) {

  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    api
      .get("api/usuarios/")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  }

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="container">
          <main className="lista-container">
            <h1 className="lista-titulo">Lista de Usuários</h1>
            <Link to="/cadastro/usuarios" className="btn">
                <button className="btn-add"><i className="bi bi-person-plus-fill"></i> Novo Usuário</button>
            </Link>
            <br />
            <br />
            <table className="tabela-equipamentos">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Cargo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario: any) => (
                  <Usuario usuario={usuario} key={usuario.id}/>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
}

export default ListaUsuarios;
