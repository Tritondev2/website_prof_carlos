export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao site do Professor Carlos André</h1>
      <p className="mb-4">
        Aqui você encontra informações sobre minha trajetória acadêmica, projetos de pesquisa, materiais didáticos e muito mais.
      </p>
      <ul className="list-disc list-inside text-lg">
        <li>Biografia e Linha do Tempo</li>
        <li>Blog de Pesquisa</li>
        <li>Repositório de Materiais Didáticos</li>
        <li>Projetos de Pesquisa</li>
        <li>Portfólio de Trabalhos de Alunos</li>
        <li>Mapa de Estudos Interativo</li>
        <li>Extensão, Ensino e Inteligência Artificial</li>
        <li>Perguntas & Respostas (FAQ)</li>
      </ul>
    </main>
  );
}
