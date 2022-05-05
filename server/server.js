const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

const { courseData } = require("./mock-data.json");

app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options("*", cors());
app.use(cors());

app.get("/course-data", (req, res) => {
  res.send(courseData);
});

const server = http.createServer(app);
server
  .listen(port, () => {
    console.log("Listening on port ", server.address().port);
  })
  .on("error", function (err) {
    process.once("SIGUSR2", function () {
      process.kill(process.pid, "SIGUSR2");
    });
    process.on("SIGINT", function () {
      process.kill(process.pid, "SIGINT");
    });
  });
