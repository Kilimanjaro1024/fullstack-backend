require("dotenv").config();
const mongoose = require("mongoose");
const { MONGODBURI } = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;