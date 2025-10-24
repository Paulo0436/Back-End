require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const cookieParser = require('cookie-parser');
const produtosRouter = require("./routes/produtosRouter")

const app = express();

const url =`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASWD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DBNAME}`;

mongoose
.connect(url)
.then(() => console.log("Conectado ao MongoDB")).catch((err) =>{
    console.log("Erro ao conectar ao MongoDB" , err.message)
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', produtosRouter)

module.exports = app;
