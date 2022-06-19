const express = require("express");
const app = express();

app.get("/srv", function (req, res) {
  res.send("Request anwser");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
