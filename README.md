# 📚 BackEnd de Blogging para Professores e Alunos

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Tech Challenge - Fase 2**.  
O objetivo é criar uma aplicação de blogging onde professores possam publicar conteúdos e alunos possam acessar e buscar postagens de forma prática e centralizada.

O sistema foi construído utilizando **Node.js** no back-end, com persistência em banco de dados, containerização com Docker e automação de testes via GitHub Actions.

---

## 🚀 Funcionalidades

-   **Listar Postagens** (`GET /posts`)  
    Lista todos os posts disponíveis na plataforma.

-   **Ler Postagem por ID** (`GET /posts/:id`)  
    Retorna o conteúdo completo de um post específico.

-   **Criar Postagem** (`POST /posts`)  
    Permite que professores criem novos posts.

-   **Editar Postagem** (`PUT /posts/:id`)  
    Permite que professores editem posts existentes.

-   **Excluir Postagem** (`DELETE /posts/:id`)  
    Permite que professores excluam posts.

-   **Buscar Postagem por Palavra-Chave** (`GET /posts/search?query=palavra`)  
    Retorna posts que contenham o termo no título ou conteúdo.

---

## 🛠️ Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
-   [Express](https://expressjs.com/) — Framework para criação de APIs
-   [MongoDB](https://www.mongodb.com/) — Banco de dados NoSQL
-   [Mongoose](https://mongoosejs.com/) — ODM para modelagem de dados
-   [Docker](https://www.docker.com/) — Containerização da aplicação
-   [GitHub Actions](https://docs.github.com/actions) — CI/CD para testes e deploy
-   [Jest](https://jestjs.io/) — Testes unitários
-   [Supertest](https://github.com/ladjs/supertest) — Testes de integração

---

## 📂 Estrutura de Pastas

```
📂 projeto-blog
│
├── 📂 src
│   ├── 📂 config         # Configurações da aplicação
│   ├── 📂 models         # Modelos de dados
│   ├── 📂 controllers    # Lógica de negócio
│   ├── 📂 routes         # Rotas da API
│   ├── 📂 services       # Regras de negócio
│   ├── 📂 middlewares    # Middlewares personalizados
│   ├── 📂 tests          # Testes unitários e de integração
│   ├── app.js            # Configuração do Express
│   └── server.js         # Inicialização do servidor
│
├── 📂 docker             # Arquivos do Docker
│
├── .github/workflows     # Workflows do GitHub Actions
├── .env                  # Variáveis de ambiente
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Brunozo2042/backend-posts-fiap
cd backend-posts-fiap
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog
```

### 4️⃣ Rodar a aplicação no modo desenvolvimento

```bash
npm run dev
```

---

## 🐳 Rodando com Docker

### Build da imagem

```bash
docker build -t blog-app .
```

### Executar o container

```bash
docker run -p 3000:3000 blog-app
```

---

## 🧪 Executando os Testes

Rodar todos os testes com cobertura:

```bash
npm test
```

---

## 📜 Endpoints

| Método | Endpoint                   | Descrição                     |
| ------ | -------------------------- | ----------------------------- |
| GET    | `/posts`                   | Lista todos os posts          |
| GET    | `/posts/:id`               | Retorna post por ID           |
| POST   | `/posts`                   | Cria novo post                |
| PUT    | `/posts/:id`               | Edita post existente          |
| DELETE | `/posts/:id`               | Remove post                   |
| GET    | `/posts/search?query=algo` | Busca posts por palavra-chave |

---

## 📄 Licença

Este projeto é de uso acadêmico para o Tech Challenge da FIAP.  
Todos os direitos reservados aos autores.

---

## 👥 Autores

-   Bruno Henrique Miranda de Oliveira (RM365640)
