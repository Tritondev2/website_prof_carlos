// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';

// Contexto
import { AuthProvider } from './context/AuthContext';

// Componentes
import Navbar from "./components/Navbar";
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal'; // Importar RegisterModal

// Páginas (lembre-se de importar todas as suas)
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BlogPesquisa from './pages/BlogPesquisa';
import MateriaisDidaticos from './pages/MateriaisDidaticos';
import ProjetosPesquisa from './pages/ProjetosPesquisa';
import PortfolioAlunos from './pages/PortfolioAlunos';
import MapaEstudos from './pages/MapaEstudos';
import SobreProfessor from './pages/SobreProfessor';
import FAQ from './pages/FAQ';
import ExtensaoEnsinoIA from './pages/ExtensaoEnsinoIA';
import NovoPost from './pages/NovoPost';


// Componente interno para gerenciar o layout e o estado dos modais
function AppLayout() {
  const location = useLocation();
  // O estado agora pode ser 'login', 'register', ou 'none'
  const [modal, setModal] = useState<'login' | 'register' | 'none'>('none');

  const showNavbar = location.pathname !== '/';

  const handleCloseModal = () => setModal('none');

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {showNavbar && <Navbar onLoginClick={() => setModal('login')} />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogPesquisa />} />
          <Route path="/materiais" element={<MateriaisDidaticos />} />
          <Route path="/projetos" element={<ProjetosPesquisa />} />
          <Route path="/portfolio" element={<PortfolioAlunos />} />
          <Route path="/mapa-estudos" element={<MapaEstudos />} />
          <Route path="/sobre" element={<SobreProfessor />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/extensao-ensino-ia" element={<ExtensaoEnsinoIA />} />
          <Route path="/blog/novo" element={<NovoPost />} />
        </Routes>
      </div>
      
      <LoginModal 
        isOpen={modal === 'login'}
        onClose={handleCloseModal}
        onSwitchToRegister={() => setModal('register')}
      />
      <RegisterModal
        isOpen={modal === 'register'}
        onClose={handleCloseModal}
        onSwitchToLogin={() => setModal('login')}
      />
    </div>
  );
}

// Componente principal App
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}

export default App;