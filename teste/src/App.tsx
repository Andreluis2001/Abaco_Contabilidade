import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Make sure ./pages/PaginaHome/Home.tsx exists
import CadastroEquipamentos from './pages/CadastroEquipamentos'; // Make sure ./pages/CadastroEquipamentos/CadastroEquipamentos.tsx exists
import Login from './pages/LoginPage'; // Make sure ./pages/LoginPage/LoginPage.tsx exists
import ListaEquipamentos from './pages/ListaEquipamentos'; // Make sure ./pages/ListaEquipamentos/ListaEquipamentos.tsx exists
import ListaManutencoes from './pages/ListaManutencoes'; // Make sure ./pages/ListaManutencoes/ListaManutencoes.tsx exists
import RegistroManutencoes from './pages/RegistroManutencoes'; // Make sure ./pages/RegistroManutecoes/RegistroManutencoes.tsx exists
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
