const disciplines = [
  {
    name: "Inteligência Artificial",
    materials: [
      { type: "Slides de Aula", title: "Introdução a Agentes Inteligentes", link: "#" },
      { type: "Código de Exemplo", title: "Busca Heurística em Python", link: "#" },
      { type: "Artigo", title: "Redes Neurais: Fundamentos e Aplicações", link: "#" },
    ],
  },
  {
    name: "Redes Neurais Artificiais",
    materials: [
      { type: "Slides de Aula", title: "Perceptrons e Redes Feedforward", link: "#" },
      { type: "Lista de Exercícios", title: "Exercícios de Backpropagation", link: "#" },
    ],
  },
  {
    name: "Sistemas Multiagentes",
    materials: [
      { type: "Slides de Aula", title: "Modelos de Comunicação e Coordenação", link: "#" },
      { type: "Trabalho Prático", title: "Especificação do Agente Reativo", link: "#" },
    ],
  },
  {
    name: "Computação Gráfica",
    materials: [
      { type: "Slides de Aula", title: "Transformações Geométricas 2D e 3D", link: "#" },
      { type: "Código de Exemplo", title: "Renderização Básica com OpenGL", link: "#" },
    ],
  },
];

export default function MateriaisDidaticos() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Slides de Aula": return "📄";
      case "Código de Exemplo": return "💻";
      case "Artigo": return "📰";
      case "Trabalho Prático": return "🛠️";
      default: return "🔗";
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Repositório de Materiais Didáticos</h1>
        <p className="text-lg text-gray-600 mt-2">
          Acesse materiais de algumas das disciplinas ministradas.
        </p>
      </div>

      <div className="space-y-12">
        {disciplines.map((discipline) => (
          <section key={discipline.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">{discipline.name}</h2>
            <ul className="space-y-3">
              {discipline.materials.map((material, index) => (
                <li key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{getIcon(material.type)}</span>
                    <div>
                      <h3 className="font-semibold">{material.title}</h3>
                      <p className="text-sm text-gray-500">{material.type}</p>
                    </div>
                  </div>
                  <a href={material.link} className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 no-underline">
                    Baixar
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}