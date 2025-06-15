import { useState } from 'react';
import '../styles/edit.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

type Props = {
    equipamento?: any
};

function EditarEquipamentoComponent({ equipamento }: Props) {
    const numeroDePatrimonio = equipamento?.numero_de_patrimonio || '';
    const tipoEquipamento = equipamento?.tipo_equipamento || '';
    const [modelo, setModelo] = useState<string>(equipamento?.modelo || '');
    const [dataDeAquisicao, setDataDeAquisicao] = useState<string>(equipamento?.data_de_aquisicao || '');
    const [dataDaGarantia, setDataDaGarantia] = useState<string>(equipamento?.data_da_garantia || '');
    const [localizacao, setLocalizacao] = useState<string>(equipamento?.localizacao || '');
    const [status, setStatus] = useState<string>(equipamento?.computador_status || '');
    const [descricao, setDescricao] = useState<string>(equipamento?.descricao || '');

    const navigate = useNavigate();

    if (!equipamento) {
        return <div>Carregando...</div>;
    }

    const handleSave = () => {

        api
            .patch(`api/equipamentos/${numeroDePatrimonio}/`, {
                modelo: modelo,
                data_de_aquisicao: dataDeAquisicao,
                data_da_garantia: dataDaGarantia,
                localizacao: localizacao,
                computador_status: status,
                descricao: descricao
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Erro ao atualizar equipamento');
                }
                alert('Equipamento atualizado com sucesso!');   
                navigate('/lista/equipamentos');
            })
            .catch(error => {
                console.error('Erro ao atualizar equipamento:', error);
            });
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

                <div className="equipment-info">
                    <div className="info-field">
                        <div className="info-label">Equipamento</div>
                        <div className="info-value">{tipoEquipamento}</div>
                    </div>
                    <div className="info-field">
                        <div className="info-label">Modelo</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modelo}
                            onChange={e => setModelo(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Data da Aquisição</div>
                        <input
                            className="info-value"
                            type="text"
                            value={dataDeAquisicao}
                            onChange={e => setDataDeAquisicao(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Data da Garantia</div>
                        <input
                            className="info-value"
                            type="text"
                            value={dataDaGarantia}
                            onChange={e => setDataDaGarantia(e.target.value)}
                        />
                    </div>
                </div>

                <div className="equipment-info">
                    <div className="info-field">
                        <div className="info-label">Local</div>
                        <input
                            className="info-value"
                            type="text"
                            value={localizacao}
                            onChange={e => setLocalizacao(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Status</div>
                        <input
                            className="info-value"
                            type="text"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>
                </div>

                <div className="observations-section">
                    <div className="info-field observations-field">
                        <div className="info-label">Observações</div>
                        <textarea
                            className="info-value observations-value"
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </div>
                </div>

                <button className="btn-edit" onClick={handleSave}>
                    <i className="bi bi-pencil-square"></i> Salvar Alterações
                </button>
            </div>
        </>
    );
}

export default EditarEquipamentoComponent;