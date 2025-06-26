
const extensionProjects = [
    {
        period: "2023 - 2024",
        title: "Web Cidadã",
        description: "Projeto com o objetivo de amenizar o problema da Inclusão Digital na comunidade da zona norte de Natal-RN, ensinando a utilizar ferramentas computacionais de forma adequada para extrair conhecimento e usufruir dos serviços oferecidos pela Internet.",
    },
    {
        period: "2013 - 2014",
        title: "Construção de Jogos como Ferramenta Pedagógica",
        description: "Utilização de uma metodologia de construção de jogos eletrônicos (com Scratch e Lua) como ferramenta auxiliar no processo de aprendizagem da física, matemática, raciocínio lógico e planejamento algorítmico para alunos do ensino médio.",
    },
     {
        period: "2012 - 2013",
        title: "Uso de jogos como ferramenta pedagógica no ensino da matemática, física e lógica de programação",
        description: "Este projeto visa utilizar uma metodologia de construção de jogos eletrônicos como ferramenta pedagógica auxiliar no processo de aprendizagem do raciocínio lógico e do planejamento algorítmico.",
    }
];

const teachingProjects = [
    {
        period: "2019 - Atual",
        title: "Ciclo de Palestras em Ciências, Tecnologia e Sociedade - Sexta das Ciências",
        description: "Um ciclo de palestras e debates contínuo nas áreas de Ciências e Tecnologias com impacto na sociedade local, envolvendo alunos de graduação.",
    }
];

export default function ExtensaoEnsinoIA() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Iniciativas de Extensão e Ensino</h1>
        <p className="text-lg text-gray-600 mt-2">
            Projetos que conectam a universidade com a sociedade e promovem novas formas de aprendizado.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-green-500 pb-2">Projetos de Extensão</h2>
        <div className="space-y-6">
            {extensionProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                    <p className="text-sm font-semibold text-gray-500 mb-1">{project.period}</p>
                    <h3 className="text-2xl font-bold mb-2 text-green-800">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-purple-500 pb-2">Projetos de Ensino</h2>
        <div className="space-y-6">
            {teachingProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                    <p className="text-sm font-semibold text-gray-500 mb-1">{project.period}</p>
                    <h3 className="text-2xl font-bold mb-2 text-purple-800">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}