import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Namaste World!");
});

app.listen(Bun.env.PORT, () => {
  console.log("Example app listening on port 3000!");
});