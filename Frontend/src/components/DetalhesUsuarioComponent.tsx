import "../styles/detalhes.css";
import { Link } from "react-router-dom";

type Props = {
    usuario?: any;
};

function DetalhesUsuarioComponent({ usuario }: Props) {
    const nome = usuario?.username || '-';
    const email = usuario?.email || '-';
    const cargo = usuario?.role || '-';
    const status = usuario?.status || '-';

    return (
        <div className="equipment-detail">
            <div className="equipment-header">
                <div className="equipment-icon">
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className="equipment-id">{nome}</div>
            </div>

            <div className="section-title">Informações Gerais</div>
            <table className="specs-table">
                <tbody>
                    <tr>
                        <td className="spec-label">E-mail</td>
                        <td className="spec-value">{email}</td>
                    </tr>
                    <tr>
                        <td className="spec-label">Cargo</td>
                        <td className="spec-value">{cargo}</td>
                    </tr>
                    <tr>
                        <td className="spec-label">Status</td>
                        <td className="spec-value">{status}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default DetalhesUsuarioComponent;