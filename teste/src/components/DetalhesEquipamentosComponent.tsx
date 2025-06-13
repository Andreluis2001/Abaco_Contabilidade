import "../styles/detalhes.css";

type props = {
    equipamento?: any;
};

function DetalhesComponent({equipamento}: props) {

    const numeroDePatrimonio = equipamento?.numero_de_patrimonio || '';
    const modelo = equipamento?.modelo || '';
    const dataDeAquisicao = equipamento?.data_de_aquisicao || '';
    const dataDaGarantia = equipamento?.data_da_garantia || '';
    const localizacao = equipamento?.localizacao || '';
    const status = equipamento?.computador_status || '';
    const descricao = equipamento?.descricao || '';

    if (!equipamento) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <div className="equipment-header">
                <div className="equipment-icon">
                    <i className="bi bi-pc-display"></i>
                </div>
                <div className="equipment-id">{numeroDePatrimonio}</div>
            </div>
            <div className="equipment-info">
                <div className="info-field">
                    <div className="info-label">Equipamento</div>
                    <input className="info-value" type="text" value="Computador" disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Modelo</div>
                    <input className="info-value" type="text" value={modelo} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Data da Aquisição</div>
                    <input className="info-value" type="text" value={dataDeAquisicao} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Data da Garantia</div>
                    <input className="info-value" type="text" value={dataDaGarantia} disabled />
                </div>
            </div>
            <div className="equipment-info">
                <div className="info-field">
                    <div className="info-label">Local</div>
                    <input className="info-value" type="text" value={localizacao} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Status</div>
                    <input className="info-value" type="text" value={status} disabled />
                </div>
            </div>
            <div className="observations-section">
                <div className="info-field observations-field">
                    <div className="info-label">Observações</div>
                    <div className="info-value observations-value">
                        {descricao || "Nenhuma observação registrada."}
                    </div>
                </div>
            </div>
            <div className="maintenance-section">
                <div className="maintenance-header">Histórico de Manutenções</div>
                <div className="maintenance-history">
                    <p><strong>10/01/2025:</strong> Manutenção preventiva - Limpeza interna e atualização de drivers</p>
                    <p><strong>15/09/2024:</strong> Troca de pasta térmica do processador</p>
                    <p><strong>03/06/2024:</strong> Instalação de memória RAM adicional (8GB → 16GB)</p>
                    <p><strong>20/03/2024:</strong> Manutenção preventiva - Verificação geral do sistema</p>
                </div>
            </div>
            <div className="action-buttons">
                <button className="btn-edit">
                    <i className="bi bi-pencil-square"></i> Editar Equipamento
                </button>
                <button className="btn-delete">
                    <i className="bi bi-trash"></i> Excluir Equipamento
                </button>
            </div>
        </>
    );
}

export default DetalhesComponent;