import "../styles/detalhes.css";

type props = {
    equipamento?: any;
};

function DetalhesEquipamentoComponent({ equipamento }: props) {
    const tipoEquipamento = equipamento?.equipamento || '';
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
                            <td className="spec-value">{tipoEquipamento}</td>
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

export default DetalhesEquipamentoComponent;
