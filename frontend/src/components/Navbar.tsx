// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { useAuth } from '../context/AuthContext'; // Importar o hook de autenticação

// Atualizar o array de navegação
const navItems = [
    { label: "Home", to: "/home" }, // Aponta para /home
    { label: "Biografia", to: "/sobre" },
    { label: "Blog", to: "/blog" },
    { label: "Materiais", to: "/materiais" },
    { label: "Projetos", to: "/projetos" },
    { label: "Portfólio", to: "/portfolio" },
    { label: "Mapa de Estudos", to: "/mapa-estudos" },
    { label: "Extensão/IA", to: "/extensao-ensino-ia" },
    { label: "FAQ", to: "/faq" },
];

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  const location = useLocation();
  const tabsRef = useRef<HTMLUListElement>(null);
  const { isAuthenticated, logout } = useAuth(); // Obter estado e função de logout

  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0, opacity: 0 });

  useLayoutEffect(() => {
    // Adicionar /home como um caminho válido para o slider
    const activePath = location.pathname === "/" ? "/home" : location.pathname;
    const activeTab = tabsRef.current?.querySelector<HTMLLIElement>(`li[data-path='${activePath}']`);

    if (activeTab) {
      setSliderStyle({
        width: activeTab.clientWidth,
        left: activeTab.offsetLeft,
        opacity: 1,
      });
    } else {
        setSliderStyle({ width: 0, left: 0, opacity: 0 });
    }
  }, [location.pathname]);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-green-600 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-xl tracking-wide">
            Prof. Carlos André
          </span>
          
          <div className="flex items-center gap-8">
            <div className="relative">
              <ul ref={tabsRef} className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li
                    key={item.to}
                    data-path={item.to}
                    className="relative"
                  >
                    <Link
                      to={item.to}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
                      ${
                        location.pathname === item.to ? "text-white" : "text-blue-200 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="absolute bottom-[-8px] h-1 bg-cyan-300 rounded-full transition-all duration-500 ease-in-out"
                style={sliderStyle}
              />
            </div>
            
            {/* Botão de Login / Logout Condicional */}
            <div>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}