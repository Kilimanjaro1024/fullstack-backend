require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection");
// const cors = require("cors");
// const corsOptions = require("./configs/cors.js");
const express = require("express");
const app = express();
const morgan = require("morgan");
// const dogRouter = require("./controllers/dog");
/////MIDDLEWARE///////
// ROUTE FOR TESTING SERVER IS WORKING
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
});
// Dog Routes send to dog router
// app.use("/dog", dogRouter);
//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});