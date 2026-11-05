const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! My Node.js CI/CD pipeline is working.");
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;
