import "../styles/detalhes.css";
import { Link } from "react-router-dom";

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
    const status = equipamento?.equipamento_status || '';
    const descricao = equipamento?.descricao || '';
    const manutencoes = equipamento?.manutencoes || [];

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
                    {manutencoes.map((manutencao: any) => (
                       <p key={manutencao.id}>
                            <strong>{manutencao.data}:</strong> {manutencao.descricao} → Motivo: <strong>{manutencao.tipo_manutencao}</strong>
                        </p>
                    ))}
                    {manutencoes.length === 0 && <p>Nenhuma manutenção registrada.</p>}
                </div>
                <br />
                <Link to={`/registrar/manutencao/equipamento/${numeroDePatrimonio}`}>
                    <button className="btn btn-primary">Registrar Manutenção</button>
                </Link>
            </div>
        </>
    );
}

export default DetalhesEquipamentoComponent;
