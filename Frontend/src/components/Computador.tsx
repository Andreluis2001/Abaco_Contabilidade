import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Props = {
    computador: any;
};

function Computador({computador}: Props) {

    const [computador_status, ] = React.useState<string>(computador.computador_status || 'Em Funcionamento');
    const [equipamento, ] = React.useState<string>('Computador');
    const [modelo, ] = React.useState<string>(computador.modelo || '');
    const [dataAquisicao, ] = React.useState<string>(computador.data_de_aquisicao || '');
    const [dataGarantia, ] = React.useState<string>(computador.data_da_garantia || '');
    const [patrimonio, ] = React.useState<string>(computador.numero_de_patrimonio || '');

    return (
        <>
            <tr>
                <td>
                    <i
                        className="bi bi-circle-fill"
                        style={{
                            color:
                                computador_status === 'Ativo'
                                    ? 'green'
                                    : computador_status === 'Manutencao'
                                    ? 'orange'
                                    : computador_status === 'Desativado'
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
                    <Link to={`/detalhes/computador/${patrimonio}`} className="bi bi-eye" style={{ cursor: "pointer" }}/>
                </td>
            </tr>
        </>
    );
}

export default Computador;

