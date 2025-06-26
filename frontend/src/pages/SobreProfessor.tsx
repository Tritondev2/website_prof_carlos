export default function SobreProfessor() {
  const timelineEvents = [
    { year: "2024", event: "Início da função como Coordenador da Comissão Setorial de Avaliação do Departamento de Ciência da Computação." },
    { year: "2023", event: "Início da função como Coordenador do curso de Tecnologia em Sistemas para Internet." },
    { year: "2019", event: "Início do projeto de ensino 'Ciclo de Palestras em Ciências, Tecnologia e Sociedade - Sexta das Ciências'." },
    { year: "2018", event: "Recebeu o prêmio de Patrono da turma New Scientist, dos formandos do curso de Ciência da Computação da UERN." },
    { year: "2012", event: "Concluiu o Doutorado em Engenharia Elétrica e Computação pela UFRN." },
    { year: "2007", event: "Recebeu o prêmio de primeiro lugar na grande área de Computação do XIII Encontro de Pesquisa e Extensão da UERN." },
    { year: "2005", event: "Concluiu o Mestrado em Engenharia Elétrica pela UFRN." },
    { year: "2004", event: "Início do vínculo como Professor Associado da Universidade do Estado do Rio Grande do Norte (UERN)." },
    { year: "2002", event: "Concluiu a graduação em Engenharia de Computação pela Universidade Potiguar (UnP), recebendo Láurea Estudantil." },
  ];

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50">
      <h1 className="text-4xl font-bold mb-10 text-center">Sobre o Prof. Carlos André</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Resumo Profissional</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Professor Associado da Universidade do Estado do Rio Grande do Norte (UERN), com uma sólida trajetória acadêmica e profissional na área de Ciência da Computação. Possui graduação em Engenharia de Computação pela Universidade Potiguar (2002), mestrado (2005) e doutorado (2012) em Engenharia Elétrica e Computação pela Universidade Federal do Rio Grande do Norte.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Com vasta experiência em ensino e pesquisa, atua principalmente com foco em inteligência artificial, ANFIS, identificação de sistemas e controle inteligente híbrido. Dedica-se a orientar trabalhos de conclusão de curso, projetos de pesquisa e extensão, contribuindo ativamente para o desenvolvimento científico e tecnológico da região.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Áreas de Interesse</h2>
        <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 text-md font-semibold px-4 py-2 rounded-full">Inteligência Artificial</span>
            <span className="bg-green-100 text-green-800 text-md font-semibold px-4 py-2 rounded-full">Engenharia de Computação</span>
            <span className="bg-yellow-100 text-yellow-800 text-md font-semibold px-4 py-2 rounded-full">Identificação de Sistemas</span>
            <span className="bg-purple-100 text-purple-800 text-md font-semibold px-4 py-2 rounded-full">Controle Inteligente Híbrido</span>
            <span className="bg-red-100 text-red-800 text-md font-semibold px-4 py-2 rounded-full">Sistemas e Controles Eletrônicos</span>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Marcos na Carreira</h2>
        <div className="relative border-l-4 border-blue-200">
          <ul className="list-none m-0 p-0">
            {timelineEvents.map((item, index) => (
              <li key={index} className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-white">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
                <p className="text-base font-normal text-gray-600">{item.event}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}