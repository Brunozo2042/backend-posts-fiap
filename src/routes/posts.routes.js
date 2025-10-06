import { Router } from "express";
import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts,
} from "../controllers/posts.controller.js";

const routerPosts = Router();

/**
 * @swagger
 * /posts/search:
 *   get:
 *     tags:
 *      - Posts
 *     summary: Busca posts por palavra-chave
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Palavra-chave para busca
 *     responses:
 *       200:
 *         description: Lista de posts encontrados
 */
routerPosts.get("/posts/search", searchPosts);

/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *      - Posts
 *     summary: Lista todos os posts
 *     responses:
 *       200:
 *         description: Lista de posts
 */
routerPosts.get("/posts", getAllPosts);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     tags:
 *      - Posts
 *     summary: Retorna um post por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
routerPosts.get("/posts/:id", getPostById);

/**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *      - Posts
 *     summary: Cria um novo post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               userId:
 *                 type: number
 *               urlImage:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post criado
 */
routerPosts.post("/posts", createPost);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     tags:
 *      - Posts
 *     summary: Atualiza um post existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado
 *       404:
 *         description: Post não encontrado
 */
routerPosts.put("/posts/:id", updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     tags:
 *      - Posts
 *     summary: Remove um post
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post removido
 *       404:
 *         description: Post não encontrado
 */
routerPosts.delete("/posts/:id", deletePost);

export default routerPosts;
