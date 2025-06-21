import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroEquipamentos from './pages/CadastroEquipamentos';
import Login from './pages/LoginPage';
import ListaEquipamentos from './pages/ListaEquipamentos';
import ListaManutencoes from './pages/ListaManutencoes';
import ProtectedRoute from './components/ProtectedRoute';
import DetalhesComputador from './pages/DetalhesComputador';
import DetalhesEquipamento from './pages/DetalhesEquipamento';
import EditarComputador from './pages/EditarComputador';
import EditarEquipamento from './pages/EditarEquipamento';
import ListaUsuarios from './pages/ListaUsuarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastro/equipamentos"
          element={
            <ProtectedRoute>
              <CadastroEquipamentos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lista/equipamentos"
          element={
            <ProtectedRoute>
              <ListaEquipamentos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lista/manutencoes"
          element={
            <ProtectedRoute>
              <ListaManutencoes />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/detalhes/computador/:numero_de_patrimonio" 
          element={
            <ProtectedRoute>
              <DetalhesComputador />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/detalhes/equipamento/:numero_de_patrimonio"
          element={
            <ProtectedRoute>
              <DetalhesEquipamento />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/detalhes/computador/editar/:numero_de_patrimonio"
          element={
            <ProtectedRoute>
              <EditarComputador />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/detalhes/equipamento/editar/:numero_de_patrimonio"
          element={
            <ProtectedRoute>
              <EditarEquipamento />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <ListaUsuarios />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
