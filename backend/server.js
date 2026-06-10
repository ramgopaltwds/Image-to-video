const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/templates", (req, res) => {
  res.json([
    {
      id: "birthday1",
      title: "Birthday Template"
    }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});