// src/pages/LandingPage.tsx
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-green-600 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
        Bem-vindo ao Espaço Acadêmico do Prof. Dr. Carlos André
      </h1>
      <p className="text-xl max-w-3xl mb-8 animate-fade-in-up">
        Uma plataforma completa com materiais didáticos, projetos de pesquisa, publicações e um espaço interativo para explorarmos juntos o universo do conhecimento.
      </p>
      <Link
        to="/home"
        className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-blue-900 font-bold text-lg rounded-full shadow-lg hover:bg-white hover:scale-105 transform transition-all duration-300"
      >
        Explorar o Site
        <ArrowRightIcon className="w-6 h-6" />
      </Link>
    </div>
  );
}