
const express = require("express");
const app = express();

app.use(express.json());

app.post("/scan", (req, res) => {
  console.log("📥 Data from device:", req.body);  // 🔥 สำคัญมาก

  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Scan API is running");
});

app.listen(3000, () => {
  console.log("🚀 Server started");
});
