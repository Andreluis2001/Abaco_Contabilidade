import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Props = {
    usuario: any;
};

function Computador({usuario}: Props) {

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
                                cargo === 'admin'
                                    ? 'yellow'
                                    : cargo === 'tecnico'
                                    ? 'blue'
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

