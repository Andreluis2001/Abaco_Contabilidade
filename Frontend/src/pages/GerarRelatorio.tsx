import { useState } from "react";
import api from "../api"
import { Link} from "react-router-dom";
import "../styles/relatorio.css";

function GerarRelatorio() {

    const [formato, setFormato] = useState("csv");


    const gerarRelatorioComputadores = async (formato: string) => {
        console.log("Gerando relatório de computadores no formato:", formato);
        api
            .get(`api/export/computadores/${formato}/`)
            .catch((error) => {
                console.error("Erro ao gerar relatorio:", error);
            });
        
    }

    const gerarRelatorioEquipamentos = async (formato: string) => {
        console.log("Gerando relatório de equipamentos no formato:", formato);
        api
            .get(`api/export/equipamentos/${formato}/`)
            .catch((error) => {
                console.error("Erro ao gerar relatorio:", error);
            });
        
    }

    const gerarRelatorioManutencoesComputadores = async (formato: string) => {
        api
            .get(`api/export/manutencao/computadores/${formato}/`)
            .catch((error) => {
                console.error("Erro ao gerar relatorio:", error);
            });
        
    }

    const gerarRelatorioManutencoesEquipamentos = async (formato: string) => {
        api
            .get(`api/export/manutencao/equipamentos/${formato}/`)
            .catch((error) => {
                console.error("Erro ao gerar relatorio:", error);
            });
        
    }

    return (
        <>
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