import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

export default app;
