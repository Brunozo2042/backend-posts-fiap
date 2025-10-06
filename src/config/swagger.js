import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Blog Professores e Alunos",
            version: "1.0.0",
            description: "Documentação da API do Tech Challenge Fase 2",
        },
    },
    apis: ["./src/routes/*.js"],
    tags: [
        { name: "Usuários", description: "Operações relacionadas a usuários" },
        { name: "Posts", description: "Operações relacionadas a posts" },
    ],
});
