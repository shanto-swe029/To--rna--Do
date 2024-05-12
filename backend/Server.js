const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to mongoDB`))
  .catch((err) => console.log(err));
