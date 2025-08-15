import express, { json } from "express";
import router from "./routes/posts.routes.js";
import { connectMongo } from "./config/database.js";
import { logger } from "./middlewares/loggers.js";

const app = express();
app.use(json());

// Middleware de log
app.use(logger);

// Middleware de roteamento
app.use(router);

const PORT = process.env.PORT || 3030;

connectMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
