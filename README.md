# Website do Prof. Dr. Carlos André Guerra Fonseca

Repositório do portal acadêmico desenvolvido como projeto da disciplina **Desenvolvimento Web — Ciência da Computação/UERN**.  
O site reúne biografia, blog de pesquisa, repositório de materiais didáticos, projetos, portfólio de alunos, mapa de estudos, iniciativas de extensão/ensino e FAQ dinâmico, tudo em uma SPA moderna com backend Node.

---

## 1. Visão Geral

O objetivo do projeto é oferecer uma vitrine online centralizada para as atividades do professor, facilitando:

* divulgação de publicações e linhas de pesquisa;  
* disponibilização de slides, artigos, códigos e exercícios;  
* interação com estudantes via posts, comentários e FAQ;  
* exposição de trabalhos orientados e iniciativas de extensão;  
* navegação fluida e responsiva em desktop e mobile.

---

## 2. Funcionalidades Principais

| Módulo | Descrição resumida |
| ------ | ------------------ |
| **Biografia & Linha do Tempo** | Página com trajetória acadêmica e marcos da carreira |
| **Blog de Pesquisa** | CRUD de posts e comentários protegido por autenticação JWT |
| **Materiais Didáticos** | Listagem e download de PDFs, slides e tutoriais |
| **Projetos de Pesquisa** | Cards filtráveis com status, equipe e resumo |
| **Portfólio de Trabalhos** | Galeria de TCCs/monografias orientadas |
| **Mapa de Estudos** | Roadmap interativo em estilo linha vertical |
| **Extensão / Ensino / IA** | Projetos que conectam universidade à sociedade |
| **FAQ Dinâmico** | Accordion com dúvidas frequentes dos alunos |
| **Auth** | Registro, login, logout e proteção de rotas |

---

## 3. Arquitetura e Tecnologias

| Camada | Stack / Bibliotecas |
| ------ | ------------------- |
| **Frontend** | React 18, Vite, TypeScript, React Router, TailwindCSS |
| **Backend**  | Node 18, Express, sqlite3, bcryptjs, jsonwebtoken |
| **Comunicação** | REST/JSON sobre HTTP (porta 3001) |
| **Persistência** | SQLite3 (arquivo local `database.db`) |
| **Autenticação** | JSON Web Tokens (header `Authorization: Bearer <token>`) |

![](docs/diagrama_er_website_professor.png)<!-- copia a Figura 11 aqui ou referencie o link acima -->

---

## 4. Estrutura de Diretórios

prof-carlos-website/
├─ backend/
│ ├─ server.js
│ ├─ routes/
│ ├─ controllers/
│ └─ database.js
└─ frontend/
├─ src/
│ ├─ components/
│ ├─ pages/
│ ├─ context/AuthContext.tsx
│ └─ main.tsx
└─ vite.config.ts

---

## 5. Como Executar Localmente

### Pré-requisitos

* Node.js ≥ 18  
* Yarn (ou npm >= 9)

### Passo a passo


# 1. Clone o repositório
git clone https://github.com/<usuario>/prof-carlos-website.git
cd prof-carlos-website

# 2. Instale e execute o backend
cd backend
yarn install
yarn node server.js   # sobe em http://localhost:3001

# 3. Em outro terminal, instale e execute o frontend
cd ../frontend
yarn install
yarn dev              # Vite em http://localhost:5173

Atenção: não há variáveis de ambiente obrigatórias para rodar localmente; o banco SQLite é criado automaticamente.
---


## 6. Testes Básicos

| Caso | Passos | Resultado Esperado |
|------|--------|--------------------|
| **Smoke-test** | `yarn node server.js` + `yarn dev` | SPA carrega em `localhost:5173` sem erros de console |
| **Cadastro/Login** | Registrar usuário ➜ login | Token JWT emitido; rotas protegidas acessíveis |
| **CRUD Post** | Criar, editar, deletar post logado | Operações retornam HTTP 200; anônimo recebe 401 |
| **Download Material** | Clicar em *Baixar* em Materiais | Arquivo PDF retorna HTTP 200 |
| **Responsividade** | Teste Chrome DevTools (375 px–1440 px) | Layout adapta sem quebra |

---

## 7. Próximos Passos

1. **Armazenamento de Arquivos**  
   • Migrar PDFs/medias para S3 ou serviço equivalente.  
2. **Cobertura de Testes**  
   • Frontend: React Testing Library + Jest.  
   • Backend: SuperTest + Jest (API).  
3. **CI/CD**  
   • Configurar GitHub Actions para lint, build, test e deploy automático.  
4. **Conteúdo Adicional**  
   • Aguardar material oficial do professor para preencher seções hoje enxutas (FAQ, Blog, Extensão).  

