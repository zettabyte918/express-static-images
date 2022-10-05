const express = require("express");
const app = express();
const port = 3000;

// whene you access "http://localhost:3000/images" it will load images from uplaods folder !
// if you have image called "Kanye-West.png" in uploads folder
// you can access it now from express with "http://localhost:3000/images/Kanye-West.png"
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
