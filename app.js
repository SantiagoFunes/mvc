const express = require('express');
const app = express();
const path = require('path');
const homeRoute = require("./routers/main.js");
const aboutRoute = require("./routers/about.js")

app.use(express.static(path.resolve(__dirname, "./public")));
app.use('/' , homeRoute)

app.use("/about", aboutRoute)

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Servidor funcionando en port: ${port}`)
});