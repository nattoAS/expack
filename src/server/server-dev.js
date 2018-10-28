import path from "path";
import express from "express";

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "../html/index.html");

app.use(express.static(DIST_DIR));

app.use("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listenning to ${PORT}...`);
});
