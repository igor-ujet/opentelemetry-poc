require("./otel"); // IMPORTANTE: sempre primeiro

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("👉 Request em /");
  res.send("Hello OpenTelemetry POC 🚀");
});

app.get("/error", (req, res) => {
  console.log("👉 Request em /error");
  throw new Error("Erro simulado!");
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});