const express = require('express');
const mongoose = require('mongoose');

const app = express();
console.log("Rodando Servidor em localhost:3333");

//conecta banco
mongoose.connect('mongodb+srv://jobia_damone:jobia_damone@cluster0-6q2bx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
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

app.use(require('./routes'))

app.listen(3333);



