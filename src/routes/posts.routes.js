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
 * GET /posts/search
 * Busca posts por palavra-chave
 */
router.get("/posts/search", searchPosts);

/**
 * GET /posts
 * Lista todos os posts
 */
router.get("/posts", getAllPosts);

/**
 * GET /posts/:id
 * Retorna um post específico pelo ID
 */
router.get("/posts/:id", getPostById);

/**
 * POST /posts
 * Cria uma nova postagem
 */
router.post("/posts", createPost);

/**
 * PUT /posts/:id
 * Atualiza uma postagem existente
 */
router.put("/posts/:id", updatePost);

/**
 * DELETE /posts/:id
 * Remove uma postagem
 */
router.delete("/posts/:id", deletePost);

export default router;
