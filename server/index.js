import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // fine for now; in dev proxy will avoid needing this
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is healthy ✅" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
