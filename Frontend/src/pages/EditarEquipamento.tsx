import '../styles/edit.css';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import EditarEquipamentoComponent from '../components/EditarEquipamentoComponent';


type Props = {}

function EditarEquipamento({}: Props) {

  const location = useLocation();
  const equipamento = location.state?.equipamento;

  return (
    <>
        <Navbar />
        <div className="equipment-detail">
            <EditarEquipamentoComponent equipamentoData={equipamento} />
        </div>
    </>
  )
}

export default EditarEquipamento;