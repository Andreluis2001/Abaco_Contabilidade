import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {};

function Home({}: Props) {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="container home-container">
            <main style={{ boxShadow: "none", backgroundColor: "#e6e7e7" }}>
            <h1>Bem-vindo ao Sistema Ábaco</h1>
            <p>
              Gerencie seus equipamentos, usuários e manutenções de forma
              simples e eficiente.
            </p>
            <br />
            <br />
            <div className="info-panels-row" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div className="info-panel" style={{ flex: 1, minWidth: 260 }}>
                <h3>
                  <i className="bi bi-clipboard-data" style={{ color: "#1e88e5" }}></i> Inventário Rápido
                </h3>
                <div className="inventory-list">
                  <div className="inventory-item">
                    <span className="item-name">Computadores</span>
                    <span className="item-count">15</span>
                  </div>
                  <div className="inventory-item">
                    <span className="item-name">Impressoras</span>
                    <span className="item-count">8</span>
                  </div>
                  <div className="inventory-item">
                    <span className="item-name">Notebooks</span>
                    <span className="item-count">12</span>
                  </div>
                  <div className="inventory-item">
                    <span className="item-name">Monitores</span>
                    <span className="item-count">23</span>
                  </div>
                  <div className="inventory-item">
                    <span className="item-name">Roteadores</span>
                    <span className="item-count">6</span>
                  </div>
                </div>
              </div>

              <div className="info-panel" style={{ flex: 1, minWidth: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Doughnut 
                  data={{
                    labels: ["Equipamentos", "Usuários", "Manutenções"],
                    datasets: [
                      {
                        data: [12, 19, 3],
                        backgroundColor: [
                          "#1e88e5",
                          "#43a047",
                          "#f4511e",
                        ],
                      },
                    ],
                  }}
                />
              </div>

              <div className="info-panel" style={{ flex: 1, minWidth: 260 }}>
                <h3>
                  <i className="bi bi-wrench" style={{ color: "#f4511e" }}></i> Manutenções Recentes
                </h3>
                <div className="maintenance-list">
                  <div className="maintenance-item">
                    <div className="maintenance-info">
                      <span className="equipment-name">Impressora HP-001</span>
                      <span className="maintenance-date">18/06/2025</span>
                    </div>
                    <span className="status-badge status-completed">Concluída</span>
                  </div>
                  <div className="maintenance-item">
                    <div className="maintenance-info">
                      <span className="equipment-name">Notebook DEL-045</span>
                      <span className="maintenance-date">17/06/2025</span>
                    </div>
                    <span className="status-badge status-pending">Pendente</span>
                  </div>
                  <div className="maintenance-item">
                    <div className="maintenance-info">
                      <span className="equipment-name">Roteador RT-003</span>
                      <span className="maintenance-date">15/06/2025</span>
                    </div>
                    <span className="status-badge status-completed">Concluída</span>
                  </div>
                  <div className="maintenance-item">
                    <div className="maintenance-info">
                      <span className="equipment-name">Monitor LG-089</span>
                      <span className="maintenance-date">14/06/2025</span>
                    </div>
                    <span className="status-badge status-in-progress">Em Andamento</span>
                  </div>
                </div>
              </div>
            </div>
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
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
