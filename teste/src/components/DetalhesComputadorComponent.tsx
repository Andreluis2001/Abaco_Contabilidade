import "../styles/detalhes.css";

type props = {
    computador?: any;
};

function DetalhesComputadorComponent({computador}: props) {

    const numeroDePatrimonio = computador?.numero_de_patrimonio || '';
    const modelo = computador?.modelo || '';
    const dataDeAquisicao = computador?.data_de_aquisicao || '';
    const dataDaGarantia = computador?.data_da_garantia || '';
    const localizacao = computador?.localizacao || '';
    const status = computador?.computador_status || '';
    const modeloProcessador = computador?.modelo_processador || '';
    const memoriaRam = computador?.memoria_ram || '';
    const modeloHd = computador?.modelo_hd || '';
    const modeloSsd = computador?.modelo_ssd || '';
    const modeloFonte = computador?.modelo_fonte || '';
    const modeloPlacaMae = computador?.modelo_placa_mae || '';
    const modeloPlacaVideo = computador?.modelo_placa_video || '';
    const descricao = computador?.descricao || '';

    if (!computador) {
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
            <div className="computer-specs">
                <div className="info-field">
                    <div className="info-label">Processador</div>
                    <input className="info-value" type="text" value={modeloProcessador} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Memória RAM</div>
                    <input className="info-value" type="text" value={memoriaRam} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">HD</div>
                    <input className="info-value" type="text" value={modeloHd} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">SSD</div>
                    <input className="info-value" type="text" value={modeloSsd} disabled />
                </div>
            </div>
            <div className="computer-specs">
                <div className="info-field">
                    <div className="info-label">Fonte</div>
                    <input className="info-value" type="text" value={modeloFonte} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Placa Mãe</div>
                    <input className="info-value" type="text" value={modeloPlacaMae} disabled />
                </div>
                <div className="info-field">
                    <div className="info-label">Placa de Vídeo</div>
                    <input className="info-value" type="text" value={modeloPlacaVideo} disabled />
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

export default DetalhesComputadorComponent;