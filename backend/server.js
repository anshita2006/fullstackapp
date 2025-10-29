const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the Backend!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

