//criar uma quary(consulta) simples
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.listen(3000,()=>{
    console.log('servidor em execução');
})

//criação da conexão com o banco de dados

const conectionn = mysql.createConnection({
    host:'Localhost',
    user:'user_bd_tasks',
    
})