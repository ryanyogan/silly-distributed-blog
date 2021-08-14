const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post("http://posts-cluster-ip-srv:4000/events", event)
    .catch((err) => console.error(err.message));
  axios
    .post("http://comments-cluster-ip-srv:4001/events", event)
    .catch((err) => console.error(err.message));
  axios
    .post("http://query-cluster-ip-srv:4002/events", event)
    .catch((err) => console.error(err.message));
  axios
    .post("http://moderation-cluster-ip-srv:4003/events", event)
    .catch((err) => console.error(err.message));

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("http://event-bus-srv:4005");
});
