import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/basic-math", (req, res) => {
  res.render("basic-math.ejs")
});

app.get("/financial-interest-calculator", (req, res) => {
  res.render("financial-interest-calculator.ejs")
});

app.get("/days-calculator", (req, res) => {
  res.render("days-calculator.ejs")
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});