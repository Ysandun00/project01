const mongoose = require("mongoose");
const express = require("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
const bodyparser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const studentRouter = require("./routes/students.js");




app.use("/student",studentRouter);

const connection = mongoose.connection; 
 connection.once("open", () => {
    console.log("mongodb connection is successfull!");
})

app.listen(PORT, () =>{
    console.log(`server is up and running on port :${PORT}`)
})






