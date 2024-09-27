const express = require("express");
const app = express();
const cors = require("cors");

// render index.html

// express static dist folder

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("dist_tea"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist_tea/index.html");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
