import express, { json } from "express";
import router from "./routes/posts.routes.js";
import { logger } from "./middlewares/loggers.js";

const app = express();
app.use(json());
app.use(logger);
app.use(router);

export { app };
