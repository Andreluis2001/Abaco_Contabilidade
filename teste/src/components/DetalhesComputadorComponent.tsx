import "../styles/detalhes.css";

type props = {
    computador?: any;
};

function DetalhesComputadorComponent({ computador }: props) {
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
            <div className="equipment-detail">
                <div className="equipment-header">
                    <div className="equipment-icon">
                        <i className="bi bi-pc-display"></i>
                    </div>
                    <div className="equipment-id">{numeroDePatrimonio}</div>
                </div>

                <div className="section-title">Informações Gerais</div>
                <table className="specs-table">
                    <tbody>
                        <tr>
                            <td className="spec-label">Equipamento</td>
                            <td className="spec-value">Computador</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Modelo</td>
                            <td className="spec-value">{modelo}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Data da Aquisição</td>
                            <td className="spec-value">{dataDeAquisicao}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Data da Garantia</td>
                            <td className="spec-value">{dataDaGarantia}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Local</td>
                            <td className="spec-value">{localizacao}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Status</td>
                            <td className="spec-value">{status}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="section-title">Especificações Técnicas</div>
                <table className="specs-table">
                    <tbody>
                        <tr>
                            <td className="spec-label">Processador</td>
                            <td className="spec-value">{modeloProcessador}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Memória RAM</td>
                            <td className="spec-value">{memoriaRam}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">HD</td>
                            <td className="spec-value">{modeloHd}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">SSD</td>
                            <td className="spec-value">{modeloSsd}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Fonte</td>
                            <td className="spec-value">{modeloFonte}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Placa Mãe</td>
                            <td className="spec-value">{modeloPlacaMae}</td>
                        </tr>
                        <tr>
                            <td className="spec-label">Placa de Vídeo</td>
                            <td className="spec-value">{modeloPlacaVideo}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="section-title">Observações</div>
                <div className="observations-content">
                    {descricao || 'Nenhuma observação disponível.'}
                </div>

                <div className="section-title">Histórico de Manutenções</div>
                <div className="maintenance-history">
                    <p><strong>10/01/2025:</strong> Manutenção preventiva - Limpeza interna e atualização de drivers</p>
                    <p><strong>15/09/2024:</strong> Troca de pasta térmica do processador</p>
                    <p><strong>03/06/2024:</strong> Instalação de memória RAM adicional (8GB → 16GB)</p>
                    <p><strong>20/03/2024:</strong> Manutenção preventiva - Verificação geral do sistema</p>
                </div>
            </div>
        </>
    );
}

export default DetalhesComputadorComponent;
