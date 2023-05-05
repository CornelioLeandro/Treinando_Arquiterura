import express from "express";
import userRouter from "./routes/userRouter.js";
import erroLog from "./midleware/erroLog/index.js";
import erro404 from "./midleware/erro404/erro404.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use(erroLog);
app.use(erro404);

export default app;
