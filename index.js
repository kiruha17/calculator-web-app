import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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