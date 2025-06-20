import { useState } from 'react';
import '../styles/edit.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

type Props = {
    computador?: any
};

function EditarComputadorComponent({ computador }: Props) {
    const numeroDePatrimonio = computador?.numero_de_patrimonio || '';
    const [modelo, setModelo] = useState<string>(computador?.modelo || '');
    const [dataDeAquisicao, setDataDeAquisicao] = useState<string>(computador?.data_de_aquisicao || '');
    const [dataDaGarantia, setDataDaGarantia] = useState<string>(computador?.data_da_garantia || '');
    const [localizacao, setLocalizacao] = useState<string>(computador?.localizacao || '');
    const [status, setStatus] = useState<string>(computador?.computador_status || '');
    const [modeloProcessador, setModeloProcessador] = useState<string>(computador?.modelo_processador || '');
    const [memoriaRam, setMemoriaRam] = useState<string>(computador?.memoria_ram || '');
    const [modeloHd, setModeloHd] = useState<string>(computador?.modelo_hd || '');
    const [modeloSsd, setModeloSsd] = useState<string>(computador?.modelo_ssd || '');
    const [modeloFonte, setModeloFonte] = useState<string>(computador?.modelo_fonte || '');
    const [modeloPlacaMae, setModeloPlacaMae] = useState<string>(computador?.modelo_placa_mae || '');
    const [modeloPlacaVideo, setModeloPlacaVideo] = useState<string>(computador?.modelo_placa_video || '');
    const [descricao, setDescricao] = useState<string>(computador?.descricao || '');

    const navigate = useNavigate();

    if (!computador) {
        return <div>Carregando...</div>;
    }

    const handleSave = () => {

        api
            .patch(`api/computadores/${numeroDePatrimonio}/`, {
                modelo: modelo,
                data_de_aquisicao: dataDeAquisicao,
                data_da_garantia: dataDaGarantia,
                localizacao: localizacao,
                computador_status: status,
                modelo_processador: modeloProcessador,
                memoria_ram: memoriaRam,
                modelo_hd: modeloHd,
                modelo_ssd: modeloSsd,
                modelo_fonte: modeloFonte,
                modelo_placa_mae: modeloPlacaMae,
                modelo_placa_video: modeloPlacaVideo,
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
                        <div className="info-value">Computador</div>
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

                <div className="computer-specs">
                    <div className="info-field">
                        <div className="info-label">Processador</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloProcessador}
                            onChange={e => setModeloProcessador(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Memória RAM</div>
                        <input
                            className="info-value"
                            type="text"
                            value={memoriaRam}
                            onChange={e => setMemoriaRam(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">HD</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloHd}
                            onChange={e => setModeloHd(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">SSD</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloSsd}
                            onChange={e => setModeloSsd(e.target.value)}
                        />
                    </div>
                </div>

                <div className="computer-specs">
                    <div className="info-field">
                        <div className="info-label">Fonte</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloFonte}
                            onChange={e => setModeloFonte(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Placa Mãe</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloPlacaMae}
                            onChange={e => setModeloPlacaMae(e.target.value)}
                        />
                    </div>
                    <div className="info-field">
                        <div className="info-label">Placa de Vídeo</div>
                        <input
                            className="info-value"
                            type="text"
                            value={modeloPlacaVideo}
                            onChange={e => setModeloPlacaVideo(e.target.value)}
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

export default EditarComputadorComponent;