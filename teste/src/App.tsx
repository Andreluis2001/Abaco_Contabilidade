import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroEquipamentos from './pages/CadastroEquipamentos';
import Login from './pages/LoginPage';
import ListaEquipamentos from './pages/ListaEquipamentos';
import ListaManutencoes from './pages/ListaManutencoes';
import RegistroManutencoes from './pages/RegistroManutencoes';
import ProtectedRoute from './components/ProtectedRoute';

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
          path="/registro/manutencoes"
          element={
            <ProtectedRoute>
              <RegistroManutencoes />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
