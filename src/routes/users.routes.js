import { Router } from "express";
import {getAllUsers,
        getUserById,
        searchUsers,
        createUser,
        updateUser,
        deleteUser
    } from "../controllers/user.controller.js";

const router = Router();


router.get("/users/", getAllUsers);
router.get("/users/:id", getUserById);
router.get('/users/search', searchUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);


export default router;