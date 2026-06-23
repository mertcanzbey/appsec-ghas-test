const express = require("express");
const { exec } = require("child_process");
const app = express();

// Health endpoint (DAST probe için)
app.get("/", (req, res) => res.send("ok"));

// KASITLI ZAFIYET: command injection (CodeQL + Semgrep yakalamalı)
app.get("/ping", (req, res) => {
  exec("ping -c 1 " + req.query.host, (err, stdout) => res.send(stdout || String(err)));
});

app.listen(3000, "0.0.0.0", () => console.log("listening on 0.0.0.0:3000"));
