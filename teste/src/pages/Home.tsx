import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container home-container">
          <main>
            <h1>Bem-vindo ao Sistema Ábaco</h1>
            <p>
              Gerencie seus equipamentos, usuários e manutenções de forma
              simples e eficiente.
            </p>

            <section className="cards-home">
              <div className="card-home">
                <i
                  className="bi bi-laptop"
                  style={{ fontSize: "2.5rem", color: "#1e88e5" }}
                ></i>
                <h2>Equipamentos</h2>
                <p>
                  Veja a lista completa de equipamentos cadastrados e seus
                  detalhes.
                </p>
                <Link to="/lista/equipamentos" className="btn">
                  Ir para Equipamentos
                </Link>
              </div>

              <div className="card-home">
                <i
                  className="bi bi-people-fill"
                  style={{ fontSize: "2.5rem", color: "#43a047" }}
                ></i>
                <h2>Usuários</h2>
                <p>Gerencie os usuários que têm acesso ao sistema.</p>
                <Link to="/" className="btn">
                  Ir para Usuários
                </Link>
              </div>

              <div className="card-home">
                <i
                  className="bi bi-tools"
                  style={{ fontSize: "2.5rem", color: "#f4511e" }}
                ></i>
                <h2>Manutenção</h2>
                <p>
                  Controle os registros e status das manutenções dos
                  equipamentos.
                </p>
                <Link to="/lista/manutencoes" className="btn">
                  Ir para Manutenção
                </Link>
              </div>

              <div className="card-home">
                <i
                  className="bi bi-hammer"
                  style={{ fontSize: "2.5rem", color: "#fb8c00" }}
                ></i>
                <h2>Registro de Manutenção</h2>
                <p>Faça o registro de novas manutenções nos equipamentos.</p>
                <Link to="/registro/manutencoes" className="btn">
                  Registrar Manutenção
                </Link>
              </div>

              <div className="card-home">
                <i
                  className="bi bi-pencil-square"
                  style={{ fontSize: "2.5rem", color: "#3949ab" }}
                ></i>
                <h2>Cadastro de Equipamentos</h2>
                <p>Cadastre novos equipamentos no sistema.</p>
                <Link to="/cadastro/equipamentos" className="btn">
                  Cadastrar Equipamento
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
