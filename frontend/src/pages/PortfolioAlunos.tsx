const studentProjects = [
  {
    title: "ComunicaJF: Sistema de Gerenciamento de Informes da Justiça Federal no RN",
    student: "Bruno de Oliveira Mendonça",
    year: "2018",
    description: "Desenvolvimento de um sistema para otimizar a comunicação interna da Justiça Federal do Rio Grande do Norte.",
  },
  {
    title: "PLATAFORMA ROBÓTICA LOW COST PARA ESTUDOS DE MOBILIDADE SEMIAUTÔNOMAS",
    student: "Moaberdã Gomes Freire",
    year: "2015",
    description: "Criação de uma plataforma robótica de baixo custo para investigações e testes em mobilidade semiautônoma.",
  },
  {
    title: "USO DO SCRATCH COMO FERRAMENTA DE APOIO AO ENSINO DE MATEMÁTICA BÁSICA",
    student: "Edilene André Alves",
    year: "2015",
    description: "Aplicação da ferramenta Scratch para o desenvolvimento de jogos e animações como apoio ao ensino de matemática.",
  },
  {
    title: "CLAYMORE: Uma Alternativa para o Ensino de Algoritmos",
    student: "Jucieny Dantas Santos",
    year: "2015",
    description: "Proposta e desenvolvimento de uma nova ferramenta para auxiliar no processo de ensino e aprendizagem de algoritmos.",
  },
  {
    title: "ROBÔCICLANDOM: Robô com Materiais Alternativos Incorporados ao Arduino",
    student: "Mariêta Cunha do Nascimento",
    year: "2014",
    description: "Construção de um robô educacional utilizando materiais alternativos e a plataforma Arduino para fins didáticos.",
  },
];

export default function PortfolioAlunos() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Portfólio de Trabalhos de Alunos</h1>
        <p className="text-lg text-gray-600 mt-2">
          Uma galeria de destaque com projetos de conclusão de curso orientados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studentProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="p-6 flex-grow">
              <p className="text-sm font-semibold text-blue-700 mb-1">{project.year}</p>
              <h2 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
            <div className="bg-gray-50 p-4 border-t">
              <p className="text-sm font-medium text-gray-600">Autor(a): {project.student}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}