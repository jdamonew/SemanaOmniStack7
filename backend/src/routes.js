const express = require('express');

const routes = new express.Router();


routes.get('/', (req, res)=>{
    //res - para enviar alguma resposta
    return res.send(`Hello, ${req.query.name}`);

});


module.exports = routes;
