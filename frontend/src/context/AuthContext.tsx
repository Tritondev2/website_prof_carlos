import { createContext, useState, useContext, type ReactNode, useEffect } from 'react';

// Tipagem para o valor do nosso contexto
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string | null; // Adicionamos o token para fazer chamadas autenticadas
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook customizado para facilitar o uso do contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

// O componente Provedor que irá envolver nossa aplicação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  // Ao carregar a aplicação, verificar se já existe um token no localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // A função de login agora salva o token no estado e no localStorage
  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  // A função de logout remove o token
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const value = {
    isAuthenticated: !!token, // O usuário está autenticado se houver um token
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}