import { Router } from "express";
import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts,
} from "../controllers/posts.controller.js";

const router = Router();

/**
 * @swagger
 * /posts/search:
 *   get:
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
router.get("/posts/search", searchPosts);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     responses:
 *       200:
 *         description: Lista de posts
 */
router.get("/post", getAllPosts);

/**
 * @swagger
 * /posts/{id}:
 *   get:
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
router.get("/posts/:id", getPostById);

/**
 * @swagger
 * /posts:
 *   post:
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
 *     responses:
 *       201:
 *         description: Post criado
 */
router.post("/posts", createPost);

/**
 * @swagger
 * /posts/{id}:
 *   put:
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
router.put("/posts/:id", updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
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
router.delete("/posts/:id", deletePost);

export default router;
