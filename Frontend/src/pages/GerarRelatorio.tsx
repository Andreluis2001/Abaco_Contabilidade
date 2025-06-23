import { useState } from "react";
import api from "../api"
import { Link} from "react-router-dom";
import "../styles/relatorio.css";
import Navbar from "../components/Navbar";

function GerarRelatorio() {

    const [formato, setFormato] = useState("csv");


    const gerarRelatorioComputadores = async (formato: string) => {
        const response = api.get(`api/export/computadores/${formato}/`, 
            {
                responseType: 'blob',
            }
        );

        const blob = new Blob([(await response).data], { 
            type: formato === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `relatorio_computadores.${formato}`);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
    }

    const gerarRelatorioEquipamentos = async (formato: string) => {
        const response = api.get(`api/export/equipamentos/${formato}/`, 
            {
                responseType: 'blob',
            }
        );

        const blob = new Blob([(await response).data], { 
            type: formato === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `relatorio_equipamentos.${formato}`);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    const gerarRelatorioManutencoesComputadores = async (formato: string) => {
        const response = api.get(`api/export/manutencao/computadores/${formato}/`, 
            {
                responseType: 'blob',
            }
        );

        const blob = new Blob([(await response).data], { 
            type: formato === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `relatorio_manutencoes_computadores.${formato}`);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    const gerarRelatorioManutencoesEquipamentos = async (formato: string) => {
        const response = api.get(`api/export/manutencao/equipamentos/${formato}/`, 
            {
                responseType: 'blob',
            }
        );

        const blob = new Blob([(await response).data], { 
            type: formato === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `relatorio_manutencoes_equipamentos.${formato}`);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    return (
        <>
            <Navbar />
            <div className="content">
                <div className="container">
                    <main>
                        <div className="report-generator">
                            <h1 className="page-title">Gerar Relatório</h1>

                            <div className="format-section">
                                <div className="format-field">
                                    <label className="format-label">Formato</label>
                                    <select 
                                    className="format-select"
                                    value={formato}
                                    onChange={(e) => setFormato(e.target.value)}
                                    >
                                        <option value="csv">CSV</option>
                                        <option value="xlsx">XLSX</option>
                                    </select>
                                </div>
                            </div>

                            <div className="category-section">
                                <div className="category-header">
                                    <div className="category-title">Computadores</div>
                                    <button className="btn-download" onClick={() => gerarRelatorioComputadores(formato)}>
                                        <i className="bi bi-download"></i> Download
                                    </button>
                                </div>
                            </div>

                            <div className="category-section">
                                <div className="category-header">
                                    <div className="category-title">Equipamentos</div>
                                    <button className="btn-download" onClick={() => gerarRelatorioEquipamentos(formato)}>
                                        <i className="bi bi-download"></i> Download
                                    </button>
                                </div>
                            </div>

                            <div className="category-section">
                                <div className="category-header">
                                    <div className="category-title">Manutenções de Computadores</div>
                                    <button className="btn-download" onClick={() => gerarRelatorioManutencoesComputadores(formato)}>
                                        <i className="bi bi-download"></i> Download
                                    </button>
                                </div>
                            </div>

                            <div className="category-section">
                                <div className="category-header">
                                    <div className="category-title">Manutenções de Equipamentos</div>
                                    <button className="btn-download" onClick={() => gerarRelatorioManutencoesEquipamentos(formato)}>
                                        <i className="bi bi-download"></i> Download
                                    </button>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <Link to={'/'}>
                                    <button className="btn-cancel">
                                        <i className="bi bi-x-circle"></i> Cancelar
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default GerarRelatorio;