import React, { useState } from 'react'; // CORREÇÃO: useState importado como valor

const faqData = [
  {
    question: "Quais os critérios de avaliação da disciplina?",
    answer: "Os critérios de avaliação são compostos por duas provas teóricas (P1 e P2), trabalhos práticos (T) e um projeto final (PF). A média final é calculada pela fórmula: (P1*0.3) + (P2*0.3) + (T*0.2) + (PF*0.2). Todos os detalhes são apresentados no plano de ensino no primeiro dia de aula."
  },
  {
    question: "Como funcionam os horários de atendimento para tirar dúvidas?",
    answer: "Meus horários de atendimento são nas terças e quintas, das 16h às 17h, na minha sala no departamento. Recomendo enviar um email com antecedência para agendarmos e eu poder me preparar para a sua dúvida específica."
  },
  {
    question: "Qual a política sobre entrega de trabalhos fora do prazo?",
    answer: "Trabalhos entregues com atraso sofrerão uma penalidade de 20% na nota por dia de atraso, com um limite máximo de 2 dias. Após esse período, o trabalho não será mais aceito. Casos excepcionais devem ser comunicados e justificados previamente."
  },
  {
    question: "Como posso propor um tema para o meu Trabalho de Conclusão de Curso (TCC)?",
    answer: "Se você tem interesse em fazer o TCC sob minha orientação, o primeiro passo é verificar minhas áreas de interesse e projetos de pesquisa. Em seguida, prepare uma breve proposta (1-2 páginas) com o tema, problema, objetivos e uma revisão inicial da literatura. Marque um horário de atendimento para conversarmos sobre sua ideia."
  },
  {
    question: "O material apresentado nos slides é suficiente para estudar para as provas?",
    answer: "Os slides são um guia excelente e cobrem os tópicos centrais da disciplina. No entanto, eles são um resumo. É fundamental complementar o estudo com a bibliografia recomendada (livros e artigos), que aprofunda os conceitos e apresenta exemplos mais detalhados."
  }
];

// CORREÇÃO: Definindo a tipagem para as props do FaqItem
interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqItemProps {
  faq: FaqItemData;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    )
}

export default function FAQ() {
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Perguntas Frequentes (FAQ)</h1>
        <p className="text-lg text-gray-600 mt-2">
          Respostas para as dúvidas mais comuns dos alunos.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        {faqData.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </main>
  );
}