import React from "react";
import "../styles/style.css";

type Props = {
    equip: any;
};

function Equipamento({equip}: Props) {

    const [equipamento, ] = React.useState<string>(equip.equipamento || '');
    const [modelo, ] = React.useState<string>(equip.modelo || '');
    const [dataAquisicao, ] = React.useState<string>(equip.data_de_aquisicao || '');
    const [dataGarantia, ] = React.useState<string>(equip.data_da_garantia || '');
    const [patrimonio, ] = React.useState<string>(equip.numero_de_patrimonio || '');
    const [descricao, ] = React.useState<string>(equip.descricao || '');
    const [isDetalhado, setIsDetalhado] = React.useState<boolean>(false);

    const detalharEquipamento = () => {
        setIsDetalhado(!isDetalhado);
    };


    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" className="checkbox-item" />
                </td>
                <td>{equipamento}</td>
                <td>{modelo}</td>
                <td>{dataAquisicao}</td>
                <td>{dataGarantia}</td>
                <td>{patrimonio}</td>
                <td>
                    <i
                        className="bi bi-eye"
                        style={{ cursor: "pointer" }}
                        onClick={detalharEquipamento}
                    />
                </td>
            </tr>
            {isDetalhado && (
                <tr className="detalhes-formulario">
                    <td colSpan={7}>
                        <div className="linha-inputs">
                            <div className="input-box">
                                <label>Equipamento</label>
                                <input
                                    type="text"
                                    id="equipamento"
                                    value={equipamento}
                                />
                            </div>
                            <div className="input-box">
                                <label>Modelo</label>
                                <input
                                    type="text"
                                    id="modelo"
                                    value={modelo}
                                />
                            </div>
                            <div className="input-box">
                                <label>Data de Aquisicao</label>
                                <input
                                    type="date"
                                    id="aquisicao"
                                    value={dataAquisicao}
                                />
                            </div>
                            <div className="input-box">
                                <label>Data de Garantia</label>
                                <input
                                    type="date"
                                    id="garantia"
                                    value={dataGarantia}
                                />
                            </div>
                            <div className="input-box">
                                <label>Numero de Patrimônio</label>
                                <input
                                    type="text"
                                    id="patrimonio"
                                    value={patrimonio}
                                />
                            </div>
                        </div>
                        <div className="campo-descricao" id="descricao-campo">
                            <label>Descrição</label>
                            <textarea
                                id="descricao"
                                value={descricao}
                            />
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}

export default Equipamento;

