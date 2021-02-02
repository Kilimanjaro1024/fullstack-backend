require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection");
const cors = require("cors");
const corsOptions = require("./configs/cors.js");
const express = require("express");
const app = express();
const morgan = require("morgan");
const studentRouter = require("./controllers/Student.js");
const wandRouter = require("./controllers/Wand.js");



/////MIDDLEWARE///////
// app.use(cors())
app.use(express.urlencoded({extended:false}))
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json())
app.use(morgan())
// ROUTE FOR TESTING SERVER IS WORKING
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
});

app.use('/wands', wandRouter)
app.use('/students', studentRouter)
// Dog Routes send to dog router
// app.use("/dog", dogRouter);
//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});