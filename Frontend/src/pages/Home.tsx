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
import { useEffect, useState } from "react";
import api from "../api";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {};

function Home({}: Props) {

  const [manutencoes, setManutencoes] = useState<any[]>([]);
  const [countComputadorInstances, setCountComputadorInstances] = useState<any>();
  const [countEquipamentoInstances, setCountEquipamentoInstances] = useState<any>({});
  const [countAllStatus, setCountAllStatus] = useState<any>({});

  useEffect(() => {
    getManutencoes();
    getCountInstances();
    getCountAllStatus();
  }, []);

  const getManutencoes = async () => {
    api
      .get("api/manutencao/todos/")
      .then((response) => {
        setManutencoes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar manutencoes:", error);
      });
  }

  const getCountInstances = async () => {
    api
      .get("api/instances/count/")
      .then((response) => {
        setCountComputadorInstances(response.data.computador_count);
        setCountEquipamentoInstances(response.data.equipamento_count);
      })
      .catch((error) => {
        console.error("Erro ao buscar contagem de instâncias:", error);
      });
  }

  const getCountAllStatus = async () => {
    api
      .get("api/status/count/")
      .then((response) => {
        setCountAllStatus(response.data);})
      .catch((error) => {
        console.error("Erro ao buscar contagem de status:", error);
      });
  }

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
                  <span>Computador</span>
                  <span className="count">{countComputadorInstances}</span>
                </div>
                {Object.entries(countEquipamentoInstances).map(([key, value]) => (
                  <div className="inventory-item" key={key}>
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="count">{String(value)}</span>
                  </div>
                ))}
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
                  labels: ["Em Funcionamento", "Em Manutenção", "Desativado"],
                  datasets: [
                    {
                      data: [
                        countAllStatus.total_ativos || 0,
                        countAllStatus.total_manutencao || 0,
                        countAllStatus.total_desativados || 0  
                      ],
                      backgroundColor: [
                        "#1e88e5",
                        "#43a047",
                        "#f4511e"
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
                {manutencoes.map((manutencao) => (
                  <div className="maintenance-item" key={manutencao.id}>
                    <div className="maintenance-info">
                      <h4>{manutencao.equipamento_id || manutencao.computador_id}</h4>
                      <span className="date">{new Date(manutencao.data).toLocaleDateString()}</span>
                    </div>
                    <span className={`status status-${manutencao.tipo_manutencao}`}>
                      {manutencao.tipo_manutencao.toUpperCase()}
                    </span>
                  </div>
                ))}
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
              <p>Gerencie os usuários cadastrados no sistema.</p>
              <Link to={"/lista/usuarios"}>
                <button className="btn btn-primary">Ir para Usuários</button>
              </Link>
            </div>
            <div className="action-card">
              <i className="bi bi-file-earmark-spreadsheet-fill" style={{ fontSize: "2.5rem", color: "#f4511e" }}></i>
              <h3>Gerar Relatórios</h3>
              <p>Gere relatórios de máquinas e equipamentos com suas respectivas manutenções.</p>
              <Link to={"/gerar-relatorio"}>
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
