import { app } from "./app.js";
import { connectMongo } from "./config/database.js";

const PORT = process.env.PORT || 3000;

connectMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
