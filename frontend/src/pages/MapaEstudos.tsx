
const learningPath = [
  { stage: 1, title: "Fundamentos Essenciais", description: "Base sólida em lógica, algoritmos e programação.", topics: ["Introdução à Ciência da Computação", "Teoria dos Grafos"] },
  { stage: 2, title: "Arquitetura e Sistemas", description: "Compreensão de como o hardware e os sistemas de informação funcionam.", topics: ["Arquitetura de Computadores", "Sistemas de Informação"] },
  { stage: 3, title: "Inteligência Artificial", description: "Introdução aos conceitos que permitem que máquinas 'pensem'.", topics: ["Inteligência Artificial", "Redes Neurais Artificiais"] },
  { stage: 4, title: "Aplicações Avançadas", description: "Exploração de áreas especializadas e de fronteira.", topics: ["Sistemas Multiagentes", "Controle Inteligente Híbrido", "Computação Gráfica"] },
  { stage: 5, title: "Pesquisa e Desenvolvimento", description: "Aplicação do conhecimento em projetos práticos e científicos.", topics: ["Metodologia Para o Trabalho Científico", "Trabalho de Conclusão de Curso"] },
];

export default function MapaEstudos() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Mapa de Estudos Interativo</h1>
        <p className="text-lg text-gray-600 mt-2">
          Uma trilha de conhecimento sugerida para se aprofundar na Ciência da Computação.
        </p>
      </div>

      <div className="relative border-l-4 border-blue-200 ml-4">
        {/* CORREÇÃO: Removido o 'index' não utilizado do map */}
        {learningPath.map((step) => (
          <div key={step.stage} className="mb-10 ml-8">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full -left-5 ring-8 ring-white text-white font-bold">{step.stage}</span>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{step.title}</h2>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex flex-wrap gap-2">
                {step.topics.map(topic => (
                  <span key={topic} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{topic}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}