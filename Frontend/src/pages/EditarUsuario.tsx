import '../styles/edit.css';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import EditarUsuarioComponent from '../components/EditarUsuarioComponent';

type Props = {}

function EditarUsuario({}: Props) {

    const location = useLocation();
    const usuario = location.state?.usuario;

    return (
        <>
            <Navbar />
            <div className="equipment-detail">
                <EditarUsuarioComponent usuario={usuario} />
            </div>
        </>
    )
}

export default EditarUsuario;