import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import NovoUsuario from './pages/NovoUsuario';
import EditarUsuario from './pages/EditarUsuario';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/novo" element={<NovoUsuario />} />
        <Route path="/usuarios/:id/editar" element={<EditarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;