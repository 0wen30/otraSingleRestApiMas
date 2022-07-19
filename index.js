require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");

const mongostring = process.env.DATABASE_URL;

mongoose.connect(mongostring);
const database = mongoose.connection;

database.on("error",error=>{
    console.log(error);
});

database.once("connected",()=>{
    console.log("Conectado a la base de datos");
});

const app = express();

app.use(express.json());

app.use("/api",routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Servidor ejecutado en el puerto ${PORT}`);
});