import React from 'react';
import "../styles/style.css";
import api from '../api';
import { Navigate, useNavigate } from 'react-router-dom';

type Props = {};

function FormaCadastroEquipamentos({}: Props) {

    const [equipamento, setEquipamento] = React.useState('Computador');
    const [modelo, setModelo] = React.useState('');
    const [patrimonio, setPatrimonio] = React.useState('');
    const [aquisicao, setAquisicao] = React.useState('');
    const [garantia, setGarantia] = React.useState('');
    const [local, setLocal] = React.useState('');
    const [processador, setProcessador] = React.useState('');
    const [ram, setRam] = React.useState('');
    const [hd, setHd] = React.useState('');
    const [ssd, setSsd] = React.useState('');
    const [fonte, setFonte] = React.useState('');
    const [placaMae, setPlacaMae] = React.useState('');
    const [placaVideo, setPlacaVideo] = React.useState('');
    const [descricao, setDescricao] = React.useState('');

    const navigate = useNavigate();

    const submitToComputadores = (e: any) => {
        e.preventDefault();
        api
            .post('api/computadores/', {
                numero_de_patrimonio: patrimonio,
                modelo,
                data_de_aquisicao: aquisicao,
                localizacao: local,
                data_da_garantia: garantia,
                modelo_processador: processador,
                memoria_ram: ram,
                modelo_hd: hd,
                modelo_ssd: ssd,
                modelo_fonte: fonte,
                modelo_placa_mae: placaMae,
                modelo_placa_video: placaVideo,
                descricao
            })
            .then((response) => {
            if (response.status === 201) {
                alert('Computador cadastrado com sucesso!');
                navigate('/lista/equipamentos');
            } else {
                alert('Erro ao cadastrar Computador. Tente novamente.');
            }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar computador:', error);
            });
    }

    const submitToEquipamentos = (e: any) => {
        e.preventDefault();
        api
            .post('api/equipamentos/', {
                numero_de_patrimonio: patrimonio,
                equipamento,
                modelo,
                data_de_aquisicao: aquisicao,
                localizacao: local,
                data_da_garantia: garantia,
                descricao
            })
            .then((response) => {
            if (response.status === 201) {
                alert("Equipamento cadastrado com sucesso!" );
                navigate('/lista/equipamentos');            } 
            else {
                alert('Erro ao cadastrar equipamento. Tente novamente.');
            }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar computador:', error);
            });
    }

    return (
        <>
            <form className="form" id="equipment-form" onSubmit={equipamento === 'Computador' ? submitToComputadores : submitToEquipamentos}>
                <div className="form-row">
                    <div>
                        <label>Equipamento*</label>
                        <select 
                        id="equipamento" 
                        value={equipamento} 
                        onChange={(e) => (setEquipamento(e.target.value))} 
                        required
                        >
                            <option value="Computador" selected>Computador</option>
                            <option value="Impressora">Impressora</option>
                            <option value="Monitor">Monitor</option>
                        </select>
                    </div>
                    <div>
                        <label>Modelo*</label>
                        <input
                            type="text"
                            id="modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Número de Patrimônio*</label>
                        <input
                            type="text"
                            id="patrimonio"
                            value={patrimonio}
                            onChange={(e) => setPatrimonio(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Data da Aquisição*</label>
                        <input
                            type="date"
                            id="aquisicao"
                            value={aquisicao}
                            onChange={(e) => setAquisicao(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Data da Garantia</label>
                        <input
                            type="date"
                            id="garantia"
                            value={garantia}
                            onChange={(e) => setGarantia(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Local*</label>
                        <input
                            type="text"
                            id="local"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div
                    className="form-row"
                    id="computador-campos"
                    style={{ display: equipamento === 'Computador' ? 'flex' : 'none' }}
                >
                    <div>
                        <label>Processador</label>
                        <input
                            type="text"
                            id="processador"
                            value={processador}
                            onChange={(e) => setProcessador(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Memória RAM</label>
                        <input
                            type="text"
                            id="ram"
                            value={ram}
                            onChange={(e) => setRam(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>HD</label>
                        <input
                            type="text"
                            id="hd"
                            value={hd}
                            onChange={(e) => setHd(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>SSD</label>
                        <input
                            type="text"
                            id="ssd"
                            value={ssd}
                            onChange={(e) => setSsd(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Fonte</label>
                        <input
                            type="text"
                            id="fonte"
                            value={fonte}
                            onChange={(e) => setFonte(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Placa Mãe</label>
                        <input
                            type="text"
                            id="placa-mae"
                            value={placaMae}
                            onChange={(e) => setPlacaMae(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Placa de Vídeo</label>
                        <input
                            type="text"
                            id="placa-video"
                            value={placaVideo}
                            onChange={(e) => setPlacaVideo(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="full-width">
                        <label>Observações</label>
                        <textarea
                            id="descricao"
                            placeholder="Informe a observação caso tenha."
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <button type="submit">CADASTRAR</button>
            </form>
        </>
    );
}

export default FormaCadastroEquipamentos;