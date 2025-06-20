import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Props = {
    equip: any;
};

function Equipamento({equip}: Props) {

    const [status, ] = React.useState<string>(equip.status || 'Em Funcionamento');
    const [equipamento, ] = React.useState<string>(equip.equipamento || '');
    const [modelo, ] = React.useState<string>(equip.modelo || '');
    const [dataAquisicao, ] = React.useState<string>(equip.data_de_aquisicao || '');
    const [dataGarantia, ] = React.useState<string>(equip.data_da_garantia || '');
    const [patrimonio, ] = React.useState<string>(equip.numero_de_patrimonio || '');


    return (
        <>
            <tr>
                <td>
                    <i
                        className="bi bi-circle-fill"
                        style={{
                            color:
                                status === 'Em Funcionamento'
                                    ? 'green'
                                    : status === 'Em Manutencao'
                                    ? 'orange'
                                    : status === 'Desativado'
                                    ? 'red'
                                    : 'gray'
                        }}
                    ></i>
                </td>
                <td>{equipamento}</td>
                <td>{modelo}</td>
                <td>{dataAquisicao}</td>
                <td>{dataGarantia}</td>
                <td>{patrimonio}</td>
                <td>
                    <Link to={`/detalhes/equipamento/${patrimonio}`} className="bi bi-eye" style={{ cursor: "pointer" }}/>
                </td>
            </tr>
        </>
    );
}

export default Equipamento;

