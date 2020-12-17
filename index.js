const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(logger('dev'));

app.get("/", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname , "index.html"))
})


app.listen("3000", ()=>{console.log("app is initialising...")})