import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Props = {
    usuario: any;
};

function Computador({usuario}: Props) {

    const [status, ] = React.useState<string>(usuario.status || 'Contratado');
    const [nome, ] = React.useState<string>(usuario.username || '-');
    const [email, ] = React.useState<string>(usuario.email || '-');
    const [cargo, ] = React.useState<string>(usuario.role || '-');
    const [id, ] = React.useState<string>(usuario.id || '-');

    return (
        <>
            <tr>
                <td>
                    <i
                        className="bi bi-circle-fill"
                        style={{
                            color:
                                status === 'Contratado'
                                    ? 'green'
                                    : status === 'Em Manutencao'
                                    ? 'orange'
                                    : status === 'Desativado'
                                    ? 'red'
                                    : 'gray'
                        }}
                    ></i>
                </td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{cargo}</td>
                <td>
                    <Link to={`/detalhes/usuario/${id}`} className="bi bi-eye" style={{ cursor: "pointer" }}/>
                </td>
            </tr>
        </>
    );
}

export default Computador;

