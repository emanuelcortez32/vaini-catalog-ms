import express, { ErrorRequestHandler, Express } from "express";
import helmet from "helmet";
import { PORT } from "./src/config";
import { errorHandler } from "./src/controllers/error.controller";
import { runDatabase } from "./src/database";
import { tokenAuthentication } from "./src/middlewares/security.middleware";
import { catalogRouter } from "./src/routes/catalog.route";
import { healthRouter } from "./src/routes/health.route";
import { productRouter } from "./src/routes/product.route";

const app: Express = express();

app.use(express.json());
app.use(helmet());

app.use(tokenAuthentication());
app.use('/health', healthRouter);
app.use('/catalog', catalogRouter);
app.use('/product', productRouter);

app.use(errorHandler());

runDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
