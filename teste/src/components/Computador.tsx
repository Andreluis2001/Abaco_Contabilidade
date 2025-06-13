import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Props = {
    computador: any;
};

function Computador({computador}: Props) {

    const [equipamento, ] = React.useState<string>('Computador');
    const [modelo, ] = React.useState<string>(computador.modelo || '');
    const [dataAquisicao, ] = React.useState<string>(computador.data_de_aquisicao || '');
    const [dataGarantia, ] = React.useState<string>(computador.data_da_garantia || '');
    const [patrimonio, ] = React.useState<string>(computador.numero_de_patrimonio || '');

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
                    <Link to={`/detalhes/computador/${patrimonio}`} className="bi bi-eye" style={{ cursor: "pointer" }}/>
                </td>
            </tr>
        </>
    );
}

export default Computador;

