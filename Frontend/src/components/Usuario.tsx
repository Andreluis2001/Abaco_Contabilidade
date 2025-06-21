import React from "react";
import "../styles/style.css";

type Props = {
    usuario: any;
};

function Usuario({usuario}: Props) {

    const [nome] = React.useState<string>(usuario.nome || '');
    const [email] = React.useState<string>(usuario.email || '');
    const [telefone] = React.useState<string>(usuario.telefone || '');
    const [tipo] = React.useState<string>(usuario.tipo || '');


    return (
        <>
            <tr>
                <td>
                    <i
                        className="bi bi-circle-fill"
                        style={{
                            color:
                                tipo === 'admin'
                                ? 'green'
                                : tipo === 'tecnico'
                                ? 'orange'
                                : 'gray'
                        }}
                    ></i>
                </td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{telefone}</td>
            </tr>
        </>
    );
}

export default Usuario;

