import cors from "cors";
import express from "express";

import homeRoutes from "./src/routes/homeRouter.js";
import pointsRouter from "./src/routes/pointsRouter.js";
import samplesRouter from "./src/routes/samplesRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", homeRoutes);
app.use("/points", pointsRouter);
app.use("/samples", samplesRouter);

export default app;
