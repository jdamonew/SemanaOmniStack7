const express = require('express');

const app = express();
console.log("Rodando Servidor em localhost:3333");

/*
post - cadastrar
get - buscar
put - editar
delete - deletar
*/

app.get('/', (req, res)=>{
       
    //res - para enviar alguma resposta
    return res.send(`Hello, ${req.query.name}`);

});

app.listen(3333);



