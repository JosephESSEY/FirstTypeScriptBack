import app from "./app";
import pool from "./config/database";

const PORT = process.env.PORT || 5000;

pool.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
