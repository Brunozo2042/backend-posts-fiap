import express, { json } from "express";
import router from "./routes/posts.routes.js";
import { connectMongo } from "./config/database.js";

const app = express();
app.use(json());
app.use(router);

const PORT = process.env.PORT || 3030;

connectMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
