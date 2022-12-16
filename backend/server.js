const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes"));

mongoose.set("debug", true);

mongoose.connect("mongodb://127.0.0.1:27017/artist-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => console.log(`🌍 Connected on localHost:${port}`));
