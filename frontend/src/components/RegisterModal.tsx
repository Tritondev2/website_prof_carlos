import { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/auth/register', { // CORRIGIDO
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Falha ao registrar.');
      }

      setSuccess('Registro bem-sucedido! Agora você pode fazer o login.');
      setTimeout(() => {
        onSwitchToLogin();
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    }
  };
  
  // O restante do JSX continua o mesmo...
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">&times;</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Registrar Nova Conta</h2>
        <form onSubmit={handleRegister}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reg-email">Email</label>
            <input
              type="email" id="reg-email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="reg-password">Senha</label>
            <input
              type="password" id="reg-password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
            Criar Conta
          </button>
        </form>
        <p className="text-center mt-4">
          Já tem uma conta?{' '}
          <button onClick={onSwitchToLogin} className="text-blue-700 hover:underline font-semibold">Faça Login</button>
        </p>
      </div>
    </div>
  );
}