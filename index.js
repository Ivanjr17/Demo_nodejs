const { response } = require("express");
const express = require("express");
const send = require("send");

const app=express();

const PORT=4000;

app.get("/", (req,res)=>{
    res.send("Hola");
})

app.listen(PORT,()=>{
    console.log("Aplicacion corriendo en puerto", PORT);
})