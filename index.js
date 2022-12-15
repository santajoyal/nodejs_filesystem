const fs = require("fs");
const express = require("express");
const app = express();

app.get("/folder", (req, res) => {
  fs.mkdir("./Nodejs_filesystem", function () {
    res.json({ message: "Folder Created" });
  });
});


app.get("/file", (req, res) => {
  var timestamp = new Date();
  var filename =
    timestamp.getDate() +
    "-" +
    timestamp.getMonth() +
    "-" +
    timestamp.getFullYear() +
    " " +
    timestamp.getHours() +
    "-" +
    timestamp.getMinutes();
  fs.writeFile(`Nodejs_filesystem/${filename}.txt`, `${timestamp}`, () => {
    console.log("File Created successfully");
  });
  res.json({
    message: "File Created successfully",
  });
});


app.get("/read", (req, res) => {
  fs.readdir("Nodejs_filesystem", function (err, files) {
    if (err) throw err;
    res.json({ message: "read all the files", files });
  });
});

app.listen(process.env.PORT || 3003);
