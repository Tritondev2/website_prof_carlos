const researchProjects = [
  {
    period: "2022 - 2023",
    title: "Estudo de Mobilidade Semiautônoma em Veículos Terrestres",
    description: "Desenvolvimento de um protótipo de veículo semiautônomo usando a plataforma Arduino, com sistemas inteligentes para auxiliar na navegação, mapeamento, localização e desvio de obstáculos.",
    status: "Concluído",
    team: ["Carlos André Guerra Fonseca (Coordenador)"],
  },
  {
    period: "2015 - 2016",
    title: "Protótipo de veículo autônomo inteligente utilizando arduíno",
    description: "Este projeto visou estudar a automação de veículos terrestres com a utilização de sistemas inteligentes baseados no conhecimento para auxiliar a sua navegação, incluindo a construção de uma maquete de cidade para testes.",
    status: "Concluído",
    team: ["Carlos André Guerra Fonseca (Coordenador)", "Moaberdã Gomes Freire (Integrante)"],
  },
  {
    period: "2013 - 2014",
    title: "Aplicação de Sistemas Inteligentes Híbridos na Indústria",
    description: "Pesquisa sobre a aplicação de sistemas híbridos no ambiente industrial.",
    status: "Concluído",
    team: ["Carlos André Guerra Fonseca (Coordenador)", "Fábio Meneghetti Ugulino de Araújo (Integrante)", "Camara, Marconi (Integrante)"],
  },
  {
    period: "2006 - 2007",
    title: "Web services harbor",
    description: "O projeto visou facilitar o desenvolvimento de serviços web para dispositivos móveis, utilizando um sistema multiagentes para adaptar o conteúdo (vídeo, texto, fotos) às capacidades de cada aparelho.",
    status: "Concluído",
    team: ["Alberto Signoretti (Coordenador)", "Carlos André Guerra Fonseca (Integrante)"],
  }
];

export default function ProjetosPesquisa() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Projetos de Pesquisa</h1>
        <p className="text-lg text-gray-600 mt-2">
          Conheça as linhas de pesquisa e os projetos desenvolvidos ao longo da minha carreira.
        </p>
      </div>

      <div className="space-y-8">
        {researchProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-sm font-semibold text-gray-500 mb-1">{project.period}</p>
            <h2 className="text-2xl font-bold mb-3 text-blue-900">{project.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className={`px-3 py-1 text-sm font-bold rounded-full ${project.status === "Concluído" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                {project.status}
              </span>
              <div className="flex-grow">
                <h4 className="font-semibold">Equipe:</h4>
                <p className="text-sm text-gray-600">{project.team.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}