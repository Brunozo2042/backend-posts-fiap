import request from "supertest";
import mongoose from "mongoose";
import { app } from "../app.js"; // Certifique-se de exportar o app em app.js

const MONGO_TEST_URI =
    process.env.MONGO_TEST_URI || "mongodb://localhost:27017/postsdb_test";

beforeAll(async () => {
    await mongoose.connect(MONGO_TEST_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe("Posts API", () => {
    let postId;

    it("deve criar um novo post", async () => {
        const res = await request(app).post("/posts").send({
            title: "Teste",
            content: "Conteúdo",
            author: "Autor",
            userId: 1,
            urlImage: "http://image.url",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("_id");
        postId = res.body._id;
    });

    it("deve listar todos os posts", async () => {
        const res = await request(app).get("/posts");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("deve buscar um post por ID", async () => {
        const res = await request(app).get(`/posts/${postId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("_id", postId);
    });

    it("deve atualizar um post", async () => {
        const res = await request(app)
            .put(`/posts/${postId}`)
            .send({ title: "Atualizado" });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe("Atualizado");
    });

    it("deve buscar posts por palavra-chave", async () => {
        // Cria e atualiza um post antes, se necessário
        const post = await request(app).post("/posts").send({
            title: "Palavra-chave",
            content: "Conteúdo",
            author: "Autor",
            userId: 1,
            urlImage: "http://image.url",
        });

        const res = await request(app).get("/posts/search?q=Palavra-chave");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].title).toBe("Palavra-chave");
    });

    it("deve remover um post", async () => {
        // Cria um post só para este teste
        const post = await request(app).post("/posts").send({
            title: "Para Remover",
            content: "Conteúdo",
            author: "Autor",
            userId: 1,
            urlImage: "http://image.url",
        });
        const idParaRemover = post.body._id;

        const res = await request(app).delete(`/posts/${idParaRemover}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message");
    });
});
