import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import express, { json } from "express";

import routerPosts from "./routes/posts.routes.js";
import routerUser from "./routes/users.routes.js";
import { logger } from "./middlewares/loggers.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(json());
app.use(logger);
app.use(routerUser);
app.use(routerPosts);


export { app };
