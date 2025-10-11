# 🚀 Tech Challenge - Fase 2: Backend de Blog para Professores e Alunos

Este projeto faz parte do desafio prático da Fase 2 do Tech Challenge FIAP.

## 🎯 Objetivo

Desenvolver uma API RESTful para um sistema de blog, onde professores podem criar, editar e remover postagens, e alunos podem consultar e buscar conteúdos publicados.

## ✨ Funcionalidades

-   Listar todos os posts
-   Buscar post por ID
-   Criar novo post
-   Editar post existente
-   Remover post
-   Buscar posts por palavra-chave (título ou conteúdo)

## 🛠️ Tecnologias Utilizadas

-   Node.js
-   Express
-   MongoDB (Mongoose)
-   Docker
-   GitHub Actions (CI/CD)
-   Jest e Supertest (testes)

## 📖 Documentação Swagger

Após iniciar o backend, acesse a documentação interativa da API em:

```
http://localhost:3000/api-docs
```

Você poderá visualizar, testar e explorar todos os endpoints da API diretamente pelo navegador.

---

## 💻 Como rodar localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/Brunozo2042/backend-posts-fiap
    cd backend-posts-fiap
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Suba o MongoDB com Docker Compose:
    ```bash
    docker-compose up -d mongo
    ```
4. Crie um arquivo `.env` na raiz:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/postsdb
    ```
5. Inicie o backend:
    ```bash
    npm run dev
    ```

## 🔗 Endpoints

### 📚 Posts

| Método | Endpoint               | Descrição                     |
| ------ | ---------------------- | ----------------------------- |
| GET    | `/posts`               | Lista todos os posts          |
| GET    | `/posts/:id`           | Retorna post por ID           |
| POST   | `/posts`               | Cria novo post                |
| PUT    | `/posts/:id`           | Edita post existente          |
| DELETE | `/posts/:id`           | Remove post                   |
| GET    | `/posts/search?q=algo` | Busca posts por palavra-chave |

### 👤 Usuários

| Método | Endpoint     | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/users/`    | Lista todos os usuários |
| GET    | `/users/:id` | Retorna usuário por ID  |
| POST   | `/users`     | Cria novo usuário       |
| PUT    | `/users/:id` | Edita usuário existente |
| DELETE | `/users/:id` | Remove usuário          |

## 🔒 Medidas de Segurança

-   Validação de dados obrigatórios em todas as rotas de criação e atualização (campos obrigatórios, tipos e formatos).
-   Filtros de acesso por perfil (ex: alunos só visualizam posts publicados e não excluídos).
-   Soft delete: posts não são removidos do banco, apenas marcados como `excluded`.
-   Tratamento de erros centralizado, retornando mensagens claras e status HTTP adequados.
-   Testes automatizados para garantir integridade das regras de negócio e segurança das rotas.
-   Documentação Swagger para facilitar o uso correto da API e evitar uso indevido dos endpoints.

## 🧪 Testes

Execute todos os testes automatizados:

```bash
npm test
```

## ⚙️ CI/CD

O projeto utiliza GitHub Actions para rodar testes automatizados a cada push ou pull request na branch main.

## 🗂️ Estrutura de Pastas

```
📦 src/
 ┣ 📁 config/
 ┣ 📁 controllers/
 ┣ 📁 middlewares/
 ┣ 📁 models/
 ┣ 📁 routes/
 ┣ 📁 services/
 ┣ 📁 tests/
 ┣ 📄 app.js
 ┗ 📄 server.js
📦 docker/
📦 .github/workflows/
📄 .env
📄 package.json
📄 README.md
```

## 👤 Autor

-   Bruno Henrique Miranda de Oliveira (RM365640)
-   Gustavo Rosano Teixeira (RM366434)
-   Janaina Yasmin De Paula Santos (RM366482)
-   Ricardo Anderson Dos Santos Junior (RM366467)
-   Tiago Antônio Borborema (RM365103)
