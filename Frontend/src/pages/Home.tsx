import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Doughnut } from "react-chartjs-2";
import "../styles/abaco_styles.css";
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
      <Navbar />
      <div className="body">
        <div className="main-container">
          <div className="welcome-section">
            <h1>Bem-vindo ao Sistema Ábaco</h1>
            <p>Gerencie seus equipamentos, usuários e manutenções de forma simples e eficiente.</p>
          </div>
            <div className="dashboard-grid">
            <div className="card inventory-card">
              <div className="card-header">
              <div className="card-icon">
                <i className="bi bi-clipboard2-check-fill"></i>
              </div>
              <h3>Inventário Rápido</h3>
              </div>
              <div className="inventory-list">
              <div className="inventory-item">
                <span>Computadores</span>
                <span className="count">15</span>
              </div>
              <div className="inventory-item">
                <span>Impressoras</span>
                <span className="count">8</span>
              </div>
              <div className="inventory-item">
                <span>Notebooks</span>
                <span className="count">12</span>
              </div>
              <div className="inventory-item">
                <span>Monitores</span>
                <span className="count">23</span>
              </div>
              <div className="inventory-item">
                <span>Roteadores</span>
                <span className="count">6</span>
              </div>
              </div>
            </div>
            <div className="card chart-card">
              <div className="card-header">
              <div className="card-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <h3>Distribuição</h3>
              </div>
              <div className="chart-container">
              <Doughnut
                data={{
                labels: ["Computadores", "Impressoras", "Notebooks", "Monitores", "Roteadores"],
                datasets: [
                  {
                  data: [15, 8, 12, 23, 6],
                  backgroundColor: [
                    "#1e88e5",
                    "#43a047",
                    "#f4511e",
                    "#8e24aa",
                    "#ffb300"
                  ],
                  hoverOffset: 4,
                  },
                ],
                }}
                options={{
                responsive: true,
                plugins: {
                  legend: {
                  position: "top",
                  },
                },
                }}
              />
              </div>
            </div>
            <div className="card maintenance-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="bi bi-wrench-adjustable-circle"></i>
                </div>
                <h3>Manutenções Recentes</h3>
                </div>
                <div className="maintenance-list">
                <div className="maintenance-item">
                  <div className="maintenance-info">
                  <h4>Impressora HP-001</h4>
                  <span className="date">18/06/2025</span>
                  </div>
                  <span className="status status-completed">CONCLUÍDA</span>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-info">
                  <h4>Notebook DEL-045</h4>
                  <span className="date">17/06/2025</span>
                  </div>
                  <span className="status status-pending">PENDENTE</span>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-info">
                  <h4>Roteador RT-003</h4>
                  <span className="date">15/06/2025</span>
                  </div>
                  <span className="status status-completed">CONCLUÍDA</span>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-info">
                  <h4>Monitor LG-089</h4>
                  <span className="date">14/06/2025</span>
                  </div>
                  <span className="status status-in-progress">EM ANDAMENTO</span>
                </div>
              </div>
            </div>
            </div>
          <div className="action-cards">
            <div className="action-card">
              <i className="bi bi-laptop" style={{ fontSize: "2.5rem", color: "#1e88e5" }}></i>
              <h3>Equipamentos</h3>
              <p>Veja a lista completa de equipamentos cadastrados e seus detalhes.</p>
              <Link to={"/lista/equipamentos"}>
                <button className="btn btn-primary">Ir para Equipamentos</button>
              </Link>
            </div>
            <div className="action-card">
              <i className="bi bi-people-fill" style={{ fontSize: "2.5rem", color: "#43a047" }}></i>
              <h3>Usuários</h3>
              <p>Gerencie os usuários que têm acesso ao sistema.</p>
              <Link to={""}>
                <button className="btn btn-primary">Ir para Usuários</button>
              </Link>
            </div>
            <div className="action-card">
              <i className="bi bi-file-earmark-spreadsheet-fill" style={{ fontSize: "2.5rem", color: "#f4511e" }}></i>
              <h3>Gerar Relatórios</h3>
              <p>Gere relatórios de patrimônios.</p>
              <Link to={""}>
                <button className="btn btn-primary">Ir para relatórios.</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
