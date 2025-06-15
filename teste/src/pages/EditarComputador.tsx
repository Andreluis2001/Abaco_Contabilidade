import '../styles/edit.css';
import Navbar from '../components/Navbar';
import EditarComputadorComponent from '../components/EditarComputadorComponent';
import { useLocation } from 'react-router-dom';


type Props = {}

function EditarComputador({}: Props) {

  const location = useLocation();
  const computador = location.state?.computador;

  return (
    <>
        <Navbar />
        <div className="equipment-detail">
            <EditarComputadorComponent computador={computador} />
        </div>
    </>
  )
}

export default EditarComputador